const Hotels = require('../models/hotels.models');

exports.hotelGet = async (req,res)=>{
    if (req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        console.log(req.query.search);
        let foundHotels = await Hotels.find({'city':regex});
        if (foundHotels.length === 0){
            foundHotels = await Hotels.find({'name':regex});
        }
        res.json(foundHotels);
     }
     else{
            let hotelsFound = await Hotels.find();
            res.json(hotelsFound);
     }
}


exports.Post = async(req,res)=>{
    let hotel = new Hotels();
    hotel.name = req.body.name;
    hotel.city = req.body.city;
    hotel.address.Street = req.body.Street;
    hotel.contact.email = req.body.email;
    hotel.contact.phone = req.body.phone;
    hotel.image = req.body.image;
    hotel.rating = req.body.rating;
    hotel.reviews = req.body.reviews;
    hotel.Roomtype = req.body.Roomtype;
    hotel.price = req.body.price;

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
    .then(res.json(`Thanos Just snapped two times and killed the entire universe`));
}


exports.city = async(req,res)=>{
    const regex = new RegExp(escapeRegex(req.params.city), 'gi');
    Hotels.find({city:regex})
    .then(data=>{
        return res.json(data);
    })
    .catch(err=>{
        return res.json('oopsie there is an error'+err);
    })
}


exports.getById = async (req,res)=>{
    let hotel = await Hotels.findById(req.params.id);
    return res.json(hotel);
}

exports.getByName = async (req,res)=>{
    const regex = new RegExp(escapeRegex(req.params.name),'gi');
    Hotels.find({name:regex})
    .then(hotels=>{
        return res.json(hotels);
    })
    .catch(err=>{
        return res.status(401).json('Oopsie there is an error'+err);
    });
}




function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};