import React, { Component } from "react";
import "./style.css"

function Forum(props) {

  return (
    <div className="panel panel-default post-editor">
      <div className="panel-body">

        <br></br>
        <div className="form-control post-editor-input" style={{ backgroundColor: "white",  overflowY: "scroll", height: "50vh" }} >
          {props.updateLocalState.map(forum => {
            return (
              <div>
                {forum.body}
                <br/>
              </div>
            )
          })
          }

        </div>
        <br></br>

        <textarea style={{ backgroundColor: "white"}} className="form-control post-editor-input" name="search" value={props.search} onChange={props.handlePostEditorInputChange} />
        <button className="btn btn-success post-editor-button" onClick={props.createPost}>Post</button>
      </div>
    </div>
  )

}
export default Forum;