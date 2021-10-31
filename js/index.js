
// Target canvas & create 2d environment 

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Load images 

const loadedImages = {}
const imageLinks = [
    {link: "/images/Pistachio_Cookie- PLAYER.png", name:'player'},
    {link:"/images/background.png", name:'background'},
    {link:"/images/Pistachio.png", name:'pistachio'},
    {link:"/images/Peanut.png", name:'peanut'}
]

let counterForLoadedImages = 0;

imageLinks.forEach((imagen) =>{
    const img = new Image ()
    img.src = img.link
    img.onload = ()=>{
        counterForLoadedImages++
        loadedImages[imagen.name] = img
        if (imageLinks.length === counterForLoadedImages){
    }
    console.log(counterForLoadedImages)
}
})

//Classes 

class Background{
    constructor(){
        this.x=0;
        this.y=0;
        this.width=900;
        this.height = 583;
    }}

    const background = new Background()



//Event Listeners 


//Functions 

const clearCanvas =()=>{
    ctx.clearRect (0,0,900,583)
}

const updateBackground =()=>{
    background.x += background.x
    background.y += background.y
} 

const drawBackground =()=>{
    ctx.drawImage(loadedImages.background,background.x,background.y,background.width,background.height)
}



//Game 


const startGame = ()=>{
    if(imageLinks.length === counterForLoadedImages){
        clearCanvas()
        updateBackground ()
        drawBackground()

    }
    requestAnimationFrame (startGame)
}




window.onload = () =>{
   document.getElementById('start-button').onclick = () =>{
       startGame()
    // console.log ("boton clicado ")
   }
}

// const startGame = ()=>{
//     if(imageLinks.length === counterForLoadedImages){
//         clearCanvas()
//         drawBackground()

//     }
//     requestAnimationFrame (startGame)
// }

