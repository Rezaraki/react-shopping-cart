import bcrypt from "bcryptjs";

export const products = [

  {
    name: "Winter body",
    description: [
      { support: "گارانتی مادام العمر" },
      { support: "ارسال رایگان" },
      { support: "اورجینال" },
    ],
    price: 120,
    offPrice: 120,
    discount: 0,
    image: "https://s4.uupload.ir/files/item1_soj.jpg",
  }, 
  {
    name: "Adidas",
    description: [
      { support: "گارانتی مادام العمر" },
      { support: "اورجینال" },
    ],
    price: 110,
    offPrice: 100,
    discount: 8,
   image:"https://s4.uupload.ir/files/item2_fc5s.jpg"
  },  
  {
    name: "Vans",
    description: [
      { support: "گارانتی مادام العمر" },
      { support: "اورجینال" },
      { support: "ارسال رایگان" },
    ],
    price: 99,
    offPrice: 89,
    discount: 10,
   image:"https://s4.uupload.ir/files/item3_zvc9.jpg"
  },  
  {
    name: "White",
    description: [
      { support: "گارانتی مادام العمر" },
      { support: "اورجینال" },
      { support: "ارسال رایگان" },
    ],
    price: 260,
    offPrice: 220,
    discount: 15,
   image:"https://s4.uupload.ir/files/item4_zr94.jpg"
  },
  {
    name: "Croopped-shoe",
    description: [
      { support: "گارانتی مادام العمر" },
      { support: "اورجینال" },
      { support: "ارسال رایگان" },
    ],
    price: 150,
    offPrice: 150,
    discount: 0,
   image:"https://s4.uupload.ir/files/item5_24ye.jpg"
  },  
  {
    name: "Blues",
    description: [
      { support: "گارانتی مادام العمر" },
      { support: "اورجینال" },
      { support: "ارسال رایگان" },
    ],
    price: 220,
    offPrice:200,
    discount:13,
   image:"https://s4.uupload.ir/files/item6_7jfy.jpg"
  }
];



export const users = [
  {
    name: "Saheb mohamadi",
    email: "saheb.ex@gmail.com",
    password: bcrypt.hashSync("12345", 8),
    phoneNumber: "09180000000",
    isAdmin: true,
  },
  {
    name: "John",
    email: "user@example.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: false,
    phoneNumber: "09181230000",
  },
];
