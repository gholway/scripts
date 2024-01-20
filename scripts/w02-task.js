/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Gavin Holway';
let currentYear;
let profilePicture = 'images/Capture.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = profilePicture;

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent = datetime.now;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute.alt = 'profile image of Gavin Holway';


/* Step 5 - Array */
const favFoods = [];
const favFood = 'ice cream';
favFoods.push(favFood);
foodElement.innerHTML += `<br>${favFoods}`;
const removedFirst = favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
const removedLast = favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;
