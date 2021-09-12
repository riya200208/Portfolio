import React from 'react';
import { Loading } from './LoadingComponent';
import {
  Card, CardImg,
  CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
function RenderProjectItem({ dish, onClick}) {
  return (

    <Card className=" box-shadow-card text-muted">
       <Link to={`/projects/${dish.id}`}> 
      <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
          
          <CardTitle className="px-5 py-3">{dish.name}</CardTitle>
   
       </Link> 
      <CardTitle className="px-3">{dish.languages}</CardTitle>
          <CardTitle className="px-3">{dish.description}</CardTitle>
    </Card>
  );
}
const Project = (props) => {
  const project = props.dishes.dishes.map((dish) => {
    return (
      <div className="col-12 col-sm-4  py-5  mt-5">
        <RenderProjectItem dish={dish} />
      </div>
    );
  });
  if (props.dishes.isLoading) {
    return(
        <div className="container py-5 mt-5">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
}
else if (props.dishes.errMess) {
    return(
        <div className="container">
            <div className="row py-5 mt-5"> 
                <div className="col-12">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        </div>
    );
}
else
  return (
    <div className="container mt-5">
      <div className="row mt-5 pt-5">
     
      <div className="col-12 col-sm-1">
                    <hr className="text-danger border border-danger"/>
                    </div>
                    <div className="col-12 col-sm-2">
                        <h1>Projects</h1>
                        
                    </div>
                    <div className="col-12 col-sm-9 ">
                    <hr className="text-danger border border-danger"/>
                    </div>

      </div>
      <div className="row">
        {project}
      </div>
    </div>
  );
}


export default Project;