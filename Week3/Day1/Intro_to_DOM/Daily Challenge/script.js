
for (let i=0; i<planets.length; i++){
    console.log(`The #${i+1} planet is ${planets[i]}`);
}

// when I don't need to an index
for (const chocolate of planets){
    console.log(`The planet is ${chocolate}`);
}


//Add the planets to the page
const planets = ["Earth", "Neptune", "Jupiter"];

function addPlanet () {
    const sectionElement = document.querySelector("section");
    for(const item of planets){
        const divPlanet = document.createElement("div");
        divPlanet.classList.add("planet");
        sectionElement.appendChild(divPlanet);
    }
}

addPlanet();

//Add the planets to the page and passing an inline style depending
// on an array of colors
const planetsTwo = ["Earth", "Neptune", "Jupiter"];
const colors = ["blue", "red", "yellow"];

function addPlanetTwo () {
    const sectionElement = document.querySelector("section");
    for(let i = 0; i<planetsTwo.length; i++){
        const divPlanet = document.createElement("div");
        divPlanet.classList.add("planet");
        divPlanet.style.backgroundColor = colors[i];
        sectionElement.appendChild(divPlanet);
    }
}

addPlanetTwo();

//Add the planets to the page and passing an inline style depending
// on an array of objects
// we use the color property
const planetsThree = [
    {
        name: "Earth",
        color:"blue",
        moons: 5,
    },
    {
        name: "Neptune",
        color:"red",
        moons: 2,
    },
    {
        name: "Jupiter",
        color:"yellow",
        moons: 1,
    }
];

function addPlanetThree () {
    const sectionElement = document.querySelector("section");
    for(const item of planetsThree){
        const divPlanet = document.createElement("div");
        divPlanet.classList.add("planet");
        divPlanet.style.backgroundColor=item["color"];
        sectionElement.appendChild(divPlanet);

        //create the moons
        const numberMoons = item["moons"];
        // loop depending on the nb on moons, create a div per moon
        // add a class of moon in each div

    }
}

addPlanetThree();