const kp1 = document.querySelector("#pwd1");
const kp2 = document.querySelector("#pwd2");
const message = document.querySelector("#formmessage");
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    if (kp1.value !== kp2.value) {
        event.preventDefault();
        message.textContent = "❗Key Phrases DO NOT MATCH!";
        message.style.visibility = "visible";
        kp2.style.backgroundColor = "#fff0f3";
        kp2.focus();
    } else {
        message.style.display = "hidden";
        kp2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
    }
});
