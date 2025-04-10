function handleLogout() {
  localStorage.setItem("isLoggedin", "");
  localStorage.setItem("usertype", "");
  localStorage.setItem("username", "");
}

export default handleLogout;
