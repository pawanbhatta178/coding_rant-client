const validateEmail = (emailAddress) => {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAddress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
};
console.log(validateEmail("asasas@gmail.com"));
module.exports = validateEmail;
