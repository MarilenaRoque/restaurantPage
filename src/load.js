import Icon from "./images/bakery-icon.svg"
import homeSection from "./home"

const myBody = document.getElementById("my-body");
const divContent = document.getElementById("content");

// Creating Website Logo
const setIcon = () => {
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.setAttribute('width', "350px");
    myBody.prepend(myIcon);
}

// Setting the Options
const setTable = () => {
    const ulContent = "<li><button id='b-home'>Home</button></li><li><button id='b-menu'>Menu</button></li><li><button id='b-contact'>Contact</button></li>";
    const myUl = document.createElement('ul');
    myUl.innerHTML = ulContent;
    myUl.id = "buttons";
    divContent.prepend(myUl);  
}

// Set Div That Will Display the Dinamic Sections
const setSections = () => {
    const sections = document.createElement('div');
    sections.id = "sections";
    divContent.appendChild(sections); 
}

const load = () => {   
    setIcon();
    setTable();
    setSections();
    homeSection();
}


export default load ;