//Angela Koepplinger
//August 15, 2012
//SDI: 1208
//Project 3


var passengerList= [];


//Constructor
var passenger = function (name,age,gender) {
	//Local Variable
	var luggageItems = [];
	
	//Functions
	var addLuggage = function (item) {
		for (var i =0; i < item.length; i++) {
			if (gender === "Female") {
				console.log(name + " has added " + item[i] + " to her luggage.");
			} else {
				console.log(name + " has added " + item[i] + " to his luggage.");
			}
			luggageItems.push(item);
		}
	};
	var showLuggage = function () { 
		for ( var i = 0; i < luggageItems.length; i++) {
			console.log(name + " packed " + luggageItems[i] + " for the trip.");
		};
		return luggageItems;
	};
	var getName = function () { 
		return name; 
	};
	
	var getAge = function () {
		return age;
	};

	return { 
		"name": getName,
		"age": getAge,		
		//"gender": getGender,
		"addContents": addLuggage,
		"showContents": showLuggage

	};

};
//family members names
var passenger1 = passenger("Angela",29,"Female");
passengerList.push(passenger1);
var passenger2 = passenger("Aaron",30,"Male");
passengerList.push(passenger2);
var passenger3 = passenger("Sarah",11,"Female");
passengerList.push(passenger3);


passenger1.addContents(["bathing suits", "sun glasses"]);
passenger2.addContents(["beach chairs", "snorkle", "towels"])
passenger3.addContents(["sand toys", "umbrella", "crab net"]);

console.log("Angela's age: " + passenger1.age());

var ADB = passenger1.showContents();
console.log(ADB);




