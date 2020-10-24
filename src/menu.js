import family from "./images/bakery.jpg"
const homeText = "Roque's Bakery is defined by a focus on the craft of traditional Italian baking methods. Inspired by iconic shops such as Roscioli in Rome—a family-owned bakery, café, grocer, and restaurant dating back to 1824—the team works the “old way,” using techniques often sacrificed in favor of time or ease of production. Flour for the focaccia dough is milled in-house; cannoli are filled to order; quality is never compromised. "
const menuSection = () => {
    const divSections = document.getElementById("sections");
    divSections.innerHTML = "";

    // Set new Div
    const divMenu = document.createElement('div');

    //Set H1
    const menuHeading = document.createElement('h1');
    menuHeading.innerText = "/-----       Menu        -----/";
    divMenu.prepend(menuHeading);

    const divFlex = document.createElement('div');
    divFlex.id = "div-flex";


    const breakfast = document.createElement('ul');
    let ulContent = "<h2> Breakfast </h2><li>YOGURT BERRY PARFAIT </li><li>OVERNIGHT OATS & CHIA</li><li>CLASSIC</li><li>MARCHIO</li>";
    breakfast.innerHTML = ulContent;
    divFlex.append(breakfast);

    const daily = document.createElement('ul');
    ulContent = "<h2> Daily Pastries </h2><li>CORNETTO</li><li>SPECORINO</li><li>CORNETTO DI CIOCCOLATO</li><li>CIAMBELLONE</li>";
    daily.innerHTML = ulContent;
    divFlex.append(daily);

    divMenu.append(divFlex);

    divSections.append(divMenu);

}


export default menuSection ;