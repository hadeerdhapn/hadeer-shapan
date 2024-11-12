let request = new XMLHttpRequest();
let content = document.querySelector(".products")
request.onload = function () {
    if (request.readyState == 4) {
        if (request.status == 200) {
            let data = JSON.parse(request.responseText);
            let product = data.products;
            // console.log(product)
            console.log("Data received:", product);


            product.map(function (element) {
                content.innerHTML += `
                
                <div class="card">
                <img src=${element.thumbnail}>

                <p class="one">${element.title}</p>
                <p class="two">${element.price}</p>
<div/>

                `

            });
        } else {
            console.log("There is some problem...");
        }
    }
};

request.open("GET", "https://dummyjson.com/products", true);
request.send();
//===============================================================
let categoryRq = new XMLHttpRequest();
let categoriesContainer = document.querySelector(".categories");
categoryRq.onload = function() {
    if (categoryRq.status == 200 && categoryRq.readyState == 4) {
        let categories = JSON.parse(categoryRq.responseText)
        console.log(categories);
       
        categories.map(function (c) {
            categoriesContainer.innerHTML +=`
                <span class="category"> ${c.name} </span >
`

        })
    }
}



categoryRq .open("GET","https://dummyjson.com/products/categories",true)

categoryRq.send()
 //==================================================search

 function search(word){
    request.open("GET", `https://dummyjson.com/products/search?q=${word}`, true);
request.send();

 }
 let searchInput= document.querySelector(".search")
 searchInput.addEventListener("keypress",()=>{
     content.innerHTML=''
     console.log(searchInput.value)
     search(searchInput.value)
 })