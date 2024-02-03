/*Create a business name generator by combining the list of adjectives and shop name and another word

Adjectives:
Crazy
Amazing
Fire


Shop Name:
Engine
Foods
Garments


Another word:
bros
Limited
Hub

*/

let first,second,third

random_number=Math.random()
// for adjectives
if(random_number<0.33){
    first="Crazy"
}
else if(random_number>=0.33 && random_number<0.66){
    first="Amazing"
}
else{
    first="Fire"
}
random_number=Math.random()
// for second
if(random_number<0.33){
    second="Engine"
}
else if(random_number>=0.33 && random_number<0.66){
    second="Foods"
}
else{
    second="Garments"
}
random_number=Math.random()
// for third
if(random_number<0.33){
    third ="bros"
}
else if(random_number>=0.33 && random_number<0.66){
    third="limited"
}
else{
    third="hub"
}
console.log(`${first} ${second} ${third}`)
