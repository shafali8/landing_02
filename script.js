const carousel = document.querySelector(".carousel");
const arrowBtn = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false;

// to click arrow button to move card left and right
arrowBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
  
})

const dragStart = () => {
    isDragging = true;
    //    disable the text when we dragging the card
    carousel.classList.add("dragging");
}
const dragging = (e) => {
   carousel.scrollLeft = e.pageX;

}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}


carousel.addEventListener("mousemove", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
