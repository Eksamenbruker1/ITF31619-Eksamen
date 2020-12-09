/*import Joi from 'joi';
//import Joi-password-complexity from 'joi-password-complexity';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const passwordComplexity = require('joi-password-complexity').default;

const complexityOptions = {
    min: 3,
    numeric: 1,
};

passwordComplexity(complexityOptions).validate();

const schemaRegister = Joi.object({
    email: Joi.string().email().min(1).max(255).required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(255).required(),
});

export const registerSchema = Joi.object()
  .keys({
    name: Joi.string(),
    ...schemaRegister,
  })
  .options({ abortEarly: false });*/