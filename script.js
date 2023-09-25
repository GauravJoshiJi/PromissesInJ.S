//------------------------------------------
//1>Basic of Promiss

function delayedFx() {
  setTimeout(function () {
    console.log("Hello World");
  }, 3000);
}
delayedFx();

//---------------------------------------------

//2> Promiss Syntax

console.log("Start");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("1");
    reject();
  }, 2000);
});

p1.then((data) => {
  console.log(data);
}).catch(() => {
  console.log("Error");
});

console.log("End");
//------------------------------------------

//3> Promiss Chaning :-

console.log("Start");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1");
  }, 2000);
});

p1.then((data) => {
  console.log("then1", data);
  return data;
}).then((data) => {
  console.log("then2", data);
});

console.log("End");
//--------------------------------------------

//4> Fetch API :-

//case1:-
fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
  console.log(response)
);

//case2:-
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
