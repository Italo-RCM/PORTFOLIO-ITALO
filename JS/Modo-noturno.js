const changeThemeBtn = document.querySelector("#modo-noturno");

changeThemeBtn.addEventListener("change", function() {
    document.body.classList.toggle("dark");
})