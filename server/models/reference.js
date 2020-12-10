import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;

const ReferenceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: ['1', 'Fyll ut navn'],
      max: ['100', 'Navnet ditt kan maks være 100 tegn'],
    },
    email: {
      type: String,
      required: [true, 'Fyll ut eposten du ønsker å motta bekreftelse på'],
      validate: [validator.isEmail, 'Eposten er ikke gyldig'],
    },
    subject: {
      type: String,
      required: true,
      trim: true,
      min: ['2', 'Emne må være over 2 tegn'],
      max: ['20', 'Navnet på emnet må være under 20 tegn'],
    },
    content: {
      type: String,
      required: true,
      min: ['2', 'En henvendelse må minst være på 2 tegn'],
      max: ['1000', 'En henvendelse kan maks være på 1000 tegn'],
    },
    resolved: {
      type: Boolean,
      default: false,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true },
);

export default mongoose.model('Reference', ReferenceSchema);
