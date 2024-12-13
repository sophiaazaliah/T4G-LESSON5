
let button =document.querySelector("button");
function openImage() {
    let image = document.querySelector(".img")
    image.style.display = "block"
    let close = document.querySelector(".close")
    close.style.display = "block"
    let button = document.querySelector("button")
    button.style.display = "none"

}
button.addEventListener("click", openImage,);

let close = document.querySelector(".close");
function closeImage(){
    let image = document.querySelector(".img")
    image.style.display = "none"
    let close = document.querySelector(".close")
    close.style.display = "none"
    let button = document.querySelector("button")
    button.style.display = "block"
}

close.addEventListener("click", closeImage);
