function checkEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function checkPassword(password) {
  const passwordLength = password ? password.length : 0;
  return !(passwordLength < 6);
}

function checkTwoValue(a, b) {
  return a === b ? true : false;
}

const value = { checkEmail, checkPassword, checkTwoValue };

module.exports = value;
