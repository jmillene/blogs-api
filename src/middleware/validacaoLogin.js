const validaLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missin' });
  }
 
  next();
};

module.exports = { validaLogin };