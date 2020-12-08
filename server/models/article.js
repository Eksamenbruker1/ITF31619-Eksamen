import mongoose from "mongoose";
import slugify from "slugify";

const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      min: ["3", "En tittel må ha flere enn 3 tegn"],
      max: ["50", "Tittel må være færre enn 50 tegn"],
    },
    slug: String,
    ingress: {
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
    },
    secret: {
      type: Boolean,
      default: true,
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: false,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ArticleSchema.index({
  title: "text",
});

ArticleSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

export default mongoose.model("Article", ArticleSchema);
