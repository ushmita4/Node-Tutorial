console.log(global);
global.setTimeout(()=>{
    console.log('in the timeout and 3 seconds over');
},3000);