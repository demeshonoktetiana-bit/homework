//#NKB0tgWIK1G

const  btnPrev = document.getElementById("prevButton")
const btnNext = document.getElementById("nextButton")
const arrayContainer = document.getElementById('array')


let arr =[];

for (let i=0; i < 100; i++) {
    let divElement = {id: i+1};
    arr.push(divElement);

}
console.log(arr);
let limit = 10;
let currentPage = 1;


function renderPage () {
    arrayContainer.innerHTML = '';
    let startIndex = (currentPage - 1) * limit;
    let endIndex = startIndex + limit;

    let slicedArr = arr.slice(startIndex, endIndex);
    console.log(slicedArr);

    slicedArr.forEach(item => {
        const divItem = document.createElement("div");
        divItem.innerText = `ID : ${item.id}`;
        arrayContainer.appendChild(divItem);
    })

}

renderPage();

btnNext.addEventListener("click", () => {
    currentPage++;
    renderPage();
})

btnPrev.addEventListener("click", () => {
    currentPage--;
    renderPage();
})
