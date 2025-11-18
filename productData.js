// productData.js

/**
 * @type {Array<Object>} products - Liiska dhammaan badeecadaha suuqa.
 * Waxaan isticmaaleynaa 'export' si aan uga dhigno xogtan mid la heli karo (accessible)
 * faylalka kale ee isticmaalaya 'import'.
 * * FIIRO GAAR AH: Sawirrada waxaa loo beddelay (placeholder URLs) si loo hubiyo inay soo muuqdaan.
 */
export const products = [
  {
    id: 1,
    name: "Tomato",
    category: "Vegetables",
    description:
      "Yaanyadu waa nooc kamida Khudaarta waa midho inta badan jaale iyo green noqda.",
    imageUrl: "./images/tomato.jpg", 
    price: 8.5,
  },
  {
    id: 2,
    name: "Watermelon",
    category: "Fruits",
    description: "Qaraha waa mid macaan, cabitaanna loo isticmaalo.",
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D", 
    price: 5.0,
  },
  {
    id: 3,
    name: "Banana",
    category: "Fruits",
    description: "Muusku waa midho dhadhan fiican, si fududna loo cuno.",
    imageUrl: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww", 
    price: 9.5,
  },
  {
    id: 4,
    name: "Mango",
    category: "Fruits",
    description: "Cambuhu waa midho macaan mararka qaarna dhanaan yar yeesha.",
    imageUrl: "https://images.unsplash.com/photo-1605027990121-cbae9e0642df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbmdvfGVufDB8fDB8fHww", 
    price: 2.75,
  },
  {
    id: 5,
    name: "Papaya",
    category: "Fruits",
    description: "Babaygu waa nooc kamida fruits-ka, nafaqo badanna leh.",
    imageUrl: "https://images.unsplash.com/photo-1623492229905-ebc1202e8904?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFwYXlhfGVufDB8fDB8fHww", 
    price: 3.5,
  },
  {
    id: 6,
    name: "Strawberry",
    category: "Fruits",
    description:
      "Waa midho cas, macaanna leh, waddamada kulul badanaa kama baxo.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1675731118661-15dc54c11130?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D", 
    price: 6.5,
  },
  {
    id: 7,
    name: "Salad Lettuce",
    category: "Vegetables",
    description: "Waa caleen la cuno, inta badan salad lagu sameeyo.",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsYWR8ZW58MHx8MHx8fDA%3D", 
    price: 2.0,
  },
  {
    id: 8,
    name: "Apple Red",
    category: "Fruits",
    description: "Tufaaxa guduudan waa mid kamida midhaha ugu caansan.",
    imageUrl: "https://images.unsplash.com/photo-1669999207738-fcdb7103a6f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjByZWR8ZW58MHx8MHx8fDA%3D", 
    price: 11.0,
  },
  {
    id: 9,
    name: "Cucumber",
    category: "Vegetables",
    description: "Qajaarku waa midho qabow, salad-na lagu sameeyo.",
    imageUrl: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D", 
    price: 1.5,
  },
  {
    id: 10,
    name: "Carrots",
    category: "Vegetables",
    description: "Karootadu waa xidid orange ah oo nafaqo badan leh.",
    imageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D", 
    price: 1.2,
  },
];