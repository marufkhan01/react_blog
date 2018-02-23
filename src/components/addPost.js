import React, from 'react';

class AddPost extends Component {
constructor(props) {
  super(props);
  this.handleTitleChange = this.handleTitleChange.bind(this);
  this.handleSubjecChange = this.handleSubjectChange.bind(this);
  this.state = {
    title:'',
    subject:''
  };
}    
  }

  addPost(){
  axios.post('/addPost', {
    title: this.state.title,
    subject: this.state.subject
  })
  .then(function (response) {
    console.log('response from add post is ',response);
    hashHistory.push('/')
  })
  .catch(function (error) {
    console.log(error);
  });
}

  handleTitleChange(e){
    this.setState({title:e.target.value})
}
handleSubjectChange(e){
    this.setState({body:e.target.value})
}
    render() {

  

      return (
  
            <div className="form-group">
  <input type="text" onChange={this.handleTitleChange} className="form-control" id="title" name="title" placeholder="Title" required />
</div>
 
<div className="form-group">
  <textarea className="form-control" onChange={this.handleSubjectChange} type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
</div>
        <div className="col-md-5">
          <div className="form-area">  
              <form role="form">
              <br styles="clear:both" />
                <div className="form-group">
                  <input type="text" className="form-control" id="title" name="title" placeholder="Title" required />
                </div>
                
                <div className="form-group">
                <textarea className="form-control" type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
                </div>
                   
              <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
              </form>
          </div>
        </div>
      )
    }
}
export default AddPost;
