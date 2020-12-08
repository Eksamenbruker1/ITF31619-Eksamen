// export const listArticles = async () => Article.find().populate('user','email','category','CategoryName');
export const listAuthors = async () => {
  const authorList = [
    {
      name: "Lars Larsen",
    },
    {
      name: "Gunn Gundersen",
    },
    {
      name: "Simen Simensen",
    },
  ];

  return authorList;
};
