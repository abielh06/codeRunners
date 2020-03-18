import React from "react";
import axios from "axios";

 export default  {
 createForum: function (forumBody)  {
      return   axios.post("/api/post", forumBody)
    }
}

 