import Article from '../models/article.js';
import { ApiFilters } from '../utils/apiFilters.js';

export const getArticleById = async (id) => Article.findById(id);

//export const listArticles = async () => Article.find().populate('user','email','category','CategoryName');
export const listArticles = async (queryStr) => {
    const { page, limit } = queryStr;
    const filters = new ApiFilters(Article.find(), queryStr).filter().sort().limitFields().searchByQuery();
    
    const articles = await filters.query;
    const paginated = await filters.pagination().query.populate('category','CategoryName').populate('user','name');

    //const articles = await filters.query.populate('category','CategoryName').populate('user','name')
    return {
        results: articles.length,
        totalPages: Math.ceil(articles.length / limit) || 1,
        currentPage: page && page > 0 ? parseInt(page) : 1,
        data: paginated,
    };
    // Article.find().populate('category','CategoryName').populate('user','name')
};

export const createArticle = async (data) => Article.create(data);

export const updateArticle = async (id, data) =>
    Article.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

export const removeArticle = async (id) => {
    const article = await Article.findById(id);
    article.remove();
};