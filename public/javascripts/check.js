import { getCookie } from "../../utils/utils.js";

const check = () => {
    const username = getCookie("email");
    if (username) {
        document.body.style.display = "flex";
    } else {
        window.location.href = "/";
    }
}

check()