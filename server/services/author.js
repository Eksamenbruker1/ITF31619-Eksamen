//export const listArticles = async () => Article.find().populate('user','email','category','CategoryName');
export const listAuthors = async () => {
  let authorList = [
    {
      name: 'Lars Larsen',
    },
    {
      name: 'Gunn Gundersen',
    },
    {
      name: 'Simen Simensen',
    },
  ];

  return authorList;
};
