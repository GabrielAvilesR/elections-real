import mongoose, {Schema} from 'mongoose'

const tweetSchema = new Schema({
    politicianUsername:{
        type:String,
        unique:true,
        required:true
    },
    pts:{
        type:Number,
        default:0
    },
    na:{
        type:Number,
        default:0
    },
    nts:{
        type:Number,
        default:0
    },
    parties:[{
        type:String
    }],
    json:{
        type:Object
    }
}, {timestamps:true})

const model = mongoose.model('Tweet', tweetSchema)

export default model