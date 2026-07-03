//#HmvAfRQM
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

const cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')

.then(value => value.json())
.then(cartsObject => {
    const{carts} = cartsObject;
    console.log(carts);

for (const cart of carts) {

    const div = document.createElement('div');
    div.classList = 'cart-container'
    div.innerText = `${cart.id} ${cart.total}`
    const divWithInfo = document.createElement('div');
    divWithInfo.innerText = `
      "total": ${cart.total}
      "discountedTotal": ${cart.discountedTotal}
      "userId": ${cart.userId}
      "totalProducts": ${cart.totalProducts}
      "totalQuantity": ${cart.totalQuantity}
    `

    const ol = document.createElement('ol');
    for (product of cart.products) {
        const li = document.createElement('li');
        const info = document.createElement('p');
        li.innerText = `
          "id": ${product.id}
          "title": ${product.title}
          "price": ${product.price}
          "quantity": ${product.quntity}
          "total": ${product.total}
          "discountPercentage": ${product.discountPercentage}
          "discountedTotal": ${product.discountedTotal}
          "thumbnail": "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp"`

        const img = document.createElement('img');
        img.src = product.thumbnail;
        li.append(img, info);
        ol.appendChild(li);

    }
    div.append(divWithInfo, ol);
    cartsDiv.appendChild(div);
}

});


//#whXxOBlYS0H
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.


const divRecipes = document.getElementById('recipes')

fetch('https://dummyjson.com/recipes')

.then(value => value.json())
.then(recipesObject => {
    const {recipes} = recipesObject;
    console.log(recipes);

    for (const recipe of recipes) {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerText = `${recipe.id} ${recipe.name} ${recipe.rating}`
        const divInfo = document.createElement('div');
        divInfo.innerText = `
            "prepTimeMinutes": ${recipe.prepTimeMinutes}
            "cookTimeMinutes": ${recipe.cookTimeMinutes}
            "servings": ${recipe.servings}
            "difficulty": ${recipe.difficulty}
            "cuisine": ${recipe.cuisine}
            "caloriesPerServing": ${recipe.caloriesPerServing}
            "tags": ${recipe.tags}
        `
        const ul = document.createElement('ul');

        for (const ingredient of recipe.ingredients) {
            const li = document.createElement('li');
            li.innerText = `${ingredient}`
            ul.appendChild(li)

        }

        const ol = document.createElement('ol');
        for (const instuction of recipe.instructions) {
            const li = document.createElement('li');
            li.innerText = `${instuction}`
            ol.appendChild(li)

        }

       const metaInfo = document.createElement('div');
        metaInfo.innerText = `
            "userId": ${recipe.userId}
            "reviewCount": ${recipe.reviewCount}
            "mealType": ${recipe.mealType}
           `
      const img = document.createElement('img');
        img.src = recipe.image;

        recipeCard.append(ul,ol, divInfo,metaInfo,img);
        divRecipes.appendChild(recipeCard);
    }
})