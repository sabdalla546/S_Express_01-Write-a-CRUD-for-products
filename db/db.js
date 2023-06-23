const productList = [
    {
        "id": 1,
        "title": "kachu",
        "price": 1,
        "description": "A descriptionhhuhu",
        "images": [
        "https://placeimg.com/640/480/any"
        ],
        "categoryId": 1,
        },
        {
        "id": 2,
        "title": "New Product",
        "price": 10,
        "description": "A description",
        "images": [
        "https://placeimg.com/640/480/any"
        ],
        
        "categoryId":1,
     
        },
        {
        "id": 3,
        "title": "New Product",
        "price": 10,
        "description": "A description",
        "images": [
        "https://placeimg.com/640/480/any"
        ],
       
        "categoryId": 1
        },
        
]
const getProduct = ()=>{
    return productList;
}

module.exports = getProduct();