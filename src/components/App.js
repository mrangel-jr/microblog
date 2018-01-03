import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Alert, Button } from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';
import Category from './Category';
import EditPost from './EditPost';
import NewPost from './NewPost';
import ViewPost from './ViewPost';
import ListPost from './ListPost';

const App = props => (
  <Router>
    <div className="App">
      {
        /*props.userId && !props.emailVerified ? <Alert className="verify-email text-center">
        <p>Hey friend! Can you <strong>verify your email address</strong> ({props.emailAddress})
         for us? <Button bsStyle="link" 
         onClick={() => handleResendVerificationEmail(props.emailAddress)} 
         href="#">Re-send verification email</Button></p></Alert> : ''
         <Navigation {...props} />*/
      }
      
      <Grid>
        <Switch>
          <Route exact name="index" path="/" component={ListPost} />
          <Route exact path="/:category" component={Category} {...props} />
          <Route exact path="/:category/new" component={NewPost} {...props} />
          <Route exact path="/:category/:_id" component={ViewPost} {...props} />
          <Route exact path="/:category/:_id/edit" component={EditPost} {...props} />
          {
            /*
            <Authenticated exact path="/profile" component={Profile} {...props} />
            <Public path="/signup" component={Signup} {...props} />
            <Public path="/login" component={Login} {...props} />
            <Route path="/logout" component={Logout} {...props} />
            <Route name="verify-email" path="/verify-email/:token" component={VerifyEmail} />
            <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
            <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
            <Route name="terms" path="/terms" component={Terms} />
            <Route name="privacy" path="/privacy" component={Privacy} />
            <Route name="examplePage" path="/example-page" component={ExamplePage} />
            <Route component={NotFound} />*/
          }
        </Switch>
      </Grid>
    </div>
  </Router>
);

export default App;
