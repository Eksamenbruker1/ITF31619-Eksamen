import Article from '../models/article.js';
import { ApiFilters } from '../utils/apiFilters.js';
import { categoryService } from './index.js';

export const getArticleBySlug = async (slug) => Article.findOne({ slug: `${slug}` }).exec();

export const getArticleById = async (id) => Article.findById(id);

// export const listArticles = async () => Article.find().populate('user','email','category','CategoryName');
export const listArticles = async (queryStr) => {
  const { page, limit } = queryStr;

  // Article.find({categoryname: queryStr.categoryname});
  let findArticle = '';

  if (queryStr.categoryname) {
    if (queryStr.secret != undefined) {
      findArticle = Article.find({ categoryname: queryStr.categoryname, secret: queryStr.secret });
    } else {
      findArticle = Article.find({ categoryname: queryStr.categoryname });
    }
  } else if (queryStr.secret != undefined) {
    findArticle = Article.find({ secret: queryStr.secret });
  } else {
    findArticle = Article.find();
  }

  const filters = new ApiFilters(findArticle, queryStr)
    .filter()
    .sort()
    .limitFields()
    .searchByQuery();

  const articles = await filters.query; 3;
  const paginated = await filters
    .pagination()
    .query.populate('category', 'CategoryName')
    .populate('user', 'name');

  // const articles = await filters.query.populate('category','CategoryName').populate('user','name')
  return {
    results: articles.length,
    totalPages: Math.ceil(articles.length / limit) || 1,
    currentPage: page && page > 0 ? parseInt(page) : 1,
    data: paginated,
  };
  // Article.find().populate('category','CategoryName').populate('user','name')
};

export const createArticle = async (data) => {
  const category = await categoryService.getCategoryById(data.category);

  data.categoryname = category.CategoryName;

  Article.create(data);
};

export const updateArticle = async (id, data) => {
  if (data.category) {
    const category = await categoryService.getCategoryById(data.category);
    console.log(`${category.CategoryName}`);

    data.categoryname = category.CategoryName;
  }

  const article = await Article.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return article;
};

export const removeArticle = async (id) => {
  const article = await Article.findById(id);
  article.remove();
};
