import './style/style.css'
import load from "./load"
import homeSection from "./home"
import menuSection from "./menu"
import contactSection from "./contact"

load();

// Event Listeners for Switch between Sections
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'b-home') {
      homeSection();
    } else if (e.target && e.target.id === 'b-menu') {
      menuSection();
    } else if (e.target && e.target.id === 'b-contact') {
      contactSection();
    } 
});


