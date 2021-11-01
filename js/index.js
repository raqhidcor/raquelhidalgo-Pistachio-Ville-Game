
//Variables ****************
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const loadedImages = {}
const imageLinks = [ //Array de objetos con los enlaces (y los nombres para identificarlos) de todas mis imagenes
    {link: "../images/background.png",name:'background'},
    {link: "../images/player.png",name:'player'},
    {link:"../images/pistachio.png",name:'pistachio'},
    {link:"../images/peanut.png", name:'peanut'},

  ]

let counterForLoadedImages = 0; //This counter keeps track of the images loaded
const arrayOfPistachios = []

//Funciones ****************
const loadImages = () => {

    imageLinks.forEach((imagen)=>{ //Iterate over every img in the array
      const img = new Image() //Create a new img obejct
      img.src = imagen.link //Give it the url of the img
      img.onload = ()=>{ //Execute the callback function when it's loaded
        counterForLoadedImages++ //Up the counter to compare later and only draw if all imgs been loaded
        loadedImages[imagen.name] = img
      }
    })
    
    console.log (loadedImages)
}

const drawBackground =()=>{
    ctx.drawImage(loadedImages.background,background.x,background.y,background.width,background.height)
}

const drawPlayer =()=>{
    ctx.drawImage(loadedImages.player,player.x,player.y,player.width,player.height)
}

const updatePlayer =()=>{
    player.x += player.speedX
}

const checkIfInBounds = ()=>{
    if (player.x > 1049){
        player.x =1049
    }

    if(player.x < 22){
        player.x = 22
    }

}


const updatePistachios = (arrPistachios)=>{

    //for para el array de pistachos

    arrPistachios.forEach((pistacho) => {

        pistacho.y += pistacho.speed
    })

}

const clearCanvas =()=>{
    ctx.clearRect (0,0,1200,800)
}

const drawPistachios = ()=>{
    arrayOfPistachios.forEach((pistachio)=>{
    ctx.drawImage (pistachio.img,pistachio.x,pistachio.y, pistachio.width,pistachio.height)
    })
}

const createPistachios = () => {

    let createPistachiosIntervalID = setInterval(()=>{
        arrayOfPistachios.push (new Pistachio())
        // console.log (arrayOfPistachios)
    },1000)

}

const startGame = () => {

    createPistachios()
    //.........
    //.........
    //........
    gameAnimation();
}


//Clases *******************
class Background{
    constructor(){
        this.x=0;
        this.y=0;
        this.width=1200;
        this.height = 800;
    }}

    const background = new Background()


 class Player{
     constructor(){
         this.x = 550;
         this.y = 639;
         this.speedX = 0;
         this.width = 150;
         this.height = 150;
     }}

     const player = new Player()


class Pistachio{
      constructor(){
        this.img = new Image()
        this.img.src = "../images/pistachio.png"
        this.x = Math.floor(Math.random() * 1100)
        this.y = 0
        this.speed = 3
        this.width = 50
        this.height = 70
      } 
  }


//Game  Este es el loop de mi juego
const gameAnimation = ()=>{

    if(imageLinks.length === counterForLoadedImages){
        clearCanvas()

        drawBackground()

        updatePlayer ()
        drawPlayer ()
        checkIfInBounds()

        

        updatePistachios(arrayOfPistachios)
        drawPistachios()
    }
    requestAnimationFrame (gameAnimation)
}

//Event listeners
window.onload = () =>{

    loadImages()

    document.getElementById('start-button').onclick = () =>{
        startGame()
    //  console.log ("boton clicado ")
    }

    document.addEventListener('keydown',(event)=>{
        if (event.key === "ArrowRight"){
            player.speedX = 8
        }else if (event.key === "ArrowLeft"){
            player.speedX= -8
        }
    })
    
    document.addEventListener ('keyup',(event)=>{
        if (event.key === "ArrowRight" || event.key === "ArrowLeft"){
            player.speedX = 0 
        }
    })
 }





