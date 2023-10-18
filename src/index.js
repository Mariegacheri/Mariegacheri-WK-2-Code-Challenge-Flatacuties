let animals = []

document.addEventListener("DOMContentLoaded", function(){
    getAnimals()
})

function getAnimals(){
    fetch ("http://localhost:3000/characters",{
    method: "GET",
    headers:{
        "Content-Type": "application/json"
    }
    }).then(data => data.json())
    .then( response =>{
        animals = [...response]
        displayAnimals(response)
    })
}



function displayAnimals(animals){
    const animalbar = document.querySelector("animal-bar")
    for(animal of animals){
        const span = document.createElement("span");
        span.innerText = animals.name;
        span.setAttribute("id", animals.id)

        span.addEventListener("click", (event)=>{
            const animals = getAnimalsById(animals, parseInt(event.target.Id()))
            displayAnimalsDetails(animals)
        })

        animals.appendChild(span);

    }
}

function displayAnimalsDetails(animals){
    const image = document.querySelector("#image");
    image.src = animals.image
}

function getAnimalsById(animals, Id){
    return animals.find((animals)=>{
        return animals.Id === Id
    })
}