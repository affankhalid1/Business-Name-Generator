var random = Math.random();
var first, second, third;
// 0 0.33 0.66 1


// Lets generate the first word
if (random < 0.2) {
    first = "Crazy";
}
else if (random < 0.4 && random > 0.2) {
    first = "Dynamic";
}
else if (random < 0.6 && random > 0.4) {
    first = "Radiant";
}
else if (random < 0.8 && random > 0.6) {
    first = "Bold";
}
else {
    first = "Fire";
}


random = Math.random();
// Lets generate the second word

if (random < 0.2) {
    second = "Engine";
}
else if (random < 0.4 && random > 0.2)
{
    second = "Elite";
}
else if (random < 0.6 && random > 0.4) {
    second = "Elegant";
}
else if (random < 0.8 && random > 0.6) {
    second = "Exquisite";
}

else {
    second = "Garments";
}


random = Math.random();
// Lets generate the third word

if (random < 0.2) {
    third = "Bros";
}
else if (random < 0.4 && random > 0.2) {
    third = "Innovations";
}
else if (random < 0.6 && random > 0.4) {
    third = "Enterprises";
}
else if (random < 0.8 && random > 0.6) {
    third = "Creations";
}
else {
    third = "Hub";
}
console.log(`${first} ${second} ${third}`);
