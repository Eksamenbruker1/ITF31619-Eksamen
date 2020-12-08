import Joi from 'joi';

const userSchema = {
    email: Joi.string().email().required().messages({
        'any.required': 'Fyll ut med gyldig epost (skjema)',
        'string.email': 'Epost er ikke riktig format (skjema)',
        'string.empty': 'Epost feltet er tomt, fyll ut med gyldig epost (skjema)'
    }),
    password: Joi.string().min(5).required().messages({
        'any.required': 'Du må definere et passord (skjema)',
        'string.min': 'Passord må ha minst 5 tegn (skjema)',
        'string.empty': 'Fyll inn passord (skjema)',
    }),
};

export const registerSchema = Joi.object().keys({
    name: Joi.string(),
    ...userSchema,
  })
  .options({ abortEarly: false });

export const loginSchema = Joi.object().keys({
  ...userSchema,
})
.options({abortEarly: false});