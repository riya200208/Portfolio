import React from 'react';

import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

import { FadeTransform } from 'react-animation-components';


function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else {
        return(
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
              
                <img src={baseUrl + item.image} height="auto" width="100%" alt={item.name} className="rounded"/>
                     
                
            </FadeTransform>
        );
    }
}


function About(props) {
  

   
   

         return (
            <div className="container  py-sm-5  ">
            <div className="row my-sm-5">
            <div className="col-sm-4">
            <hr className="text-danger border border-danger"/>
                </div>
                <div className="col-sm-2 ">
                    <h1>About</h1>
                    </div>
                    <div className="col-sm-6">
                    <hr className="text-danger border border-danger"/>
                </div>
            </div>
            <div className="row px-sm-3 py-sm-5">
                <div className="col-12 col-sm-9 py-sm-5">
                    <h5>
                      Deligent web developer look forward to gain experience as a developer, trying to enhance technical as well as soft skills and 
to build innovative and cutting is business solution for the impressive suite 
of clients within its global reach. I would love to put my passion and skills to your organization's unique approach and also I would love to contribute to your organization's upcoming challanges.  .   </h5>
                </div>
                <div className="col-12 col-sm-3">
                <RenderCard item={props.leader}
                        isLoading={props.leadersLoading}
                        errMess={props.leadersErrMess} />
                </div>


            </div>
            <div className="row py-3">
                <div className="col-12 col-sm-2 pl-sm-5">
                <h4>React Js </h4>
                </div>
                <div className="col-12 col-sm-5">
                <hr className="text-danger border border-danger"/>
                </div>
                
              
            </div>
            <div className="row">
                <div className="col-12 col-sm-2 pl-sm-5">
                <h4>Javascript </h4>
                </div>
                <div className="col-12 col-sm-6 mx-0">
                <hr className="text-danger border border-danger"/>
                </div>
              
            </div>
            <div className="row py-3">
                <div className="col-12 col-sm-2 pl-sm-5">
                <h4>Bootstrap </h4>
                </div>
                <div className="col-12 col-sm-7">
                <hr className="text-danger border border-danger"/>
                </div>
              
            </div>
            <div className="row py-3">
                <div className="col-12 col-sm-2 pl-sm-5">
                <h4>CSS </h4>
                </div>
                <div className="col-12 col-sm-8">
                <hr className="text-danger border border-danger"/>
                </div>
              
            </div>
            <div className="row py-3">
                <div className="col-12 col-sm-2 pl-sm-5">
                <h4>HTML</h4>
                </div>
                <div className="col-12 col-sm-9">
                <hr className="text-danger border border-danger"/>
                </div>
              
            </div>

        </div>
        );
        
}

export default About;