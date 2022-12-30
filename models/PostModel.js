import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: "Anonymouse",
    },
    attachment: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
export const PostModal = mongoose.model("Post", schema);
