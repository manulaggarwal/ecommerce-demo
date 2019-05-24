import User from '../models/user';

export function addItem(req, res) {
    if (!req.isAuthenticated()) return res.send(401);
    User.findOneAndUpdate({ "_id": req.user._id }, {
        $push: {
            "cartItems": req.params.id
        }
    }, { new: true }).exec((err, user) => {
        if (err) return res.send(409);
        return res.send(user);
    });
}

export function getCart(req, res) {
    if (!req.isAuthenticated()) return res.send(401);
    User.findById(req.user._id).populate("cartItems").exec((err, user)=>{
        if (err) return res.send(409);
        return res.send(user.cartItems);
    })
}

export function removeItemFromCart(req, res, next) {
    if (!req.isAuthenticated()) return res.send(401);
        User.findById(req.user._id).exec((err, user)=>{
            if (err) return res.send(409);
            user.cartItems.splice(user.cartItems.indexOf(req.params.id), 1);
            return user.save((saveErr)=>{
                if (saveErr) return next(saveErr);
                return res.send(user);
            });
        });
}

export default {
    addItem,
    getCart,
    removeItemFromCart
}