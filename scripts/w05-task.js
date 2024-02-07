/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    <article>(createElement)</article>;
    <h3>templeName</h3>;
    <img>src = imageUrl, alt = location</img>;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
}
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const responce = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templesElement.appendChild(responce);
    displayTemples(templesElement);
}
/* reset Function */
const reset = (templesElement) => {
    templesElement.clear;
    templesElement.appendChild(responce);
}
/* filterTemples Function */
const filterTemples = (temples) => {
    filterTemples.reset;
    const filter = filtered;
    switch(filter){
        case location == 'Utah':
            displayTemples.appendChild(filtered);
        case location != 'Utah':
            displayTemples.appendChild(filtered);
        case dedicated < 1950:
            displayTemples.appendChild(filtered);
        default:
            displayTemples.appendChild(templesElement);
    }
}
getTemples();
/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });