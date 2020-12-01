import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    tittel: {
      type: String,
      required: true,
      trim: true,
      min: ['3', 'En tittel må ha flere enn 3 tegn'],
      max: ['50', 'Tittel må være færre enn 50 tegn'],
    },
    slug: String,
    ingress: {
      type: String,
      required: true,
    },
    innhold: {
      type: String,
      required: true,
    },
    forfatter: {
      type: String,
      required: true,
    },
    administrator: {
      type: mongoose.Schema.ObjectId,
      ref: 'Administrator',
      required: true,
    },
    kategori: {
      type: mongoose.Schema.ObjectId,
      ref: 'Kategori',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ArticleSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

export default mongoose.model('Article', ArticleSchema);
