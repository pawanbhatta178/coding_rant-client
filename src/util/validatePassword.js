const validatePassword = (password) => {
  var strongPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (password.match(strongPassword)) {
    return true;
  } else {
    return false;
  }
};
module.exports = validatePassword;
