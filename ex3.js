console.log("First");
setTimeout(() =>(console.log("Hello")), 1000);
for( i = 0; i < 10; i++){
    console.log("Second");
}
console.log("Third");
setTimeout(() =>{
    setTimeout(() =>{
        setTimeout(() =>{
            setTimeout(() =>{
                setTimeout(() =>{
                    setTimeout(() =>{
                        setTimeout(() =>{
                            setTimeout(() =>{
                                setTimeout(() =>{
                                    setTimeout(() =>{
                                        setTimeout(() =>{
                                            console.log("Tenth");
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
})