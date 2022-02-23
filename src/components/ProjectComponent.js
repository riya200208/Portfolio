import React from 'react';
import { Loading } from './LoadingComponent';
import {
  Card, CardImg,
  CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
function RenderProjectItem({ project, onClick}) {
  return (

    <Card className=" box-shadow-card text-muted">
       <Link to={`/projects/${project.id}`}> 
      <CardImg width="100%" src={baseUrl + project.image} alt={project.name} />
          
          <CardTitle className="px-5 py-3">{project.name}</CardTitle>
   
       </Link> 
      <CardTitle className="px-3">{project.languages}</CardTitle>
          <CardTitle className="px-3">{project.description}</CardTitle>
    </Card>
  );
}
const Project = (props) => {
  const project = props.projects.projects.map((project) => {
    return (
      <div className="col-12 col-sm-4  py-5  mt-5">
        <RenderProjectItem project={project} />
      </div>
    );
  });
  if (props.projects.isLoading) {
    return(
        <div className="container py-5 mt-5">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
}
else if (props.projects.errMess) {
    return(
        <div className="container">
            <div className="row py-5 mt-5"> 
                <div className="col-12">
                    <h4>{props.projects.errMess}</h4>
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