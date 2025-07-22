const data = [
  {
    name: "Gouri",
    age: 21,
    place: "Kadakkal",
  },
  {
    name: "Nandana",
    age: 21,
    place: "Kadakkal",
  },
];

const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
  data.forEach((person) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = 
        `<h2>${person.name}</h2>
        <p>${person.age}</p>
        <p>${person.place}</p>`;
    container.appendChild(card);
    
  });
});
