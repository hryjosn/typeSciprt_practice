interface Phone {
    model: string,
    price?: number, // Property 'price' of type 'number' is not assignable to string index type 'string'.
    [x: string]: string
}

let myPhone: Phone = {
    model: 'iphone 11',
    price: 23000,
    width: 100, //Type 'number' is not assignable to type 'string'.
}