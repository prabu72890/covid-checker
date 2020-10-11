const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your city? ', function(answer) {
    if (answer== 'colombo' ){
        console.log(" low risk area " + answer );
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    
    else if  (answer== 'galle'){
        console.log(" low risk area " + answer );
    }
    else if  (answer== 'gampaha'){
        console.log(" high risk area " + answer );
    }
    else {
        console.log ("incorrect");
    }
    
    console.log("stay safe ");

  rl.close();
});