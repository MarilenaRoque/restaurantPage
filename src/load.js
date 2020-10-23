import Icon from "./images/bakery-icon.svg"

const myBody = document.getElementById("my-body");
const divContent = document.getElementById("content");

const setIcon = () => {
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.setAttribute('width', "350px");
    myBody.prepend(myIcon);
}

const setTable = () => {
    const ulContent = "<li><button>Home</button></li><li><button>Menu</button></li><li><button>Contact</button></li>";
    const myUl = document.createElement('ul');
    myUl.innerHTML = ulContent;
    myUl.id = "buttons";
    divContent.prepend(myUl);  
}

const setSections = () => {
    const sections = document.createElement('div');
    sections.id = "sections";
    divContent.appendChild(sections); 
}

const load = () => {   
    setIcon();
    setTable();
    setSections();
}


export default load ;