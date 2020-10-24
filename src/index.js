import './style/style.css'
import load from "./load"
import homeSection from "./home"
import menuSection from "./menu"
import contactSection from "./contact"


load();

const divSections = document.getElementById("sections");



const setSection = (section) => {
    divSections.innerHTML = "";
    divSections.append(section);
}

// Event Listeners for Switch between Sections
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'b-home') {
        const section = homeSection();
        setSection(section);
    } else if (e.target && e.target.id === 'b-menu') {
      const section = menuSection();
      setSection(section);
    } else if (e.target && e.target.id === 'b-contact') {
        const section = contactSection();
        setSection(section);
    } 
});

setSection(homeSection());




