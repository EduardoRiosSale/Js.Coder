const btnColorMode = document.querySelector("#color-mode");

btnColorMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        btnColorMode.innerText = "☀️";
    } else {
        btnColorMode.innerText = "🌙";
    }
})