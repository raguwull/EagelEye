function validationFunction(values) {
  let error = {
    username: "",
    email: "",
    password: "",
    usertype: "",
  };
  const { username, email, password, usertype } = values;

  // Check if the username is valid
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  if (username === "") {
    error.username = "Please enter username";
  } else if (!usernameRegex.test(username)) {
    error.username = "Please enter a valid username";
  } else {
    error.username = "";
  }

  // Check if the email is valid
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email === "") {
    error.email = "Please enter email address";
  } else if (!emailRegex.test(email)) {
    error.email = "Please enter a valid email address";
  } else {
    error.email = "";
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

  // Check if usertype is valid
  if (usertype === "") {
    error.usertype = "Please select your account type";
  } else {
    error.usertype = "";
  }
  return error;
}

export default validationFunction;
