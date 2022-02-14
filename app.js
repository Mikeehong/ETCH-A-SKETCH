const container = document.querySelector('.container')
const btnErase = document.querySelector('.erase')

let color
let moved
let userInput = 32
let canvasSize = userInput **2
let width = 25
let height = 25
let isRandom

let randomRadio = document.querySelector('input[name="randomColor"]')
initialCanvas()
console.log(randomRadio);

const colorPicker = document.querySelector('input')
colorPicker.addEventListener('change', (e) => {
    isRandom = false
    color = e.target.value
})
const randomBtn = document.querySelector('.randomBtn')
randomBtn.addEventListener('click', () => {
    isRandom = true
})



function initialCanvas() {
    for (let i=0 ;i<canvasSize; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        container.append(square)
        color = "#000"
        square.addEventListener('mousedown', () => {
            if (isRandom) {
                square.style.backgroundColor = 
                'rgb(' +
                Math.round(Math.random()*256) + ',' +
                Math.round(Math.random()*256) + ',' + 
                Math.round(Math.random()*256) + ')' 
            } else {
                square.style.backgroundColor = color
            }
            moved = true
        })
        square.addEventListener('mouseup', () => {
            
            moved = false
        })
        square.addEventListener('mouseover', () => {
            if (!moved) return;
            if (isRandom) {
                square.style.backgroundColor = 
                'rgb(' +
                Math.round(Math.random()*256) + ',' +
                Math.round(Math.random()*256) + ',' + 
                Math.round(Math.random()*256) + ')' 
            } else {
                square.style.backgroundColor = color
            }
            
            
            
        })
        
    }
}

btnErase.addEventListener('click', (e) => {
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.style.backgroundColor = "#fff"
    });
    if (!resetCanvas()) return;
    squares.forEach(square => {
        square.remove()
    });
})

function resetCanvas() {
    newGrid()
    console.log(userInput);
    canvasSize = userInput **2

    for (let i=0 ;i<canvasSize; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.style.width = 800/userInput + "px"
        square.style.height = 800/userInput + "px"
        container.append(square)
        color = "#000"
        square.addEventListener('mousedown', (e) => {
            
            moved = true
        })
        square.addEventListener('mouseup', (e) => {
            
            moved = false
        })
        square.addEventListener('mouseover', (e) => {
            if (!moved) return;
            square.style.backgroundColor = color
        })
        
    }
}

function newGrid() {
    
    userInput = parseInt(prompt("Enter how many squares on both sides to create your new Grid: "))
    while (userInput > 100 || userInput < 0) {
        alert("Please enter a number between 1~100")
        userInput = parseInt(prompt("Enter how many squares on both sides to create your new Grid: "))
    }
    return userInput
}