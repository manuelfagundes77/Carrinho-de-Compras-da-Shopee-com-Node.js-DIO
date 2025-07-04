import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"    

const myCart = []
const myWhshList = []

console.log("Welcome to the your shopee cart")

//adicionando item
const item1 = await createItem("Item1", 9.99, 5) 
const item2 = await createItem("Item2", 19.99, 3)
const item3 = await createItem("Item3", 29.99, 1)

//adicionando item ao carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myCart, item3)

// removendo um item da quanditadde maxima do carrinho
await cartService.removeItem(myCart, 2)

//adicionando um item ao carrinho
await cartService.addOneItem(myCart, 1)

//exibindo o carrinho
await cartService.displayCart(myCart);

//removendo um item
await cartService.deletaItem(myCart, item3.name)


await cartService.calculateTotal(myCart)
