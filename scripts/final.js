const cartHold = [];
function append(entry){
    const check = async () => {
        const responce = await fetch(document.querySelector('#shop-items'))}
        if(entry == responce){
            cartHold.apendChild(entry);
        }
}
function remove(entry){
    nCartHold = [];
    removed = false;
    cartHold.forEach(item => {
        if(item != entry || removed == true){
            nCartHold.apendChild(entry);
        }
        else{
            removed = true;
        }
    })
    cartHold = nCartHold;
}
function finish(){
    displayCart(cartHold);
}