// Checks if value is empty: for required validation
const isEmpty = (value) => value === '';

// Checks if valid email is given
const isEmail = (value) => {
  // Regular expression used W3C to validate email
  const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return reg.test(value);
};

export {
  isEmpty,
  isEmail,
};
