import React, { Component } from "react";
import {
 Button,  Row, Label
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

import { Fade, Stagger} from 'react-animation-components';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


function RenderComments({comments, postComment}) {
  if (comments != null) {
    return (
      <div>
       
      
     
      <ul className="list-unstyled">
            <Stagger in>
            {comments.map((comment) => {
              return(
                <Fade in>
            <li>
              <p>{comment.comment}</p>
              <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
            </li>
            </Fade>
            );
            })}
            </Stagger>
          </ul>
    
         
          
          <CommentForm postComment={postComment} />
      </div>
    );

  }
  else {
    return (
      <div></div>
    );
  }

}
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("current state is : " + JSON.stringify(values));
    alert("current state is : " + JSON.stringify(values));

    this.props.postComment(values.author, values.comment);


  }

  render() {

    return (
      <>
     <div className="row ">
       <div className="col-12 col-md">
       <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            
              <Row className="form-group">
                <Label htmlFor="name">Your Name</Label>

                <Control.text model=".author" id="name" name="author"
                  placeholder="Your Name"
                  className="form-control box-shadow-input border-danger"
                  validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: 'Required',
                    minLength: ' Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less'
                  }}
                
                />
              </Row>
              <Row className="form-group my-5">
                <Label htmlFor="message">Comment
                </Label>

                <Control.textarea model=".comment" id="message" name="comment"
                  rows="6"
                  className="form-control  box-shadow-input border-danger" />
              </Row>
              <Row className="form-group my-5">
                <Button type="submit" className="box-shadow-button border-danger mx-auto px-sm-5 py-2">
                  Comment
                </Button>
              </Row>
            </LocalForm>
        
       </div>
     </div>
       
         
      </>
    );
  }
}
const Comment = (props) => {

    return (
      <div className="container">
         <div className="row">
          <div className="col-12 col-sm-3">
          <hr color="red"/>
          </div>
          <div className="col-12 col-sm">
          <h1>Leave a comment</h1>
          </div>
          <div className="col-12 col-sm">
          <hr color="red"/>
          </div>
        </div>
        <div className="row">
 
          <div className="col-12 col-md-5 m-2">
          <RenderComments comments={props.comments}
        postComment={props.postComment}
       
      /> 
          </div>

        </div>
      </div>
    )

}

export default Comment;