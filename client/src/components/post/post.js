import React from 'react';
import './postStyle.css';

const Post = (props) => (
  <div className="panel panel-default">
    <div className="panel-body">
    { console.log(props.postBody, "this is the display")}
      {
       
          <div key={props.key}>{props.postBody}</div>
        
      }
    </div>
  </div>
);

export default Post;


