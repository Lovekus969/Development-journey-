const figlet = require("figlet");

figlet("Hello Bhavneet" , function(err, data)
       {
         if(err){
           console.log("404 eroor");
           return;
         }
         console.log(data);
       });
