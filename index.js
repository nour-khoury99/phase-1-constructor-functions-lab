7


function Scooter(year ,color,model){

    this.year = year ;
    this.color=color ;
    this.model = model;
    this.scooter = function () {
        console.log(`Scooter year : ${this.year} ,  color : ${this.color} , model : ${this.model}`);
      };
}

const Scooter1 = new Scooter("2002","black","SDCF");


Scooter1.scooter();

function Driver(name ,age, experience){

    this.name = name ;
    this.age = age;
    this.experience = experience;
    this.driver = function () {
        console.log(`Driver name : ${this.name} ,  age : ${this.age} , experience : ${this.experience}`);
      };
}

const Driver1 = new Driver("Jason","25","3year");


Driver1.driver();


function PickupLocation(address,city){
    this.address = address;
    this.city = city;

    this.pick = function(){
        console.log(`pick me from ${this.address}  city : ${this.city}`)
    };

}

const PickUpLocation = new PickupLocation("us" , "La");

PickUpLocation.pick();