const arrListProduct = [
    {
       img: "img/home-prod4.png",
       name: "Fresh and Healthy Mixed Mayonnaise Salad",
       price: "$30",
    },
    {
        img: "img/home-prod5.png",
        name: "The Creamiest Creamy Chicken",
        price: "$30",
     },
     {
        img: "img/home-prod6.png",
        name: "Fruity Pancake with Orange & Blueberry",
        price: "$30",
     },
]
function showProduct(data){
    let Product_item = document.querySelector(".related-prod");
    if (Product_item) {
        for (let item of data) {
            Product_item.innerHTML += `
            <div class="prods">
                    <div class="prods-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="prods-desc">
                        <h4>${item.name}</h4>
                        <p>${item.price}</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            `;
        }
    }
}
showProduct(arrListProduct);
