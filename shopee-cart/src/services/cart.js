//adicionar ao carrinho



async function addItem(userCart, item) {
   userCart.push(item)
}


async function deletaItem(userCart, name) {
      const index = userCart.findIndex(item => item.name === name)
      if(index !== -1) {
         userCart.splice(index, 1)
         console.log(` ${name} foi removido com sucesso`)
      }
}

//diminuir um item
async function removeItem(userCart, index) {

  const indexFound = index - 1

   if (indexFound < 0 || indexFound >= userCart.length) {
    console.log("Índice inválido.");
    return;
  }

  if(userCart[indexFound].quantity > 1) {
      userCart[indexFound].quantity-= 1
  } else  if(userCart[indexFound].quantity === 1) {
      userCart.splice(indexFound, 1)
  }
   
}


async function addOneItem(userCart, index) {
   const indexFound = index - 1

   if(indexFound < 0 || indexFound >= userCart.length) {
      console.log("Índice inválido ao Adicionar um item.");
      return;
   }

   userCart[indexFound].quantity += 1
   
}

async function displayCart(userCart) {
   console.log("\n Shopee cart: ");
   userCart.forEach((item, index) => {
      console.log(`${index + 1} - ${item.name} - ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)
   })
}


async function calculateTotal(userCart) {
   console.log("\n Shopee cart total is:")
   console.log( userCart.reduce((total, item ) => total  + item.subtotal(), 0))
}

export { addItem, deletaItem, removeItem, calculateTotal, displayCart, addOneItem }