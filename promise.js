
const mypromise = new Promise(function(resolve, reject) {
    let success = false;

    if (success) {
        resolve("task completed bro!");
    } else {
        reject("error in creation");
    }
});

mypromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

// ~~~~~~~~async and await~~~~~~~~~~~~~~~

function getdata(){
    return new Promise(function(resolve,reject){
        resolve("student data is created");
    },2000);

}

async function Showdata() {
    console.log("fetching data");
    const result = await getdata();

    console.log(result);
    console.log("completed");

    
}
Showdata();

// error handling with async and await

async function getStudent(){
    try{
        const result = await Promise.reject("student not found");
        console.log(result);
        console.log("error occured");

    }
    catch(error){
        console.log("finally i found an error");


    }
}
getStudent();
