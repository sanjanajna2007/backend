
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
    })
}

async function Showdata() {
    const result = await getdata();
    console.log(result);
    
}
Showdata();
