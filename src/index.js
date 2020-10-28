import './style/style.css';
import load from './load';
import homeSection from './home';
import menuSection from './menu';
import contactSection from './contact';


load();


// Getting Div Sections where the elements will be appended
const divSections = document.getElementById('sections');

// Set Section with the element returned
const setSection = (section) => {
  divSections.innerHTML = ''; // reset div Section
  divSections.append(section);
};

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

// Set home in the first load
setSection(homeSection());
