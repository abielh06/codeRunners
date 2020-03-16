// const express = require("express");
// const router = express.Router();

// const Comments = require("../../models/Comments");

// router.post("/dashboard", (req, res) => {
//     Comments.findOne({ body: req.body})
// })

// router.post("/dashboard", function(req,res){
//     const {text, postId } = req.body

//     const newComment = new Comment({
        
//         text: text,
//         postId: postId
//     })

//     newComment.save((err, dbComment) => {
//         if (err) return res.json(err)
//         res.json(dbComment)
//         console.log(dbComment)
//     })
// })

// router.get("/api/comment/:id", function(req,res){
//     Comments.find({commentId: req.params.id}).then(results => res.json(results))
// });

// router.get('/', (req, res) => {
// })

// // Get one subscriber
// router.get('/:id', (req, res) => {
// })

// // Create one subscriber
// router.post('/', async (req, res) => {
//     const comment = new Comment({
//       text: req.body.text,
//       date: req.body.date
//     })
  
//     try {
//       const newComment = await comment.save()
//       res.status(201).json(newComment)
//     } catch (err) {
//       res.status(400).json({ message: err.message })
//     }
//   })

// // Update one subscriber
// router.patch('/:id', (req, res) => {
// })

// // Delete one subscriber
// router.delete('/:id', (req, res) => {
// })


// module.exports = router

const mongoose = require('mongoose');
const Comment = mongoose.model('comments');

module.exports = (app) => {

  app.get(`/api/comment`, async (req, res) => {
    let comments = await Comment.find();
    return res.status(200).send(comments);
  });

  app.post(`/api/comment`, async (req, res) => {
    let comment = await Comment.create(req.body);
    return res.status(201).send({
      error: false,
      comment
    })
  })

  app.put(`/api/comment/:id`, async (req, res) => {
    const {id} = req.params;

    let comment = await Comment.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      comment
    })

  });

  app.delete(`/api/comment/:id`, async (req, res) => {
    const {id} = req.params;

    let comment = await Comment.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      comment
    })

  })

}