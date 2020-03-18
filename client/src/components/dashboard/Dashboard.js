import React, { Component } from "react";
import Home from "../slideshow/Home";
import Forum from "../forum/forum";
import Post from "../post/post";
import API from "../../utils/Api";

class Dashboard extends Component {
  
  
  state = {
    posts: [],
    search: "",
    results: ""
   }

  handlePostEditorInputChange=(ev) => {
     const {name, value} = ev.target
    this.setState({
      [name]: ev.target.value
    });
  }

  createPost=(event)=> {
      alert("clicked")
      console.log(this.state.search, " test")
      let newForum = {
        body: this.state.search
      }
      API.createForum(newForum).then(function(response){
             this.setState({
               results: response
             })
      })
  //   this.props.addPost(this.state.newPostBody);
  //   this.setState({
  //     newPostBody: '',
  //   });
  }

  // addPost(postBody) {
  //   const postToSave = {postBody};
  //   this.databaseRef.push().set(postToSave);
  // }

  updateLocalState(response) {
    const posts = this.state.posts;
    const brokenDownPost = response.postBody.split(/[\r\n]/g);
    posts.push(brokenDownPost);
    this.setState({
      posts: posts
    });
  }

  render() {

    return (
      <div style={{ position: "relative", width: "100%", height: "120vh" }} className="container-fluid">
        <Home style={{ position: "absolute", zIndex: "1" }} />
        
        <div>
        {
          this.state.posts.map((postBody, idx) => {
            return (
              <Post key={idx} postBody={postBody}/>
            )
          })
        }
        <Forum search={this.state.search}  handlePostEditorInputChange={this.handlePostEditorInputChange}  createPost={this.createPost}  />
      </div>
        
      </div>
    );
  }
}

export default (Dashboard)