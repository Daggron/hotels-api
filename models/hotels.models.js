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
            },
            Landmark:{
                type:String,
            },
            Pincode:{
                type:String,
            }
        },
        images:{
            type:Array,
        },
        contact:{
            email:{
                type:String,
            },
            phone:{
                type:String,
            }
        }
    
    
},{
    timestamps:true
});

let Hotels = mongoose.model('Hotels',schema);

module.exports = Hotels;