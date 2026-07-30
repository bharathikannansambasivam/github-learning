function signin(username, password) {
  if (username === "BK" && password === "12345") {
    console.log("Login Successful");
  } else {
    console.log("Invalid Username or Password");
  }
}

signin("BK", "12345");
