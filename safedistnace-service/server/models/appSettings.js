import mongoose from 'mongoose';

const AppSettingSchema = new mongoose.Schema({
    // covid19:{
    //     type: String,
    //     required: "covid19 is required!"
    // },
    // lastModifiedDate:{
    //     type: Date,
    //     default:Date.now()
    // }
    radiu:{
        type:String,
        default:0.1
    },
    numberOfPeople:{
        type:String,
        default:100
    }
},{
    versionKey: false
});

export default mongoose.model('AppSettings', AppSettingSchema);