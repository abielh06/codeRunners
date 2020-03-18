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