const pizzas = [
    { 
        id: 1,
        nombre: "Pizza muzzarella",
        ingredientes : ["muzzarella", "jamón", "aceitunas"],
        precio: 550,
    },
    { 
        id: 2,
        nombre: "Pizza calabresa",
        ingredientes: ["calabreza", "orégano", "salsa"],
        precio: 900,
    },
    { 
        id: 3,
        nombre: "Pizza fugazzetta",
        ingredientes: ["cebolla", "orégano", "aceituna"],
        precio: 600,
    },
    { 
        id: 4,
        nombre: "Pizza margarita",
        ingredientes: ["tomate", "albahaca", "muzzarella"],
        precio: 580,
    },
    { 
        id: 5,
        nombre: "Pizza cuatro quesos",
        ingredientes: ["muzzarella", "gorgonzola", "fontina", "parmesano"],
        precio: 800,
    },
    { 
        id: 6,
        nombre: "Pizza con champiñones",
        ingredientes: ["champiñones", "salsa", "aceituna"],
        precio: 950,
    },

]

console.log(pizzas);

// Pizzas con id impar

const IdImpares = pizzas.filter ((pizza) => {
    return pizza.id % 2 !== 0
}
);

IdImpares.forEach ((pizza) => {
    console.log(`El producto ${pizza.nombre} tiene id impar `);
});

// Pizzas que valga menos de 600

const PizzasBaratas = pizzas.filter((pizza) =>{
    return pizza.precio < 600
});

PizzasBaratas.forEach ((pizza) =>{
    console.log(`El producto ${pizza.nombre} vale menos de $600`);
});

// Todos los ingredientes de cada pizza

pizzas.forEach(pizzas => console.log(`Las pizzas ${pizzas.nombre} tienen estos ingredientes: ${pizzas.ingredientes}`));
