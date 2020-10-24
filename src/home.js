import family from "./images/bakery.jpg"


const homeSection = () => {
    const homeText = "Roque's Bakery is defined by a focus on the craft of traditional Italian baking methods. Inspired by iconic shops such as Roscioli in Rome—a family-owned bakery, café, grocer, and restaurant dating back to 1824—the team works the “old way,” using techniques often sacrificed in favor of time or ease of production. Flour for the focaccia dough is milled in-house; cannoli are filled to order; quality is never compromised. "
    const homesection = document.createElement('div');
    const divSections = document.getElementById("sections");

    //Reset the Section
    divSections.innerHTML = "";

    //Set H1
    const homeHeading = document.createElement('h1');
    homeHeading.innerText = "Roque's Bakery";
    homesection.append(homeHeading);

    // Set P
    const homeParagraph = document.createElement('p');
    homeParagraph.innerText = homeText;
    homesection.append(homeParagraph);

    //Family Image
    const familyPicture = new Image();
    familyPicture.src = family;
    familyPicture.id = "bakery"
    familyPicture.setAttribute('width', "300px");
    homesection.append(familyPicture);

    divSections.append(homesection)
    // return homesection;
}


export default homeSection ;