//----------------------------------GENERIC------------------------------------------


//Computer constructor, this will become the prototype for the parent class of all //Computers
var Computer = function(name, processorName, processorSpeed, ram, storage, graphicsCard) {
    this.name = name;
    this.processorName = processorName;
    this.processorSpeed = processorSpeed;
    this.ram = ram;
    this.storage = storage;
    this.graphicsCard = graphicsCard;
};

// encapsulates a method to display any Computer
Computer.prototype.displayComputer = function() {
    this.launchComputer();
    document.write("<div style='width=750px;'><table><tr><th>Computer: " + this.name
        + " </th></tr>" + "<tr><td>Processor: "
        + this.processorName + "</td></tr>" + "<tr><td>Processor Speed: " + this.processorSpeed + " GHz"
        + "</td></tr>" + "<tr><td>RAM: " + this.ram + " GB" + "</td></tr>" + "<tr><td>Storage: " + this.storage + " GB"
        + "</td></tr>" + "<tr><td>Graphics Card: " + this.graphicsCard + "</td></tr>" + "</table></div>");

};

// encapsulates a method to launch the Computer
Computer.prototype.launchComputer = function () {

};

//----------------------------------GENERIC------------------------------------------


//----------------------------------Falcon------------------------------------------

// define a constructor for a subclass of Computer
function Falcon(name, processorName, processorSpeed, ram, storage, graphicsCard, operatingSys) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Computer.call(this, name, processorName, processorSpeed, ram, storage, graphicsCard);
    // set the subclass specific properties
    this.operatingSys = operatingSys;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Falcon.prototype = Object.create(Computer.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Falcon.prototype.constructor = Falcon;

// override the parent displayComputer method for a Falcon

//----------------------------------FALCON------------------------------------------


//----------------------------------Asteriod------------------------------------------

//define a constructor for a subclass of Computer
function Asteroid(name, processorName, processorSpeed, ram, storage, graphicsCard, powerSupply) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Computer.call(this, name, processorName, processorSpeed, ram, storage, graphicsCard);
    // set the subclass specific properties
    this.powerSupply = powerSupply;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Asteroid.prototype = Object.create(Computer.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Asteroid.prototype.constructor = Asteroid;

// override the parent displayComputer method for a Asteriod

//----------------------------------Asteriod------------------------------------------

function main() {

    //instantiate an array to hold computers
    var computerArray = [];

    //populate the computer array with objects and subclass objects
    computerArray[0] = new Computer("Falcon NorthWest", "Intel Core i7-5960X", 4.6, 16, 6400, "Nvidia GeForce GTX Titan X", "Windows 8.1");

    computerArray[1] = new Computer("Overclockers Asteroid", "Intel Core i7-6700K", 3.86, 8, 1000, "Nvidia GeForce GTX 980 Ti", "SuperFlower 1000W");

    computerArray[2] = new Computer("Overclockers Asteroid", "Intel Core i7-6700K", 3.86, 8, 1000, "Nvidia GeForce GTX 980 Ti", "SuperFlower 1000W");

    computerArray[3] = new Computer("Falcon NorthWest", "Intel Core i7-5960X", 4.6, 16, 6400, "Nvidia GeForce GTX Titan X", "Windows 8.1");

    //polymorphically exercise the methods of the objects
    for(var i = 0; i < computerArray.length; i++) {

        computerArray[i].displayComputer();
    }


}
