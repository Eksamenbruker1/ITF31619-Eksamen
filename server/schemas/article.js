import Joi from 'joi';

const articleSchema = {
    title: Joi.string().min(3).max(100).required().messages({
        'any.required': 'Fyll ut tittel for artikkel (skjema)',
        'string.min': 'Et tittel må minst ha 3 tegn (skjema)',
        'string.max': 'En tittel kan maks være på 100 tegn',
        'string.empty': 'Tittel feltet er tomt, fyll ut med gyldig tittel (skjema)'
    }),
    ingress: Joi.string().min(5).max(1000).required().messages({
        'any.required': 'Definer ingress, dette bør være en oppsummering av artikkelen (skjema)',
        'string.min': 'Ingress må ha minst 5 tegn (skjema)',
        'string.max': 'Ingress kan maks være på 1000 tegn (skjema)',
        'string.empty': 'Fyll inn passord (skjema)'
    }),
    content: Joi.string().min(50).max(10000).required().messages({
        'any.required': 'Fyll ut artikkel med innhold (skjema)',
        'string.min': 'En artikkel bør minst være på 50 tegn (skjema)',
        'string.max': 'En artikkel kan maksimalt være på 10000 tegn',
        'string.empty': 'Innhold feltet er tomt, fyll ut med innhold til artikkel (skjema)'
    }),
    author: Joi.string().min(2).max(100).required().messages({
        'any.required': 'Velg en forfatter fra listen',
        'string.min': 'Det skal ikke være mulig å ha for få tegn i forfatter så lenge du skal velge fra en liste. Har du valgt en forfatter fra listen?',
        'string.max': 'Det skal ikke være mulig å ha for mange tegn i forfatter så lenge du skal velge fra en liste. Har du valgt en forfatter fra listen?',
        'string.empty': 'Vennligst velg en forfatter fra listen'
    }),
    secret: Joi.boolean(),
    category: Joi.string().required().messages({
        'any.required': 'En artikkel må ha en kategori'
    }),
};

export const createArticleSchema = Joi.object().keys({
    name: Joi.string(),
    ...articleSchema,
  })
  .options({ abortEarly: false });