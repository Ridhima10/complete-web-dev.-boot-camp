//console.log("This is js tutorial");

function greet(name1, GreetText = "Have a good day") { //function declaration //here the third parameter containes the default value
    //here the variables declared will only have local scope
    console.log(name1 + " " + "is a boy");
    console.log(GreetText + " " + name5);
}
let name1 = "Prikshit", name2 = "Rhythm", name3 = "Harshit", name4 = "Janvi", name5 = "Isha", GreetText = "hellooooooooo"; //Global scope variables
greet(name1, GreetText); //Function call
greet(name2); //here we haven't write greettext in call parameter so it will take the by-default value from the greettext mentioned above.


