const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: {type: String },
    date: {type: Date, default: Date.now},
    commentId: {type: String}
});

mongoose.model("comments", CommentSchema)