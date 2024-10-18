import {traveler} from "./traveler";
export class travelermanager {
private travelers : traveler[] = [];

adduser(Traveler : traveler):void {
    this.travelers.push(Traveler);
}

listusers():traveler[] {
    return this.travelers;
};


removeuser(name:string):void {
    this.travelers = this.travelers.filter(traveler => traveler.name !== name);
    console.log(`traveler with id ${name} removed successfully`);
}

searchUser(name:string):void{
    this.travelers=this.travelers.filter(Traveler=>Traveler.name == name);
    console.log(this.travelers);
}
}