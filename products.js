const arrListProduct = [
    {
       img: "img/home-prod4.png",
       name: "Fresh and Healthy Mixed Mayonnaise Salad",
       price: "$30",
       cate: 1,
    },
    {
        img: "img/home-prod5.png",
        name: "The Creamiest Creamy Chicken",
        price: "$30",
        cate: 2,
     },
     {
        img: "img/home-prod6.png",
        name: "Fruity Pancake with Orange & Blueberry",
        price: "$30",
        cate: 3,
     },
     {
        img: "img/home-prod4.png",
        name: "Fresh and Healthy Mixed Mayonnaise Salad",
        price: "$30",
        cate: 1,
     },
     {
         img: "img/home-prod5.png",
         name: "The Creamiest Creamy Chicken",
         price: "$30",
         cate: 2,
      },
      {
         img: "img/home-prod6.png",
         name: "Fruity Pancake with Orange & Blueberry",
         price: "$30",
         cate: 3,
      },
]
function showProduct(data){
    let Product_item = document.querySelector(".products");
    if (Product_item) {
        for (let item of data) {
            Product_item.innerHTML += `
            <div class="prods">
                    <div class="prods-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="description">
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
let filter = document.querySelector("#sort");

function filterProduct(data){
    let _breakfast = data.filter(function(item) {
        return item.cate == 1;
    });
    let _lunch = data.filter(function(item) {
        return item.cate == 2;
    });
    let _dessert = data.filter(function(item) {
        return item.cate == 3;
    });
    if (filter.value=="breakfast") showProduct(_breakfast);
    else if(filter.value == "lunch") showProduct(_lunch);
    else if(filter.value == "dessert") showProduct(_dessert);
    else showProduct(arrListProduct);
}


