import Artikkel from "../models/article.js";
import User from "../models/user.js";

export const createUser = async (data) => User.create(data);

export const createAdmin = async (data) => User.create(data);

export const getUserById = async (id) => User.findById(id);

export const getUserByEmail = async (email, usePassword) => {
  if (usePassword) {
    // return (await User.findOne(email)).isSelected('+password');
    return User.findOne(email).select("+password");
  }
  return User.findOne(email);
};

export const listUserArticles = async (id) => {
  if (id) {
    const articles = await Artikkel.find({ user: id }).populate(
      "user",
      "email"
    );
    return articles;
  }
};
