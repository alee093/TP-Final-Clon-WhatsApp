import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    modifiedAt: {
        type: Date,
        default: null
    },
    active: {
        type: Boolean,
        default: true,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("User", userSchema)

export default User