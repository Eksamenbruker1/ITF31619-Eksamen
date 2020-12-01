import argon2 from 'argon2';
import mongoose from 'mongoose';
import validator from 'validator';
//import argon2 from 'argon2';

const { Schema } = mongoose;

const AdministratorSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Fyll ut epost'],
      unique: true, // unique index and value
      validate: [validator.isEmail, 'Eposten er ikke gyldig'],
    },
    password: {
      type: String,
      required: [true, 'Fyll ut passord'],
      minlength: [4, 'Passordet må minmum bestå av 8 tegn'],
      select: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

/*
AdministratorSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});*/

AdministratorSchema.pre('save', async function (next) {
    this.password = await argon2.hash(this.password);
})


AdministratorSchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'administrator',
  justOne: false,
});

const Administrator = mongoose.model('Administrator', AdministratorSchema);

export default Administrator;