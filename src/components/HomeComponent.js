import React from 'react';
import {
     Button
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else {
        return (
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <img src={baseUrl + item.image} height="auto" width="100%" alt={item.name} className="rounded" />



            </FadeTransform>
        );
    }
}

function Home(props) {
    return (
        <div className="container py-5 mt-5">
            <div className="row align-items-start">
        

                <div className="col-12 col-sm-6 ">
                    <RenderCard item={props.promotion}
                        isLoading={props.promosLoading}
                        errMess={props.promosErrMess} />
                </div>
                <div className="col-12 col-md offset-sm-1">
                    <div className="row py-5">
                        <div className="col-12 col-sm">
                            <h1 className=" pl-5 font-bold">Hey, I am<br /><h1 className="pt-4"> Riya Das<span className="fa fa-angellist fa-lg px-3 " /></h1></h1>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 col-sm">
                            <h3 className="py-5">
                                Web developer / designer.
                            </h3>
                        </div>

                    </div>
                    <div className="row pb-5 ">
                        <div className="col-12 col-sm ">
                            <NavLink className="nav-link " to="/contact">

                                <Button outline className="ml-5 pt-2 border-danger text-muted box-shadow-button"><h5 >Get in touch
              </h5>  
                                </Button> 
   </NavLink>
                        </div>
                    </div>  
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;