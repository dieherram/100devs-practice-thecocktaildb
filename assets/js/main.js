document.querySelector('button').addEventListener('click', getDrink)
const cocktailContainer = document.querySelector(".cocktail-container")

function getDrink() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (cocktailContainer.innerHTML !== "") {
                cocktailContainer.innerHTML = ""
            }

            cocktailContainer.classList.remove("visibility")
            document.querySelector('body').style = "grid-template-rows: 15vh auto 5vh;"
            document.querySelector('p').classList.add("visibility")

            const cocktailDrink = document.createElement("h2")
            cocktailDrink.textContent = data.drinks[0].strDrink
            cocktailContainer.appendChild(cocktailDrink)

            const cocktailImage = document.createElement("img")
            cocktailImage.src = data.drinks[0].strDrinkThumb
            cocktailContainer.appendChild(cocktailImage)

            const cocktailCategory = document.createElement("h2")
            cocktailCategory.textContent = data.drinks[0].strCategory
            cocktailContainer.appendChild(cocktailCategory)

            const cocktailIngredients = document.createElement("ul")

            for (let i = 1; i <= 15; i++) {
                const strIngredient = `strIngredient${i}`
                if (data.drinks[0][strIngredient] !== null) {
                    const cocktailIngredient = document.createElement("li")
                    cocktailIngredient.textContent = data.drinks[0][strIngredient]
                    cocktailIngredients.appendChild(cocktailIngredient)
                    cocktailContainer.appendChild(cocktailIngredients)
                }
            }

            const cocktailInstructions = document.createElement("p")
            cocktailInstructions.textContent = data.drinks[0].strInstructions
            cocktailContainer.appendChild(cocktailInstructions)

        })

}