import Artikkel from '../models/article.js';
import Administrator from '../models/administrator.js';
import Category from '../models/category.js';

export const createAdministrator = async (data) => Administrator.create(data);

export const getAdministratorByEmail = async (email, usePassword) => {
  if (usePassword) {
    return (await Administrator.findOne(email)).isSelected('+password');
  }
  return Administrator.findOne(email);
};

export const listAdministratorArticles = async (id) => {
  if (id) {
    const articles = await Artikkel.find({ administrator: id }).populate(
      'administrator',
      'epost'
    );
    return articles;
  }
};
