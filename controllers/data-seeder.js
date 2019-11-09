const Hotels = require('../models/hotels.models');

const hotels=[
    {
        "name":"Hotel Residency Fort",
        "city": "Mumbai",
        "contact":{
        "email":"maria@gmail.com",
        "phone":"+91 8219972850",
        },
        "image":"https://r-ak.bstatic.com/xdata/images/hotel/square200/66643160.webp?k=b520f67bfc61f2b9b63958406139f8fd6e30c9eaa731363c94b68549da8debff&o=",
        "address":{
            "Street":"South Mumbai, Mumbai , 4.1 km from centre",
        },
        "reviews":"24150",
        "rating":"4.5",
        "Roomtype":"Delux-room,Double-delux",
        "price":"INR 5500"
    },
    {
        "name":"Hotel La Grande",
        "city": "Mumbai",
        "contact":{
            "email":"Grande-hotel@gmail.com",
            "phone":"8219972850",
        },
        "address":{
            "Street":"Andheri, Mumbai"
        },
        "image":"https://r-ak.bstatic.com/xdata/images/hotel/square200/66643160.webp?k=b520f67bfc61f2b9b63958406139f8fd6e30c9eaa731363c94b68549da8debff&o=",
        "reviews":"550",
        "rating":"4",
        "Roomtype":"Double-delux",
        "price":"INR 6700"
    },
    {
        "name":"Hotel Kohinoor Continental",
        "contact":{
            "email":"Kohinoor_the_hotel@gmail.com",
            "phone":"8219972850"
        },
        "city": "Mumbai",
        "address":{
            "Street":"Navi Mumbai, Mumbai",
        },
        "image":"https://r1imghtlak.mmtcdn.com/e40727683c5511e79eda0224510f5e5b.jfif?&output-quality=75&downsize=520:*&crop=520:350;0,20&output-format=jpg",
        "reviews":"216",
        "rating":"3.5",
        "Roomtype":"Semi delux, Full-delux",
        "price":"INR 5600"
    },

];


exports.add =  async (req,res)=>{
    let done = await hotels.map(data=>{
        let hotel = new Hotels();
        hotel = data;
        Hotels.create(hotel);
    })

        res.json('The Work is done Bro');
        console.log('The Work is done now');
    
}