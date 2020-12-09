const { validationResult } = require('express-validator');

exports.crateBlogPost = (req, res, next) => {
  const title = req.body.title;
  // const iamge = req.body.image;
  const body = req.body.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error('Invalid Value');
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  const result = {
    message: 'Create Blog Post Success',
    data: {
      post_id: '1',
      title: 'Title Blog',
      image: 'imagefile.png',
      body: 'Lorem Ipsum is simplt dummby',
      created_at: '12/06/2020',
      author: {
        uid: 1,
        name: 'Testing',
      },
    },
  };
  res.status(201).json(result);
};
