import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    socialHandles: {
        instagram: {
            type: String,
        },
        google: {
            type: String,
        },
        youtube: {
            type: String,
        },
    },
    joiningDate: {
        type: Date,
        default: Date.now()
    }
})

const Member = mongoose.model('Members', memberSchema)

export default Member

