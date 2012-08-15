
var passenger = function (name,age,gender) {
	//PRIVATE
	var luggageItems = [];
	var luggageContents = function (item) {
		if (item !== "wet") {
			luggageItems.push(item);
		} else {
			console.log("Not allowed to pack wet items!")
		}
	};
	var getName = function () { return name; };
	return { 

		"name": getName,
		"age": getAge,		
		"gender": getGender,
		"lugageContents": luggageContents 

	};
};
//family members names
var Angela = passenger("Angela",29,"Female");
var Aaron  = passenger("Aaron",30,"Male");
var Sarah  = passenger("Sarah",11,"Female");
var Jinxy  = passenger("Jinxy",2,"Dog");

angela.lugageContents("Bathing Suits");