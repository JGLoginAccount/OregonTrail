(function(){

    /*
    * Interfaces
    */

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
         hunt(): number;



        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;


    }



    //interface describing what the passenger array should look like
    interface IPassengerArray {
        [index:number]:Traveler


        }


    //interface describing attributes and methods a wagon should have
    interface IWagon{
        capacity: number;
        passengerArray: IPassengerArray;

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;

    }

    /*
    * Classes
    */

    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        
        constructor(name: string, food: number, isHealthy: true){
            this.name = name;
            this.isHealthy = isHealthy;
            this.food = food;
        }


        hunt(): number {
            if (Math.random()>.5) {
                return this.food=this.food+100;
            }
            else {
            return this.food;
            }
    
        }

        eat(): boolean {
            if(this.food>20) {
                this.food=this.food-20;
                return this.isHealthy;

            }
            this.isHealthy=false;
            return this.isHealthy;

        }

}

    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {
        capacity: number;
        passengerArray: Traveler[];
        myArray: Array<Traveler>=[];


        constructor (capacity:number, myArray: Array<Traveler>) {
            this.capacity=capacity;
            this.myArray=myArray;
        }
    
        addPassenger(traveler: Traveler): string {


            if (this.capacity==this.myArray.length) {
                return "sorry";
            }
            this.myArray.push(traveler);
            return "added";
        }

        isQuarantined(): boolean {

            for (let entry of this.myArray) {
                if (!entry.isHealthy) {
                    return true;
                } 
            }

            return false;
        }

        getFood(): number {
            let food: number;

            food=0;
            

            for (let entry of this.myArray) {
                food=entry.food+food;
                }
                
                return food;
            }
   
        }



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



    let passenger1 = new Traveler("Marvin Jones", Math.round(Math.random()*100), true);
    let passenger2 = new Traveler("Golden Tate", Math.round(Math.random()*100), true);
    let passenger3 = new Traveler("Frank Gore", Math.round(Math.random()*100), true);
    let passenger4 = new Traveler("Marine Lepenne", Math.round(Math.random()*100), true);
    let passenger5 = new Traveler("Cindy Saunders", Math.round(Math.random()*100), true);




    let passengerList: Array<Traveler> = [];
    let capacity: number;

    capacity=4;

    let wagon = new Wagon(capacity, []);

    console.log("Pass 1 eats? "+passenger1.eat());
    console.log("Pass 2 eats? "+passenger2.eat());
    console.log("Pass 3 eats? "+passenger3.eat());
   
    console.log("Pass 4 hunts? "+passenger4.hunt());
    console.log("Pass 5 eats? "+passenger5.hunt());

    passengerList.push(passenger1,passenger2,passenger3,passenger4,passenger5);


    

    for (let passenger of passengerList) {
        if (Math.random()>.5) {
            console.log("Passenger  "+wagon.addPassenger(passenger)+" "+passenger.name);
        }
        else {
            console.log(passenger.name+" not added.")
        }
      
      
    }



    console.log("Quarantined: "+wagon.isQuarantined());

    console.log("Total food: "+wagon.getFood());
})();