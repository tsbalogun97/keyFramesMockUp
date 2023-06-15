const signUpText= document.querySelector('.signUpPoof')
console.log(signUpText)

// let text appear 
const textAppear = () => {
  signUpText.classList.toggle("hidden")
}

const club= document.querySelector('.club')
  console.log(club);

  // join club turn blue
const blueSwitch = () => {
  club.classList.toggle("blueSwitch")
}
// target the ball
const ball = document.querySelector('.ball')
  console.log(ball);
// make ball spin!
const ballSpin = () => {
  ball.classList.toggle("ballSpin")
}

// uefa logo
const uefaLogo = document.querySelector('.uefa')
console.log(uefaLogo);

// make uefa logo flash
const flash = () => {
  uefaLogo.classList.toggle("flashing")
  
}

// target JulyText
const julyText =document.querySelector('.julyText')
console.log(julyText);
// make JulyText move across the page
const moveText =() => {
  julyText.classList.toggle("move")


}


