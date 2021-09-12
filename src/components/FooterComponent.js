import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props){
    return(
        <div className="footer bg-dark text-muted py-3">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled ">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Address</h5>
                    <address>
		              Navratan Hata<br />
		              Purnea, Bihar<br />
		              India<br />
		              <i className="fa fa-phone fa-lg"><a href="tel:+91 6287388363"> : +91 6287388363</a>
                      </i><br />
		             
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:riyadas.200208@gmail.com">
                         riyadas.200208@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                <div className="text-center">
                        <a className="btn btn-social-icon btn-google mx-sm-2" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook px-sm-2"></i></a>
                        <a className="btn btn-social-icon btn-linkedin mx-sm-2" href="https://www.linkedin.com/in/riya-das-ab8b6b211/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google mx-sm-2" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto: riyadas.200208@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 Riya Das</p>
                </div>
            </div>
        </div>
    </div>

    );
}
export default Footer;