const Hotels = require('../models/hotels.models');

exports.hotelGet = async (req,res)=>{
       Hotels.find()
       .then(hotels=>{
           res.json(hotels);
       });
}


exports.Post = async(req,res)=>{
    let hotel = new Hotels();
    hotel.name = req.body.name;
    hotel.city = req.body.city;
    hotel.address.Street = req.body.street;
    hotel.address.Pincode = req.body.Pincode;
    hotel.contact.email = req.body.email;
    hotel.contact.phone = req.body.phone;

    Hotels.create(
        hotel
    ).then(hotel=>{
        return res.json(hotel);
    }).catch(err=>{
        return res.json(`OOpsie there is an error ${err}`);
    })
}


exports.del = async(req,res)=>{
    Hotels.deleteMany()
    .then(res.json(`All claer`));
}


exports.city = async(req,res)=>{
    Hotels.find({city:req.params.city})
    .then(data=>{
        return res.json(data);
    })
}


exports.getById = async (req,res)=>{
    let hotel = await Hotels.findById(req.params.id);
    return res.json(hotel);
}

exports.fuzzrSearch = async(req,res)=>{
    
}