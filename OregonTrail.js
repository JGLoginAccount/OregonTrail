(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(name, food, isHealthy) {
            this.name = name;
            this.isHealthy = isHealthy;
            this.food = food;
        }
        Traveler.prototype.hunt = function () {
            if (Math.random() > .5) {
                return this.food = this.food + 100;
            }
            else {
                return this.food;
            }
        };
        Traveler.prototype.eat = function () {
            if (this.food > 20) {
                this.food = this.food - 20;
                return this.isHealthy;
            }
            this.isHealthy = false;
            return this.isHealthy;
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, myArray) {
            this.myArray = [];
            this.capacity = capacity;
            this.myArray = myArray;
        }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.capacity == this.myArray.length) {
                return "sorry";
            }
            this.myArray.push(traveler);
            return "added";
        };
        Wagon.prototype.isQuarantined = function () {
            for (var _i = 0, _a = this.myArray; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (!entry.isHealthy) {
                    return true;
                }
            }
            return false;
        };
        Wagon.prototype.getFood = function () {
            var food;
            food = 0;
            for (var _i = 0, _a = this.myArray; _i < _a.length; _i++) {
                var entry = _a[_i];
                food = entry.food + food;
            }
            return food;
        };
        return Wagon;
    }());
    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    *
    * Create wagon with an empty passenger list and a capacity of 4.
    *
    * Make 3 of 5 the travelers eat by calling their eat methods
    *
    * Make the remaining 2 travelers hunt
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    *
    * Run the isQuarantined method for the wagon
    *
    * Run the getFood method for the wagon
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    *
    */
    var passenger1 = new Traveler("Marvin Jones", Math.round(Math.random() * 100), true);
    var passenger2 = new Traveler("Golden Tate", Math.round(Math.random() * 100), true);
    var passenger3 = new Traveler("Frank Gore", Math.round(Math.random() * 100), true);
    var passenger4 = new Traveler("Marine Lepenne", Math.round(Math.random() * 100), true);
    var passenger5 = new Traveler("Cindy Saunders", Math.round(Math.random() * 100), true);
    var passengerList = [];
    var capacity;
    capacity = 4;
    var wagon = new Wagon(capacity, []);
    console.log("Pass 1 eats? " + passenger1.eat());
    console.log("Pass 2 eats? " + passenger2.eat());
    console.log("Pass 3 eats? " + passenger3.eat());
    console.log("Pass 4 hunts? " + passenger4.hunt());
    console.log("Pass 5 eats? " + passenger5.hunt());
    passengerList.push(passenger1, passenger2, passenger3, passenger4, passenger5);
    for (var _i = 0, passengerList_1 = passengerList; _i < passengerList_1.length; _i++) {
        var passenger = passengerList_1[_i];
        if (Math.random() > .5) {
            console.log("Passenger  " + wagon.addPassenger(passenger) + " " + passenger.name);
        }
        else {
            console.log(passenger.name + " not added.");
        }
    }
    console.log("Quarantined: " + wagon.isQuarantined());
    console.log("Total food: " + wagon.getFood());
})();
