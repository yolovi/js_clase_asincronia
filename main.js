/*
//ASINCRONÍA & FETCH
function pelarPatatas() {
    console.log("Pelar y cortar las patatas");
}

function freirPatatas() {
    console.log(
        "Introducimos las patatas cortadas en la sartén y que se cocinen"
    );
    setTimeout(() => {
        console.log("Patatas friendose");
    }, 10000);
}

function batirHuevos() {
    console.log("batimos los huevos");
}
function escurrirPatatas() {
    console.log("Quitamos con una espumadera las patatas de la sartén");
}
function mezclarIngredientes() {
    console.log("Introducimos las patatas escurridas al bol con la cebolla y el huevo.");
}
function hacerUnaTortilla() {
    pelarPatatas();
    freirPatatas();
    batirHuevos();
    escurrirPatatas()
    mezclarIngredientes();
}

//   hacerUnaTortilla()

// let miPromesa = new Promise((resolve, reject) => {
//     console.log("Te prometo que te saludaré cuando pasen 3 segundos!!");
//     setTimeout(() => {
//         resolve("Hola");
//     }, 3000);
// });

// miPromesa.then((valor) => console.log(valor));

// let miPromesa = new Promise((resolve, reject) => {
//     let number = 55;
//     console.log("te prometo que " + number + " es menor o igual que 50");
//     if (number <= 50) {
//         resolve(number + " es menor o igual a 50");
//     } else {
//         reject("mentira");
//     }
// });

// miPromesa
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));


// let friendoPatatas = new Promise((resolve) => {
//     console.log("Aquí friendo las patatas");
//     setTimeout(() => {
//         resolve("Patatas freídas");
//     }, 10000);
// });

// friendoPatatas.then((value) => {
//     console.log(value, "Ya podemos mezclar las patatas con los huevos batidos!");
// });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json()) //Es como JSON.parse() necesitamos el método json() con .then
  .then((users) => console.log(users)) //luego decirle qué hacer con la res transformada
  .catch((err) => console.error(err)); //o con error si es rechazada
*/

//-------------------------------

//ASINCRONÍA & AXIOS

//CRUD CON AXIOS

//GET
axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

//POST
axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: "New Post",
    body: "Body title",
}
)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

//PUT    
axios.put("https://jsonplaceholder.typicode.com/posts/1", {
    title: "Post updated",
    body: "Body updated",
}
)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

//DELETE
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => console.log(res))
    .catch(err => console.error(err));

