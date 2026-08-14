function register(){

console.log("register here");
}

function login(){
    console.log("login here");
}

function displayData(){
    console.log("display data");
}

function getData(){
    console.log("fetch data");
}
function waitForInput(delay){
    const ct = Date.now();
    const ms = ct + delay;
    while(ct < ms){

    }
}
register();
login();
getData();
displayData();
console.log("call another app");