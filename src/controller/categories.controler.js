const categoriesService = require('../service/categories.service');

const category = async (req, res) => {
  try {
    const categoryCreate = await categoriesService.categories(req.body);
    return res.status(201).json(categoryCreate);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'deu ruim',
    });
    }
};
const categoryAll = async (req, res) => {
  try {
    const categoriesAll = await categoriesService.categoriesAll(req.body);
    return res.status(200).json(categoriesAll);
  } catch (error) {
    console.log(error);
    return res.status(500).json('deu ruim');
  }
};

module.exports = {
  category,
  categoryAll,
};