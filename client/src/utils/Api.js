import React from "react";
import axios from "axios";

 export default  {
 createForum: function (forumBody)  { 
     let post = "";
       axios.post("/api/post", forumBody).then(function(response){
        console.log((response.data.post));
        post = response.data.post;
    });
    return post;
    },
    getAllforumsByID: function (id) {
      return  axios.get("/api/post/" + id)
    }
}

 