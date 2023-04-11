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

//     let paragraph = document.createElement('p');

//     paragraph.textContent = text;

//     let body = document.querySelector('body');

//     body.appendChild(paragraph);
// }

// addParagraph('Hello, world!');

//====================================


//Abdul Rauf ---- Assignment2----------------------------------------Q.No.4

// function addListItem(text) {

//     let listItem = document.createElement('li');

//     listItem.textContent = text;


//     let list = document.getElementById('myList');

//     list.appendChild(listItem);
// }

// addListItem('Item 1');



//====================================



//Abdul Rauf ---- Assignment2----------------------------------------Q.No.5
// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
// }

// // Get a reference to the element with ID "myElement"
// const myElement = document.getElementById("myElement");

// changeBackgroundColor(myElement, "blue");


//====================================



//Abdul Rauf ---- Assignment2--------------------------------------Q.No.6

// function saveToLocalStorage(key, object) {
//     let json = JSON.stringify(object);
//     localStorage.setItem(key, json);
// }

// let myObj = {
//     name: "Rauf",
//     age: 30
// };

// saveToLocalStorage("myKey", myObj);


// let jsonVar = localStorage.getItem("myKey");
// let myObject = JSON.parse(jsonVar);


//====================================

//Abdul Rauf ---- Assignment2--------------------------------------Q.No.7
// function getObjectFromLocalStorage(key) {
//     try {

//         const item = localStorage.getItem(key);

//         // If item is null, return null
//         if (item === null) {
//             return null;
//         }


//         const object = JSON.parse(item);
//         return object;
//     } catch (error) {

//         console.error(`Error retrieving object from localStorage: ${error}`);
//         return null;
//     }
// }



// const myObject = { name: "Rauf", age: 30 };
// localStorage.setItem("myKey", JSON.stringify(myObject));


// const retrievedObject = getObjectFromLocalStorage("myKey");

// console.log(retrievedObject); // { name: "John", age: 30 }


//====================================

//Abdul Rauf ---- Assignment2--------------------------------------Q.No.8
function saveObjectToLocalStorage(obj) {
    // Save each property of the object to localStorage
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            localStorage.setItem(key, JSON.stringify(obj[key]));
        }
    }

    // Retrieve the object from localStorage
    var retrievedObj = {};
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        retrievedObj[key] = JSON.parse(localStorage.getItem(key));
    }

    return retrievedObj;
}


var myObj = {
    name: "RAuf",
    age: 30,
    city: "Tando Adam"
};

// Save the object to localStorage
saveObjectToLocalStorage(myObj);

// Retrieve the object from localStorage
var retrievedObj = saveObjectToLocalStorage();
console.log(retrievedObj); // Output: {name: "Rauf", age: 30, city: "Tando Adam"}


//====================================