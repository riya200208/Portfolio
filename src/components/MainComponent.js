import React, { Component, Fragment } from 'react';
import Home from './HomeComponent';
import Project from './ProjectComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Comment from './CommentComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Fade from 'react-reveal/Fade';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';
import { postComment, fetchDishes,postFeedback, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} 1`;
      
const mapStateToProps = state =>{
  return {
    dishes:state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (feedback)=> dispatch(postFeedback(feedback)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: ()=> dispatch(fetchLeaders())
});

class Main extends Component{

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  render(){
    const HomePage = () =>{
      const animateList = [ <Home 
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promosLoading={this.props.promotions.isLoading}
        promosErrMess={this.props.promotions.errMess}
     
       
       />,<About  leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
               leadersLoading={this.props.leaders.isLoading}
               leadersErrMess = {this.props.leaders.errMess}
        />, <Project dishes={this.props.dishes} />, <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>,     <Comment
        comments={this.props.comments.comments.filter((comment) => comment)}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
        addComment={this.props.addComment}
      />];
       
      return(
      
        <Fragment className="block">
                     
        { animateList.map((item)=>(
            <div>
                <Fade top>
                    <div className="block" >
                        <div className="title">
                            {item}
                            </div>
                    
                    </div>
                </Fade>
            </div>
        ))}
    </Fragment>
    );

      
    }

  

  return (
    <div>
      <Bounce>
              <Header leader={this.props.leaders.leaders.filter((leader) => !leader.featured)[0]}
               leadersLoading={this.props.leaders.isLoading}
               leaderNew={this.props.leaders.leaders.filter((leader) => !leader.featured)[1]}
               leadersErrMess = {this.props.leaders.errMess}/>
              </Bounce>
     <TransitionGroup>
       <CSSTransition key = {this.props.location.key} classNames="page" timeout={300}>
     <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/projects" component={() => <Project dishes={this.props.dishes} />} />
             
              <Route path="/about" component={()=><About  leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leadersLoading={this.props.leaders.isLoading}
        leadersErrMess = {this.props.leaders.errMess}
 />}/>
              <Route exact path="/contact" component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
              <Redirect to="/home" />
     </Switch>
     </CSSTransition>
     </TransitionGroup>

  <Footer />
   </div> 
  );
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));