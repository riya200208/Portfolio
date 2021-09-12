import React, { Component , } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl} from '../shared/baseUrl';
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
           
              
                <img src={baseUrl + item.image} height="auto" width="100%" alt={item.name} className="rounded"/>
                     
                
         
        );
    }
}



class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen:false
        };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
 
    }
    toggleNav(){
        this.setState({isNavOpen: !this.state.isNavOpen});
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
   
    render() {
    
        return (
            // <><React.Fragment>
            <>
                 <Navbar dark expand="md" className=" py-sm-2 box-shadow " fixed="top" >
        <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="">
                        <NavLink className="nav-link border border-white px-3" to="/home">
                                    RIYA
                              </NavLink> </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                            <NavLink className="nav-link  px-sm-5" to="/about">
                                   
                                   About
                                  
                                   
                               </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link px-sm-5" to="/projects">
                                
                                Projects
                           
                       </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link px-sm-5" to="/contact">
                                 
                                 Contact 
                           
                       </NavLink>
                            </NavItem>
                          

                        </Nav>
                        <Nav  navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal} className="border-danger box-shadow-button ">Reume</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
   
                     <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                     <ModalHeader toggle={this.toggleModal}>Resume</ModalHeader>
                 <ModalBody >
                 <RenderCard item={this.props.leader}
                        isLoading={this.props.leadersLoading}
                        errMess={this.props.leadersErrMess} />
                          <RenderCard item={this.props.leaderNew}
                        isLoading={this.props.leadersLoading}
                        errMess={this.props.leadersErrMess} />
                 </ModalBody >
                    </Modal>

            </>
        )
    }
    
}

export default Header;