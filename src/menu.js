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
    let ulContent = "<h2> Breakfast </h2><li>YOGURT BERRY PARFAIT ... ($5)</li><li>OVERNIGHT OATS & CHIA ... ($5)</li><li>CLASSIC ... ($5)</li><li>MARCHIO ... ($5)</li>";
    breakfast.innerHTML = ulContent;
    divFlex.append(breakfast);

    const daily = document.createElement('ul');
    ulContent = "<h2> Daily Pastries </h2><li>CORNETTO ... ($5)</li><li>SPECORINO ... ($5)</li><li>CORNETTO DI CIOCCOLATO ... ($5)</li><li>CIAMBELLONE ... ($5)</li>";
    daily.innerHTML = ulContent;
    divFlex.append(daily);

    divMenu.append(divFlex);

    divSections.append(divMenu);

}


export default menuSection ;