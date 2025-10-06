document.querySelectorAll(".purchase-btn").forEach((button) => {
    button.addEventListener("click", function () {
        this.textContent = "Добавлено!"
        this.style.background = "#4CAF50"
        setTimeout(() => {
            this.textContent = "Купить"
            this.style.background = "#667eea"
        }, 2000)
    })
})

document.querySelector(".action-btn").addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector("#products").scrollIntoView({
        behavior: "smooth",
    })
})
