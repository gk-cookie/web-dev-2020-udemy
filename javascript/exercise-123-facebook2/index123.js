var database = [
    {
        username: "cookie",
        password: "pass"
    },
     {
         username: "Jimbob",
         password: "pass1"
     },   
     {
         username: "Mary",
         password: "pass2"
     },
     {
         username: "Mike",
         password: "pass3"
     }
];

var newsFeed = [
    {
        username: "Jimbob",
        timeline: "tired from learning",
    },
    {
        username: "Sally",
        timeline: "Javascript is class",
    },
    {
        username: "Mike",
        timeline: "Kids are wonderful"
    }
]

var userNamePrompt = prompt("Whats your username");
var passwordPrompt = prompt("Whats your password");

function signIn(username, password) {
    for(var i=0; i < database.length; i++) {
        if(database[i].username === username &&
        database[i].password === password) {
            console.log(newsFeed);
        }
        else {
              alert("Sorry, incorrect log in details");
             }
    }
  
    // if (user === database[0].username && pass === database[0].password) { 
    //   console.log(newsFeed); 
    // } else {
    //   alert("Sorry, incorrect log in details");
    // }

}
signIn(userNamePrompt, passwordPrompt);
