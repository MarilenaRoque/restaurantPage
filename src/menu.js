import family from "./images/bakery.jpg"
const homeText = "Roque's Bakery is defined by a focus on the craft of traditional Italian baking methods. Inspired by iconic shops such as Roscioli in Rome—a family-owned bakery, café, grocer, and restaurant dating back to 1824—the team works the “old way,” using techniques often sacrificed in favor of time or ease of production. Flour for the focaccia dough is milled in-house; cannoli are filled to order; quality is never compromised. "
const menuSection = () => {
    const divSections = document.getElementById("sections");
    divSections.innerHTML = "";

    // Set new Div
    const divMenu = document.createElement('div');
    divMenu.id = "div-menu";

    const breakfast = document.createElement('ul');
    const ulContent = "<li>YOGURT BERRY PARFAIT</li><li>OVERNIGHT OATS & CHIA</li><li>MIXED BERRIES</li>";
    breakfast.innerHTML = ulContent;
    divMenu.prepend(breakfast);

    divSections.append(divMenu);


    // const ulContent = "<li></li>";
    // const myUl = document.createElement('ul');
    // myUl.innerHTML = ulContent;
    // myUl.id = "buttons";
    // divContent.prepend(myUl);

}


export default menuSection ;