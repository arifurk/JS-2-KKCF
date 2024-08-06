// some button
let myButton = document.querySelector("button")
function handleClick(){
    alert('button was clicked')
}
myButton.addEventListener('click', handleClick)

// dark mode setup
let darkMode = true
let colorButton = document.querySelector("#theme")
function handleClick2() {
    let color = "rgb(255,255,255)"
    let textCol = "rgb(0,0,0)"
    let text = "Dark Mode"

    if (darkMode) {
        darkMode = false
        text = "Light Mode"
        textCol = color
        color = "rgb(0,0,0)"
    }
    else {
        darkMode = true
    }

    document.body.style.backgroundColor = color
    document.body.style.color = textCol
    colorButton.textContent = text
}

colorButton.addEventListener('click', handleClick2)