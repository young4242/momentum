const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")

bgImage.onload = function() {
    document.body.style.width = `100vw`
    document.body.style.height = `100vh`
    document.body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url("../img/${chosenImage}")`
    document.body.style.backgroundSize = `cover`
    
}

bgImage.src = `img/${chosenImage}`

