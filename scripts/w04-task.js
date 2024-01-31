/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Patrick Juarez",
    photo: "Profile picture",
    favoriteFoods: [
        'Rice',
        'Tikka Masala',
        'Prioshki',
        'Shrimp',
        'Banana Cream Pie'
    ],
    hobbies: [
        'Watching movies',
        'Playing games',
        'Hanging out'
    ],
    placesLived: []
};
/* Populate Profile Object with placesLive objects */
    myProfile.placesLived.push(
        {
            place: 'San Francisco, CA',
            length: '1 year'
        }
    )
/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
/* Name */

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#name').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    html <dt> place;
    html <dd> length;
    let li = document.createElement('li');
    li.textContent = place + "\n" + length;
    document.querySelector('#places-lived').appendChild(li);
})

