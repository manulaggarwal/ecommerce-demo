import Order from '../models/order';


export function createOrder(req, res) {
    if (!req.isAuthenticated()) return res.send(401);
    Order.find({ "user": req.user._id }).exec((err, order) => {
        if (err) return res.send(409);
        if (order.length > 0) {
            return res.send(order[0]);
        } else {
            const newOrder = new Order({
                user: req.user._id,
                shippingAddress: {
                    name: "",
                    phoneNumber: 0,
                    address1: "",
                    address2: "",
                    city: "",
                    state: "",
                    zip: 0
                },
                billingAddress: {
                    name: "",
                    phoneNumber: 0,
                    address1: "",
                    address2: "",
                    city: "",
                    state: "",
                    zip: 0
                },
                paymentDetails: {
                    name: "",
                    cardNumber: 0,
                    expiry: {
                        month: 0,
                        year: 0
                    }
                }
            });
            return newOrder.save((saveErr) => {
                if (saveErr) return next(saveErr);
                return res.send(newOrder);
            });
        }
    })
}

export function getOrder(req, res) {
    if (!req.isAuthenticated()) return res.send(401);
    Order.findById(req.params.id).populate("user").exec((err, order) => {
        if (err) return res.send(409);
        return res.send(order);
    })
}

export function addShippingAddress(req, res) {
    if (!req.isAuthenticated()) return res.send(401);
    Order.findByIdAndUpdate({ "_id": req.body.orderId }, {
        $set: {
            "shippingAddress.name": req.body.name,
            "shippingAddress.phoneNumber": req.body.phoneNumber,
            "shippingAddress.address1": req.body.address1,
            "shippingAddress.address2": req.body.address2,
            "shippingAddress.city": req.body.city,
            "shippingAddress.state": req.body.state,
            "shippingAddress.zip": req.body.zip
        }
    }, { new: true }).exec((err, order) => {
        if (err) return res.send(409);
        return res.send(order);
    })
}

export function addBillingAddress(req, res) {
    if (!req.isAuthenticated()) return res.send(401);
    Order.findByIdAndUpdate({ "_id": req.body.orderId }, {
        $set: {
            "billingAddress.name": req.body.name,
            "billingAddress.phoneNumber": req.body.phoneNumber,
            "billingAddress.address1": req.body.address1,
            "billingAddress.address2": req.body.address2,
            "billingAddress.city": req.body.city,
            "billingAddress.state": req.body.state,
            "billingAddress.zip": req.body.zip
        }
    }, { new: true }).exec((err, order) => {
        if (err) return res.send(409);
        return res.send(order);
    })
}

export function addPaymentDetails(req, res) {
    if (!req.isAuthenticated()) return res.send(401);
    Order.findByIdAndUpdate({ "_id": req.body.orderId }, {
        $set: {
            "paymentDetails.name": req.body.name,
            "paymentDetails.cardNumber": req.body.cardNumber,
            "paymentDetails.expiry.month": req.body.expiryMonth,
            "paymentDetails.expiry.year": req.body.expiryYear
        }
    }, { new: true }).exec((err, order) => {
        if (err) return res.send(409);
        return res.send(order);
    })
}

export default {
    createOrder,
    getOrder,
    addShippingAddress,
    addBillingAddress,
    addPaymentDetails
}