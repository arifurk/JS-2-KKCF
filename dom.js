function randomNum(max) {
    return Math.floor(Math.random() * max)
}

// some button
let myButton = document.querySelector("button")
function handleClick(){
    alert('button was clicked')
}
myButton.addEventListener('click', handleClick)

// random color button
let colorButton = document.querySelector("#random-color")
function handleClick2() {
    document.body.style.backgroundColor = "rgb(" + randomNum(255) + ", " + randomNum(255) + ", " + randomNum(255) + ")"
}
colorButton.addEventListener('click', handleClick2)