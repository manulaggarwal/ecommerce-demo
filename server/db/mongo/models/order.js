import mongoose from 'mongoose';


const OrderSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    shippingAddress: {
        name: String,
        phoneNumber: Number,
        address1: String,
        address2: String,
        city: String,
        state: String,
        zip: String
    },
    billingAddress: {
        name: String,
        phoneNumber: Number,
        address1: String,
        address2: String,
        city: String,
        state: String,
        zip: String
    },
    paymentDetails: {
        name: String,
        cardNumber: Number,
        expiry: {
            month: Number,
            year: Number
        }
    }
});

export default mongoose.model('Order', OrderSchema);