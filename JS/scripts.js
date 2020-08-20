const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        const pagId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pagId}`

    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")

})
/* 
// Maximizar
const maximixar = document.querySelector(".maxi-modal")
const modal = document.querySelector(".modal")

maximixar.addEventListener("click", function () {
    if (modal.classList.add("maximizar")) {
        modal.classList.remove("maximixar")
    } else {
        modal.classList.add("maximizar")
    }
}) */