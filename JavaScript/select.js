const selectedOption = document.querySelector(".selected-option");
const dropdown = document.querySelector(".dropdown");
const options = document.querySelectorAll(".option");
const hiddenInput = document.querySelector("#country-code");

// Открытие селекта
selectedOption.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Выбор опции
options.forEach(option => {
    option.addEventListener("click", () => {
        selectedOption.innerHTML = option.innerHTML;
        hiddenInput.value = option.dataset.value;
        dropdown.style.display = "none";
    });
});

// Закрытие при клике вне селекта
document.addEventListener("click", (e) => {
    if (!selectedOption.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
    }
});


