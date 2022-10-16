console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function isFull ( ){
    return (basket.length >= maxItems);
}

function addItem ( item ){
    if (!isFull()){
        basket.push(item);
        return true;
    } else {
        return false;
    }
}

function listItems ( ){
    for (i of basket){
        console.log(i);
    }
}

function removeItem ( item ){
    let index = basket.indexOf(item);
    if (index === -1){
        return null;
    } else {
        return basket.splice(index, 1);
    }
}

function empty ( ){
    basket = [];
}


//Testing
//isFull
console.log('Is the basket full? expect false', isFull());

//addItem
console.log('Adding Banana to basket:', addItem('Banana'));
console.log('Adding Apple to basket:', addItem('Apple'));
console.log('Adding Bread to basket:', addItem('Bread'));
console.log('Adding Cheese to basket:', addItem('Cheese'));
console.log('Adding Lettuce to basket:', addItem('Lettuce'));
console.log('Trying to add another item to basket, expect false:', addItem('Chocolate'));

//listItems
console.log('Listing items in basket:', );
listItems();

//isFull
console.log('Is the basket full? expect true', isFull());

//removeItem
console.log('Removing Bread and listing items:', removeItem('Bread'));
listItems();
console.log('Trying to remove an item not in array, expect null', removeItem('Chocolate'));

//empty
empty();
console.log('Emptied basket:', basket);
console.log('Is the basket full? expect false', isFull());

