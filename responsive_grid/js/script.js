const ham = document.getElementById("opennav")

const closeM = document.getElementById("closenav")

const menu = document.getElementById("menu")

ham.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})
closeM.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})