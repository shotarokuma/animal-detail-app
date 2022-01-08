const data = {
  animals:[],
};

class Animal{
  constructor(name,location,numberOfLegs){
    this.name = name,
    this.location = location,
    this.numberOfLegs =  numberOfLegs
  };
}; 

data.animals.push(new Animal('whale','ocean',0));
data.animals.push(new Animal('bee','hive',6));
data.animals.push(new Animal('duck','pond',2));
data.animals.push(new Animal('cow','farm',4));

const names = data.animals.map(animal => animal.name);

const showDetails = (name) => {
  document.getElementById("details").innerHTML = "";
  let {location,numberOfLegs} = data.animals.find(animal => animal.name == name);
  document.getElementById("details").innerHTML = `The animal ${name} lives in the ${location} and has ${numberOfLegs} legs.`;
};

const printAnimalDetails= (name, location, numberOfLegs)  => (`The animal ${name} lives in the ${location} and has ${numberOfLegs} legs.`);

const showDetailsB = (name) => {
  document.getElementById("details").innerHTML = "";
  let animal = Object.values(data.animals.find(animal => animal.name == name));
  document.getElementById("details").innerHTML = printAnimalDetails(...animal);
};

const renderButtons = (names) => {
  names.forEach((name,key)=> {
    let newbutton = document.createElement("button");
    newbutton.appendChild(document.createTextNode(name));
    let func = key != names.length - 1 ? "showDetails(innerHTML);":"showDetailsB(innerHTML);";
    newbutton.setAttribute("onclick", func)
    document.getElementById("buttons").appendChild(newbutton);
  });
};

renderButtons(names);

