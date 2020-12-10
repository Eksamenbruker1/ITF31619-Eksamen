import Reference from '../models/reference.js';
import User from '../models/user.js';

export const createReference = async (data) => Reference.create(data);

export const getReferenceById = async (id) => Reference.findById(id);

export const listReferences = async () => Reference.find();

export const updateReference = async (id, data) => Reference.findByIdAndUpdate(id, data, {
  new: true,
  runValidators: true,
  useFindAndModify: false,
});
