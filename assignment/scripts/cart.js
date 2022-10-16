console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem ( item ){
    basket.push(item);
    return true;
}

function listItems ( ){
    for (i of basket){
        console.log(i);
    }
}

function empty ( ){
    basket = [];
}

//Testing
console.log('Adding Banana to basket:', addItem('Banana'));
console.log('Adding Apple to basket:', addItem('Apple'));
console.log('Adding Bread to basket:', addItem('Bread'));

console.log('Listing items in basket:');
listItems();

empty();
console.log('Emptied basket:', basket);