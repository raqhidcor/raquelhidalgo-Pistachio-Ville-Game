
// Target canvas & create 2d environment 

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


// Load images 

const loadedImages = {}

const imageLinks = [ //Array de objetos con los enlaces (y los nombres para identificarlos) de todas mis imagenes
    {link: "../images/background.png",name:'background'},
    {link: "../images/player.png",name:'player'},
    {link:"../images/Pistachio.png",name:'pistachio'},
    {link:"../images/Peanut.png", name:'peanut'},
  ]
  

let counterForLoadedImages = 0; //This counter keeps track of the images loaded

imageLinks.forEach((imagen)=>{ //Iterate over every img in the array
  const img = new Image() //Create a new img obejct
  img.src = imagen.link //Give it the url of the img
  img.onload = ()=>{ //Execute the callback function when it's loaded
    counterForLoadedImages++ //Up the counter to compare later and only draw if all imgs been loaded
    loadedImages[imagen.name] = img
  }
})
console.log(loadedImages)


// Classes 

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
         
         this.width = 150;
         this.height = 150;
     }}

     const player = new Player()



//Event Listeners 


//Functions 

const drawBackground =()=>{
    ctx.drawImage(loadedImages.background,background.x,background.y,background.width,background.height)
}

const drawPlayer =()=>{
    ctx.drawImage(loadedImages.player,player.x,player.y,player.width,player.height)
}

// const clearCanvas =()=>{
//     ctx.clearRect (0,0,900,583)
// }



//Game 


window.onload = () =>{
    document.getElementById('start-button').onclick = () =>{
        startGame()
    //  console.log ("boton clicado ")
    }
 }

const startGame = ()=>{
    if(imageLinks.length === counterForLoadedImages){
        // clearCanvas()
        // updateBackground ()
        drawBackground()
        drawPlayer ()

    }
    requestAnimationFrame (startGame)
}




