const products = [
    {
        name: "Café Caramel con Chocolate",
        price: 59.9,
        imageUrl: "cafe_01",
        categoryId: 1
      },
      {
        name: "Café Frio con Chocolate Grande",
        price: 49.9,
        imageUrl: "cafe_02",
        categoryId: 1
      },
      {
        name: "Latte Frio con Chocolate Grande",
        price: 54.9,
        imageUrl: "cafe_03",
        categoryId: 1
      },
      {
        name: "Latte Frio con Chocolate Grande",
        price: 54.9,
        imageUrl: "cafe_04",
        categoryId: 1
      },
      {
        name: "Malteada Fria con Chocolate Grande",
        price: 54.9,
        imageUrl: "cafe_05",
        categoryId: 1
      },
      {
        name: "Café Mocha Caliente Chico",
        price: 39.9,
        imageUrl: "cafe_06",
        categoryId: 1
      },
      {
        name: "Café Mocha Caliente Grande con Chocolate",
        price: 59.9,
        imageUrl: "cafe_07",
        categoryId: 1
      },
      {
        name: "Café Caliente Capuchino Grande",
        price: 59.9,
        imageUrl: "cafe_08",
        categoryId: 1
      },
      {
        name: "Café Mocha Caliente Mediano",
        price: 49.9,
        imageUrl: "cafe_09",
        categoryId: 1
      },
      {
        name: "Café Mocha Frio con Caramelo Mediano",
        price: 49.9,
        imageUrl: "cafe_10",
        categoryId: 1
      },
      {
        name: "Café Mocha Frio con Chocolate Mediano",
        price: 49.9,
        imageUrl: "cafe_11",
        categoryId: 1
      },
      {
        name: "Café Espresso",
        price: 29.9,
        imageUrl: "cafe_12",
        categoryId: 1
      },
      {
        name: "Café Capuchino Grande con Caramelo",
        price: 59.9,
        imageUrl: "cafe_13",
        categoryId: 1
      },
      {
        name: "Café Caramelo Grande",
        price: 59.9,
        imageUrl: "cafe_14",
        categoryId: 1
      },
      {
        name: "Paquete de 3 donas de Chocolate",
        price: 39.9,
        imageUrl: "donas_01",
        categoryId: 4
      },
      {
        name: "Paquete de 3 donas Glaseadas",
        price: 39.9,
        imageUrl: "donas_02",
        categoryId: 4
      },
      {
        name: "Dona de Fresa ",
        price: 19.9,
        imageUrl: "donas_03",
        categoryId: 4
      },
      {
        name: "Dona con Galleta de Chocolate ",
        price: 19.9,
        imageUrl: "donas_04",
        categoryId: 4
      },
      {
        name: "Dona glass con Chispas Sabor Fresa ",
        price: 19.9,
        imageUrl: "donas_05",
        categoryId: 4
      },
      {
        name: "Dona glass con Chocolate ",
        price: 19.9,
        imageUrl: "donas_06",
        categoryId: 4
      },
      {
        name: "Dona de Chocolate con MÁS Chocolate ",
        price: 19.9,
        imageUrl: "donas_07",
        categoryId: 4
      },
      {
        name: "Paquete de 3 donas de Chocolate ",
        price: 39.9,
        imageUrl: "donas_08",
        categoryId: 4
      },
      {
        name: "Paquete de 3 donas con Vainilla y Chocolate ",
        price: 39.9,
        imageUrl: "donas_09",
        categoryId: 4
      },
      {
        name: "Paquete de 6 Donas",
        price: 69.9,
        imageUrl: "donas_10",
        categoryId: 4
      },
      {
        name: "Paquete de 3 Variadas",
        price: 39.9,
        imageUrl: "donas_11",
        categoryId: 4
      },
      {
        name: "Dona Natural con Chocolate",
        price: 19.9,
        imageUrl: "donas_12",
        categoryId: 4
      },
      {
        name: "Paquete de 3 Donas de Chocolate con Chispas",
        price: 39.9,
        imageUrl: "donas_13",
        categoryId: 4
      },
      {
        name: "Dona Chocolate y Coco",
        price: 19.9,
        imageUrl: "donas_14",
        categoryId: 4
      },
      {
        name: "Paquete Galletas de Chocolate",
        price: 29.9,
        imageUrl: "galletas_01",
        categoryId: 6
      },
      {
        name: "Paquete Galletas de Chocolate y Avena",
        price: 39.9,
        imageUrl: "galletas_02",
        categoryId: 6
      },
      {
        name: "Paquete de Muffins de Vainilla",
        price: 39.9,
        imageUrl: "galletas_03",
        categoryId: 6
      },
      {
        name: "Paquete de 4 Galletas de Avena",
        price: 24.9,
        imageUrl: "galletas_04",
        categoryId: 6
      },
      {
        name: "Galletas de Mantequilla Variadas",
        price: 39.9,
        imageUrl: "galletas_05",
        categoryId: 6
      },
      {
        name: "Galletas de sabores frutales",
        price: 39.9,
        imageUrl: "galletas_06",
        categoryId: 6
      },
      {
        name: "Hamburguesa Sencilla",
        price: 59.9,
        imageUrl: "hamburguesas_01",
        categoryId: 2
      },
      {
        name: "Hamburguesa de Pollo",
        price: 59.9,
        imageUrl: "hamburguesas_02",
        categoryId: 2
      },
      {
        name: "Hamburguesa de Pollo y Chili",
        price: 59.9,
        imageUrl: "hamburguesas_03",
        categoryId: 2
      },
      {
        name: "Hamburguesa Queso y  Pepinos",
        price: 59.9,
        imageUrl: "hamburguesas_04",
        categoryId: 2
      },
      {
        name: "Hamburguesa Cuarto de Libra",
        price: 59.9,
        imageUrl: "hamburguesas_05",
        categoryId: 2
      },
      {
        name: "Hamburguesa Doble Queso",
        price: 69.9,
        imageUrl: "hamburguesas_06",
        categoryId: 2
      },
      {
        name: "Hot Dog Especial",
        price: 49.9,
        imageUrl: "hamburguesas_07",
        categoryId: 2
      },
      {
        name: "Paquete 2 Hot Dogs",
        price: 69.9,
        imageUrl: "hamburguesas_08",
        categoryId: 2
      },
      {
        name: "4 Rebanadas de Pay de Queso",
        price: 69.9,
        imageUrl: "pastel_01",
        categoryId: 5
      },
      {
        name: "Waffle Especial",
        price: 49.9,
        imageUrl: "pastel_02",
        categoryId: 5
      },
      {
        name: "Croissants De la casa",
        price: 39.9,
        imageUrl: "pastel_03",
        categoryId: 5
      },
      {
        name: "Pay de Queso",
        price: 19.9,
        imageUrl: "pastel_04",
        categoryId: 5
      },
      {
        name: "Pastel de Chocolate",
        price: 29.9,
        imageUrl: "pastel_05",
        categoryId: 5
      },
      {
        name: "Rebanada Pastel de Chocolate",
        price: 29.9,
        imageUrl: "pastel_06",
        categoryId: 5
      },
      {
        name: "Pizza Spicy con Doble Queso",
        price: 69.9,
        imageUrl: "pizzas_01",
        categoryId: 3
      },
      {
        name: "Pizza Jamón y Queso",
        price: 69.9,
        imageUrl: "pizzas_02",
        categoryId: 3
      },
      {
        name: "Pizza Doble Queso",
        price: 69.9,
        imageUrl: "pizzas_03",
        categoryId: 3
      },
      {
        name: "Pizza Especial de la Casa",
        price: 69.9,
        imageUrl: "pizzas_04",
        categoryId: 3
      },
      {
        name: "Pizza Chorizo",
        price: 69.9,
        imageUrl: "pizzas_05",
        categoryId: 3
      },
      {
        name: "Pizza Hawaiana",
        price: 69.9,
        imageUrl: "pizzas_06",
        categoryId: 3
      },
      {
        name: "Pizza Tocino",
        price: 69.9,
        imageUrl: "pizzas_07",
        categoryId: 3
      },
      {
        name: "Pizza Vegetales y Queso",
        price: 69.9,
        imageUrl: "pizzas_08",
        categoryId: 3
      },
      {
        name: "Pizza Pepperoni y Queso",
        price: 69.9,
        imageUrl: "pizzas_09",
        categoryId: 3
      },
      {
        name: "Pizza Aceitunas y Queso",
        price: 69.9,
        imageUrl: "pizzas_10",
        categoryId: 3
      },
      {
        name: "Pizza Queso, Jamón y Champiñones",
        price: 69.9,
        imageUrl: "pizzas_11",
        categoryId: 3
      }
]

export {
    products 
}