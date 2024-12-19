let currentCharacter = "";

async function fetchData() {
    try {
        const response = await fetch(`https://southparkquotes.onrender.com/v1/quotes`);
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const randomQuote = data[0];

        const pElement = document.querySelector("p");
        if (pElement) {
            pElement.innerHTML = `"${randomQuote.quote}"`;
        }

        currentCharacter = randomQuote.character;

        // Log to verify the currentCharacter
        console.log("Current Character:", currentCharacter);
    } catch (error) {
        console.error(error);
    }
}

// Attach event listener to the generate button
document.getElementById("generateBtn").addEventListener("click", fetchData);

// Event listeners for the character buttons
function answer(name) {
    const h2Element = document.querySelector("h2");
    if (h2Element) {
        if (name === currentCharacter) {
            h2Element.innerHTML = "You really do know your South Park";
        } else {
            h2Element.innerHTML = "I thought you were a fan!?";
        }
    }
}

document.getElementById("stan").addEventListener("click", function () {
    answer("Stan");
});

document.getElementById("kyle").addEventListener("click", function () {
    answer("Kyle");
});

document.getElementById("cartman").addEventListener("click", function () {
    answer("Cartman");
});

document.getElementById("kenny").addEventListener("click", function () {
    answer("Kenny");
});
