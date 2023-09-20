//burger
import vars from "./vars.js"
const {burgerBtn, mainMenu } = vars;


export const handleBurger = () =>{
    
    mainMenu.classList.toggle('menu--active');
}

burgerBtn.addEventListener('click', handleBurger);