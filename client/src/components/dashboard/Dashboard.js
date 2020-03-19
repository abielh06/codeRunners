import React, { Component } from "react";
import Home from "../slideshow/Home";
import Forum from "../forum/forum";
import Post from "../post/post";
import API from "../../utils/Api";

class Dashboard extends Component {


  state = {
    forum: [],
    search: ""
  }

  handlePostEditorInputChange = (ev) => {
    const { name, value } = ev.target
    this.setState({
      [name]: ev.target.value
    });
  }

  refresh = () => {
    var id = localStorage.getItem("jwtToken").split("|")[1]
    if (id !== undefined) {

      console.log(id + "Testing the id")
      API.getAllforumsByID(id).then((response) => {

        console.log("users ID", response.data);
        if (response !== null) {
          
          this.setState({
            forum: response.data
          })
          console.log("post: ", this.state.forum);
        }

      })
    }

  }

  componentDidMount = () => {
    this.refresh()

  }

  createPost = (event) => {
    // alert("clicked")
    // console.log(this.state.search, " test")
    var id = localStorage.getItem("jwtToken").split("|")[1]
    if (id != undefined) {

      let newForum = {
        body: this.state.search,
        userId: id
      };

      var test = API.createForum(newForum);
      console.log(test + "the response");
    }
    this.refresh()

  }


  updateLocalState(response) {
    const forum = this.state.forum;
    const brokenDownPost = response.postBody.split(/[\r\n]/g);
    forum.push(brokenDownPost);
    this.setState({
      forum: forum
    });
  }

  render() {

    return (
      <div style={{ position: "relative", width: "100%", height: "120vh" }} className="container-fluid">
        <Home style={{ position: "absolute", zIndex: "1" }} />
        <div>
          <Forum updateLocalState={this.state.forum} search={this.state.search} handlePostEditorInputChange={this.handlePostEditorInputChange} createPost={this.createPost} />
        </div>
      </div>
    );
  }
}

export default Dashboard