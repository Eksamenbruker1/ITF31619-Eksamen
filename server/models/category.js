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
      max: ['30', 'Navnet på en kategori må være under 30 tegn'],
    },
    slug: String,
    Description: {
      type: String,
      required: false,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

CategorySchema.virtual('articles', {
  ref: 'Article',
  localField: 'CategoryName',
  foreignField: 'category',
  justOne: false,
});

CategorySchema.virtual('articles', {
  ref: 'Article',
  localField: 'CategoryName',
  foreignField: 'categoryname',
  justOne: false,
});

CategorySchema.pre('save', function (next) {
  this.slug = slugify(this.CategoryName, { lower: true });
  next();
});

export default mongoose.model('Category', CategorySchema);
