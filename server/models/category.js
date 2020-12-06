import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    CategoryName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      min: ['3', 'Navnet på en kategori må være mellom 2 og 20 tegn'],
      max: ['20', 'Navnet på en kategori må være under 20 tegn'],
    },
    slug: String,
    Description: {
      type: String,
      required: false,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

CategorySchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'category',
  justOne: false,
});

CategorySchema.pre('save', function (next) {
  this.slug = slugify(this.CategoryName, { lower: true });
  next();
});

export default mongoose.model('Category', CategorySchema);
