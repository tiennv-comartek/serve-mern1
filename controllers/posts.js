import { PostModal } from "../models/PostModel.js";

export const getPost = async (req, res) => {
  try {
    const post = await PostModal.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createPost = async (req, res) => {
  try {
    const newPost = req.body;
    const post = PostModal(newPost);
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await PostModal.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
