import argon2 from 'argon2';
import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Fyll ut ønsket epost'],
      unique: true, // unique index and value
      validate: [validator.isEmail, 'Eposten er ikke gyldig'],
    },
    password: {
      type: String,
      required: [true, 'Fyll ut ønsket passord'],
      minlength: [4, 'Passordet må minmum bestå av 8 tegn'],
      select: false,
    },
    name: {
      type: String,
      required: [true, 'Fyll ut ditt navn'],
      minLength: [
        2,
        'Tviler på at du har et navn på en bokstav, skriv både fornavn og etternavn',
      ],
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin'],
      },
      default: 'user',
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

/*
UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
}); */

UserSchema.pre('save', async function () {
  this.password = await argon2.hash(this.password);
});

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

UserSchema.methods.comparePassword = async function (password) {
  const result = argon2.verify(this.password, password);
  return result;
};

UserSchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

const User = mongoose.model('User', UserSchema);

export default User;
