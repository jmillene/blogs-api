const caretgoriesService = require('../service/categories.service');

const category = async (req, res) => {
  try {
    const categoryCreate = await caretgoriesService.categories(req.body);
    return res.status(201).json(categoryCreate);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'deu ruim',
    });
    }
};

module.exports = {
  category,
};