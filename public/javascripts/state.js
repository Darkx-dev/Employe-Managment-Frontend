import { data } from "../../data/constants.js";
import { getCookie } from "../../utils/utils.js";

const sidebarName = document.querySelector(
  "aside > div.dropdown > button > div > div.fw-bold"
);
const sidebarImage = document.querySelector(
  "aside > div.d-flex.justify-content-center > img"
);
const sidebarEmail = document.querySelector(
  "aside > div.dropdown > button > div > div.small.text-muted"
);

let manager = null;

window.addEventListener("DOMContentLoaded", async () => {
  await fetchProfile();
  updateSidebar();
});

const fetchProfile = async () => {
  const manager = data.manager.find(
    (manager) => manager.email == getCookie("email")
  );
  updateSidebar(manager);
};

const updateSidebar = (manager) => {
  sidebarName.textContent = `${manager.fullname.first_name} ${manager.fullname.last_name}`;
  sidebarImage.src = manager.profile_image;
  sidebarEmail.textContent = manager.email;
};
