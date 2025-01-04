import { data } from "../../data/constants.js";
import { setCookie } from "../../utils/utils.js";
const managerLoginForm = document.getElementById("manager-login-form");
const managerLoginButton = document.getElementById("manager-login-button");

managerLoginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("floatingEmail").value;
  const password = document.getElementById("floatingPassword").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  // Offline login simulation
  const manager = data.manager.find(
    (manager) => manager.email === email && manager.password === password
  );

  // TODO: Implement online login

  if (manager) {
    if (rememberMe) {
      setCookie("email", email, 7);
    } else {
      setCookie("email", email, 1);
    }
    alert("Login successful!");
    window.location.href = "/manager/dashboard";
  } else {
    alert("Credentials are incorrect. Please try again.");
  }
});
