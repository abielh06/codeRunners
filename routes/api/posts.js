// const express = require('express');
// const router = express.Router();

// const Posts = require("../../models/Posts");

// router.post("/dashboard", (req, res) => {
//     Post.findOne({ body: req.body})
// })

// router.post("/dashboard", function(req,res){
//     const {body, postId } = req.body

//     const newPost = new Post({
        
//         body: body,
//         postId: postId
//     })

//     newPost.save((err, dbPost) => {
//         if (err) return res.json(err)
//         res.json(dbPost)
//         console.log(dbPost)
//     })
// })

// router.get("/:id", function(req,res){
//     Posts.find({postId: req.params.id}).then(results => res.json(results))
// })

// router.post("/posts", async (req, res) => {
//     const post = new Post({
//       title: req.body.title,
//       content: req.body.content
//     })
//     await post.save()
//     res.send(post)
//   })


// module.exports = router

const mongoose = require('mongoose');
const db =  require("../../models")
module.exports = (app) => {

  app.get(`/api/post`, async (req, res) => {
    let posts = await db.Post.find();
    return res.status(200).send(posts);
  });

  app.post(`/api/post`, async (req, res) => {
      // console.log(req.body)
      db.Post.create(req.body).then(function(data){
        // console.log("inside create", data.body)
          // res.send(data.body);
          var object = {post: data.body};
          res.json(object);
      });
    
  })
  app.get('/api/post/:id', async (req, res) =>{
    console.log(req.params.id)
    db.Post.find({userId:  req.params.id }).then(function (response){
      console.log(response);
      
      res.json(response)
    }).catch(function (error){
      res.json(null)
    })
  })

  app.put(`/api/post/:id`, async (req, res) => {
    const {id} = req.params;

    let post = await db.Post.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      post
    })

  });

  app.delete(`/api/post/:id`, async (req, res) => {
    const {id} = req.params;

    let post = await Post.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      post
    })

  })

}