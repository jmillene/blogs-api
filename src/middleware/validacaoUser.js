const validaDisplayname = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};
const validaEmail = (req, res, next) => {
  const { email } = req.body;
  const validacaoEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const valEmail = validacaoEmail.test(email);
  if (!valEmail) {
    return res
      .status(400)
      .json({
        message: '"email" must be a valid email',
      });
  }
  next();
};
const validaPassword = (req, res, next) => {
  const { password } = req.body;
    if (password.length < 6) {
      return res.status(400).json({
        message: '"password" length must be at least 6 characters long',
      });
    }
    next();
  };
  
module.exports = {
  validaDisplayname,
  validaEmail,
  validaPassword,
};