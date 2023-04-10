//Abdul Rauf ---- Assignment2----------------------------------------Q.No.1

// function OuterAdd(num) {
//     return function(x) {
//         return x + num;
//     };
// }

// let addNum = OuterAdd(4);
// console.log(addNum(11)); // Output: 15
// console.log(addNum(6)); // Output: 12

//==============================================

//Abdul Rauf ---- Assignment2----------------------------------------Q.No.2

// function searchArray(arr, val) {
//     // Base case: if the array is empty, return false (value not found)
//     if (arr.length === 0) {
//         return false;
//     }

//     // Recursive case: check if the first element of the array is the value we're searching for
//     if (arr[0] === val) {
//         return true;
//     } else {
//         // If the first element is not the value we're searching for, search the rest of the array recursively
//         return searchArray(arr.slice(1), val);
//     }
// }

// let arr = [1, 2, 3, 4, 5];

// let val = +prompt("Enter Num to Search")

// if (searchArray(arr, val)) {
//     console.log(`The value ${val} was found in the array!`);
// } else {
//     console.log(`The value ${val} was not found in the array.`);
// }



//====================================

//Abdul Rauf ---- Assignment2----------------------------------------Q.No.3
// function addParagraph(text) {
//     // create a new paragraph element
//     const paragraph = document.createElement('p');
//     // set the text content of the new paragraph element
//     paragraph.textContent = text;
//     // get the HTML body element
//     const body = document.querySelector('body');
//     // append the new paragraph element to the body
//     body.appendChild(paragraph);
// }

// addParagraph('Hello, world!');

//====================================


//Abdul Rauf ---- Assignment2----------------------------------------Q.No.4
function addListItem(text) {

    // create a new list item element
    const listItem = document.createElement('li');
    // set the text content of the new list item element
    listItem.textContent = text;

    // get the unordered list element by its ID
    const list = document.getElementById('myList');
    // append the new list item element to the unordered list
    list.appendChild(listItem);
}

addListItem('Item 1');



//====================================



//Abdul Rauf ---- Assignment2----------------------------------------Q.No

//====================================



//Abdul Rauf ---- Assignment2----Q.No

//====================================