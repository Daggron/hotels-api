const mongoose = require('mongoose');

const schema = new mongoose.Schema({
   
        name:{
            type:String,
        },
        city:{
            type:String,
        },
        address:{
            Street:{
                type:String,
            }
        },
        image:{
            type:String,
        },
        contact:{
            email:{
                type:String,
            },
            phone:{
                type:String,
            }
        },
        rating:{
            type:String,
        },
        reviews:{
            type:String
        },
        price:{
            type:String,
        },
        Roomtype:{
            type:String
        }
    
    
},{
    timestamps:true
});

let Hotels = mongoose.model('Hotels',schema);

module.exports = Hotels;