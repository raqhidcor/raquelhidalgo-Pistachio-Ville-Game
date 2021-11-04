

//https://raqhidcor.github.io/raquelhidalgo-Pistachio-Ville-Game/

//Variables ****************
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const loadedImages = {}
const imageLinks = [ //Array de objetos con los enlaces (y los nombres para identificarlos) de todas mis imagenes
    {link: "https://raqhidcor.github.io/raquelhidalgo-Pistachio-Ville-Game/images/background.png",name:'background'},
    {link: "https://raqhidcor.github.io/raquelhidalgo-Pistachio-Ville-Game/images/player.png",name:'player'},
    {link:"https://raqhidcor.github.io/raquelhidalgo-Pistachio-Ville-Game/images/Pistachio.png",name:'pistachio'},
    {link:"https://raqhidcor.github.io/raquelhidalgo-Pistachio-Ville-Game/images/Peanut.png", name:'peanut'},
    {link:"https://raqhidcor.github.io/raquelhidalgo-Pistachio-Ville-Game/images/gameover.png", name: 'gameover'},
    // {links:"../images/recetapistachio.png",name:'receta'}
  ]


let counterForLoadedImages = 0; //This counter keeps track of the images loaded
let arrayOfPistachios = [] 
let arrayOfPeanuts = []
let score = 0


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
    if (player.x > 850){
        player.x = 850
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

const updatePeanuts = (arrPeanuts)=>{

    //for para el array de peanuts

    arrPeanuts.forEach((peanut) => {

        peanut.y += peanut.speed
    })

}


const drawPeanuts = ()=>{
    arrayOfPeanuts.forEach((peanut)=>{
    ctx.drawImage (peanut.img,peanut.x,peanut.y, peanut.width,peanut.height)
    })
}

const createPeanuts = () => {

    let createPeanutsIntervalID = setInterval(()=>{
        arrayOfPeanuts.push (new Peanut())
        
    },1500)

}

const checkPistachiosCollision = ()=>{
    arrayOfPistachios.forEach((pistachio)=>{
        if (pistachio.x < player.x + player.width &&
            pistachio.x + pistachio.width > player.x &&
            pistachio.y < player.y + player.height &&
            pistachio.height + pistachio.y > player.y){
                pistachio.eaten = true 
                score++
                // console.log (score)
            }
})
}

const deletePistachios =()=>{
    arrayOfPistachios = arrayOfPistachios.filter((pistachio)=>{
        return !pistachio.eaten
    })
}

const endGame = ()=>{
    clearCanvas()
    ctx.drawImage(loadedImages.gameover,130,80,730,515)
    soundTrack.pause()
    cancelAnimationFrame()
}

const checkPeanutsCollision = ()=>{
   arrayOfPeanuts.forEach((peanut)=>{
        if (peanut.x < player.x + player.width &&
            peanut.x + peanut.width > player.x &&
            peanut.y < player.y + player.height &&
            peanut.height + peanut.y > player.y){
                peanut.eaten = true 
                endGame()
                
                // console.log ('coincide con peanuts ')
            }
})
}

const deletePeanuts =()=>{
    arrayOfPeanuts = arrayOfPeanuts.filter((peanut)=>{
        return !peanut.eaten
    })
}

const drawScore = ()=>{
    ctx.font = "30px monospace";
    ctx.fillStyle = "white";
    ctx.fillText("Score: "+score, 20,30);
}


// const easterEgg =()=>{
//     if(score === 20){
//         ctx.drawImage(loadedImages.receta,250,80,730,515)
//     }
// }
//Musica 
let soundTrack = new Audio("https://raqhidcor.github.io/raquelhidalgo-Pistachio-Ville-Game/music/soundtrack.mp3");
soundTrack.volume = 0.3;
soundTrack.preload = "auto";
soundTrack.load();


const startGame = () => {

    
    createPistachios();
    createPeanuts ();

    

    gameAnimation();
}


//Clases *******************
class Background{
    constructor(){
        this.x=0;
        this.y=0;
        this.width=1000;
        this.height = 640;
    }}

    const background = new Background()


 class Player{
     constructor(){
         this.x = 450;
         this.y = 490;
         this.speedX = 0;
         this.width = 130;
         this.height = 130;
     }}

     const player = new Player()


class Pistachio{
      constructor(){
        this.eaten = false;
        this.img = new Image();
        this.img.src = "https://raqhidcor.github.io/raquelhidalgo-Pistachio-Ville-Game/images/Pistachio.png";
        this.x = Math.floor(Math.random() * 900);
        this.y = 0;
        this.speed = 3;
        this.width = 40;
        this.height = 50;
      } 

    }


     
  class Peanut{
      constructor(){
          this.eaten = false;
          this.img = new Image ()
          this.img.src = "https://raqhidcor.github.io/raquelhidalgo-Pistachio-Ville-Game/images/Peanut.png"
          this.x = Math.floor(Math.random()*900)
          this.y = 0
          this.speed = 3
          this.width = 40
          this.height =50
      }
  } 


//Game  Este es el loop de mi juego
const gameAnimation = ()=>{

    if(imageLinks.length === counterForLoadedImages){
        clearCanvas();

        drawBackground();

        updatePlayer ();
        drawPlayer ();
        checkIfInBounds();

        

        updatePistachios(arrayOfPistachios);
        drawPistachios();

        updatePeanuts(arrayOfPeanuts);
        drawPeanuts();

        checkPistachiosCollision();
        deletePistachios();

        checkPeanutsCollision();
        deletePeanuts(); 

        drawScore();
        // easterEgg()



    }
    requestAnimationFrame (gameAnimation)
}

//Event listeners
window.onload = () =>{


    loadImages()

    document.getElementById('start-button').onclick = () =>{
        startGame();
        soundTrack.play()

    //  console.log ("boton clicado ")
    }
    
    document.getElementById('sound-button-on').onclick =()=>{
        soundTrack.play()
    }

    document.getElementById('sound-button-off').onclick =()=>{
        soundTrack.pause()
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






