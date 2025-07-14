const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    if (localStorage.getItem(username)) {
      alert("User already exists!");
    } else {
      localStorage.setItem(username, password);
      alert("Registration successful!");
      window.location.href = "index.html";
    }
  });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", username);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password!");
    }
  });
}
