
import React, {Component} from 'react';
import firebase from './firebase.js';

class Signin extends Component{

  state = {
    username:'',

    password:''
    
  }

  componentDidMount(){

    firebase.auth()
      .onAuthStateChanged((user) => {
        if(user){
          console.log(user);
          this.setState({user:user})
        }
        else{
          this.setState({user:''})
        }
      })
  }
  onSubmit = (e) => {

    e.preventDefault();
    firebase.auth()
    .createUserWithEmailAndPassword(this.state.username,this.state.password)
    .then(user=>console.log("user"))
    .catch(error => console.log(error));
  };

  signIn = () =>{
    firebase.auth()
      .signInWithEmailAndPassword(this.state.username,this.state.password)
      .catch(error => console.log(error));
  }

  signOut = () => {

    firebase.auth().signOut();
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render (){
    return(
      <div>
         <nav>
                <ul class="nav nav-pills pull-right">
                    <li role="presentation" class="active"><a href="#">Home</a></li>
                    <li role="presentation"><a href="#">Add</a></li>
                    <li role="presentation"><a href="#">Logout</a></li>
                </ul>
            </nav>
            <div id="app" class="jumbotron">
 
        </div>
 
        <header>
          <h1> Welcome to our React Blog  {this.state.user && this.state.user.email}</h1>
        
        </header>
        

        <main>
          
          <form onSubmit={this.onSubmit}>

          <div className={'form-group'}>
            
            <input
                type="text"
                name="username"
                className="form-control m-3"
                value={this.state.username}
                onChange={this.onChange}
                />

             <input
                type="text"
                name="password"
                className="form-control m-3"
                value={this.state.password}
                onChange={this.onChange}
                />
              </div>

            <input type="submit" value="Register" className="btn btn-primary m-3" />
        </form>

         { !this.state.user && <button onClick={this.signIn}> Login </button>}
          { this.state.user && <button onClick={this.signOut}> Sign out </button> }
     </main>
      </div>
      );
  }
}

export default Signin;