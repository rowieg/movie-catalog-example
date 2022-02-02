const cards = document.getElementById("cards");

movies = [{
    name: "Avatar"
}];

for (const movie of movies) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card-text">
            <h2 class="card-title">${movie.name}</h2>
            <p class="card-description">
                <span>This is a description.</span>
            </p>
        </div>
    `;
    cards.appendChild(card);
}
