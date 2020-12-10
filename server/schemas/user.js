import Joi from 'joi';

const regex = '(?=.*[0-9])';

const userSchema = {
  email: Joi.string().email().required().messages({
    'any.required': 'Fyll ut med gyldig epost (skjema)',
    'string.email': 'Epost er ikke riktig format (skjema)',
    'string.empty': 'Epost feltet er tomt, fyll ut med gyldig epost (skjema)',
  }),
  password: Joi.string().regex(RegExp(regex)).min(3).required()
    .messages({
      'any.required': 'Du må definere et passord (skjema)',
      'string.min': 'Passord må ha minst 3 tegn (skjema)',
      'string.empty': 'Fyll inn passord (skjema)',
      'string.regex.base': 'Passordet ditt må inneholde minst 1 tall',
    }),
};

const registerValue = {
  name: Joi.string().required().min(2).max(500)
    .messages({
      'any.required': 'Fyll ut ditt navn',
      'string.min': 'Tviler på at ditt fulle navn er på 1 karakter, fyll ut hele navnet ditt',
      'string.max': 'Navnet ditt kan bare være på maksimalt 500 karakterer',
    }),
};

export const loginSchema = Joi.object()
  .keys({
    ...userSchema,
  })
  .options({ abortEarly: false });

export const registerSchema = Joi.object()
  .keys({
    ...userSchema,
    ...registerValue,
  })
  .options({ abortEarly: false });
