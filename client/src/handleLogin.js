function validationFunction(values) {
  let error = {
    username: "",
    password: "",
  };
  const { username, password } = values;

  // Check if the username is valid
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  if (username === "") {
    error.username = "Please enter username";
  } else if (!usernameRegex.test(username)) {
    error.username = "Please enter a valid username";
  } else {
    error.username = "";
  }

  // Check if the password is valid
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (password === "") {
    error.password = "Please enter password";
  } else if (!passwordRegex.test(password)) {
    error.password = "Please enter a valid password";
  } else {
    error.password = "";
  }
  return error;
}

export default validationFunction;
