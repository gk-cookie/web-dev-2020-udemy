var database = [
    {
        username: "cookie",
        password: "pass"
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
    }
]

var userNamePrompt = prompt("Whats your username");
var passwordPrompt = prompt("Whats your password");

function signIn(user, pass) {
  
    if (user === database[0].username && pass === database[0].password) { 
      console.log(newsFeed); 
    } else {
      alert("Sorry, incorrect log in details");
    }

}
signIn(userNamePrompt, passwordPrompt);