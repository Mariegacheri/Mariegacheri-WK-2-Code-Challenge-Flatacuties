// Your code here
let characters = []
document.addEventListener("DOMContentLoaded", function () {
    const animalList = document.getElementById("characterInfo");
    const animalDetails = document.getElementById("detailed-info");

    function fetchAnimals() {
        fetch("http://localhost:3000/characters")
            .then((response) => response.json())
            .then((data) => {
                data.forEach((animal) => {
                    const listItem = document.createElement("li");
                    listItem.className = "carnival";
                    listItem.textContent = animal.name;
                    listItem.addEventListener("click", () => {
                        showAnimalDetails(animal);
                    });
                    animalList.appendChild(listItem);
                });
            })
            .catch((error) => (error));
    }

    function showAnimalDetails(animal) {
        animalDetails.innerHTML = `
            <h2>${animal.name}</h2>
            <img src="${animal.image}" alt="${animal.name}">
            <p>Votes: ${animal.votes}</p>
            <button onclick="addVote(${animal.id})">Vote</button>
        `;
    }

    // Call the fetchAnimals function to start loading data when the DOM is ready.
    fetchAnimals();
});



