document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const logoutButton = document.getElementById("logoutButton");

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic login simulation (use real backend verification in production)
    if (username === "user" && password === "password") {
      sessionStorage.setItem("isLoggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid login credentials");
    }
  });

  signupForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    // Store credentials (in real apps, submit to a server)
    alert("Account created! You can now log in.");
    toggleForms();
  });

  logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
  });

  // Toggle between login and signup forms
  window.toggleForms = () => {
    document.getElementById("login-form").style.display =
      document.getElementById("login-form").style.display === "none" ? "block" : "none";
    document.getElementById("signup-form").style.display =
      document.getElementById("signup-form").style.display === "none" ? "block" : "none";
  };
});
