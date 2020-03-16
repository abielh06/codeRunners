const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    body: { type: String},
    date: { type: Date, Default: Date.now},
    postId: {type: String}
});

mongoose.model("posts", PostSchema)



