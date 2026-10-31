// console.log("hello world");
// console.log("i am learning backend development");

// const add = require("./math");
// let result = add(5,4);
// console.log(result);




async function getData() {
    try {
        const result = await Promise.reject("Database failed");
        console.log("Success:", result);
    } catch (error) {
        console.log("Caught:", error);
    }
}

getData();