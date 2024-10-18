import { travelermanager} from './travelermanager';
import {traveler} from './traveler';
const Travelermanager = new travelermanager();
const Traveler : traveler = {
    name: "pavithra",
    password:"pavi",
    email: "pavithra@gmail.com",
    address: "bangalore",
    dot: new Date (23-5-2024),
    places:"mountain, beaches",
    gender: "female",
    package: "2 days",
    payment: "Cash",
    slider: 50,
};

Travelermanager.adduser(Traveler);
let users : traveler[] =Travelermanager.listusers();
console.log(users);  
const User2 : traveler = {
    name: "pavithra",
    password:"pavi",
    email: "pavithra@gmail.com",
    address: "bangalore",
    dot: new Date (23-5-2024),
    places:"mountain, beaches",
    gender: "female",
    package: "2 days",
    payment: "Cash",
    slider: 50,
};
Travelermanager.adduser(User2);
console.clear();
users = Travelermanager.listusers();
console.log(users);

Travelermanager.removeuser("abhilash");
users = Travelermanager.listusers();
console.log(Traveler);

Travelermanager.searchUser("pavithra");