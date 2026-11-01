function add(a,b) {
    return a+b;

}
module.exports = add;

// const fs = require("fs");
// fs.readFile("notes.txt", "broo", function(err,data) {
    // if(err){
    //     console.log(error);
    // }else{
    //     console.log(data);
    // }
// })



// const fs = require("fs");
// fs.appendFile("notes.txt", "\n i am learning the backend ",function(err){
    // if(err){
    //     console.log("cant write the contents");
    // }

    // else{
    //     console.log("sucessfully append  the concepts");
    // }
// })

// const fs = require("fs");
// fs.unlink("noteses.txt",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("filre deleted successfully");
//     }
// })

// asynchrozation in node js


console.log("A");

setTimeout(function () {
    console.log("B");
}, 1000);

console.log("C");


