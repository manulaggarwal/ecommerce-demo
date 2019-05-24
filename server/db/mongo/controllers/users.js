import passport from 'passport';
import User from '../models/user';
import { addItem, getCart, removeItemFromCart } from './cart';
/**
 * POST /login
 */
export function login(req, res, next) {
  // Do email and password validation for the server
  passport.authenticate('local', (authErr, user, info) => {
    if (authErr) return next(authErr);
    if (!user) {
      return res.sendStatus(401);
    }

    // Passport exposes a login() function on req (also aliased as
    // logIn()) that can be used to establish a login session
    return req.logIn(user, (loginErr) => {
      if (loginErr) return res.sendStatus(401);
      return res.send(user);
    });
  })(req, res, next);
}

/**
 * POST /logout
 */
export function logout(req, res) {
  req.logout();
  res.sendStatus(200);
}

/**
 * POST /signup
 * Create a new local account
 */
export function signUp(req, res, next) {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber
  });

  User.findOne({ email: req.body.email }, (findErr, existingUser) => {
    if (existingUser) {
      return res.sendStatus(409);
    }

    return user.save((saveErr) => {
      if (saveErr) return next(saveErr);
      return req.logIn(user, (loginErr) => {
        if (loginErr) return res.sendStatus(401);
        return res.send(user);
      });
    });
  });
}

function findAndAddUserAddress(req, res) {
  return User.findOneAndUpdate({ "_id": req.user._id }, { $push: { address: { ...req.body } } }, { new: true }).exec((err, user) => {
    if (err) return res.send(409);
    return res.send(user);
  })
}

export function addAddress(req, res, next) {
  if (!req.isAuthenticated()) return res.send(401);
  if (req.body.default) {
    User.findOneAndUpdate({ "_id": req.user._id, "address": { $elemMatch: { "default": true } } }, { $set: { "address.$.default": false } }).exec((err) => {
      if (err) return res.send(409);
      return findAndAddUserAddress(req, res);
    })
  } else {
    return findAndAddUserAddress(req, res);
  }
}

export function editAddress(req, res, next) {
  if (!req.isAuthenticated()) return res.send(401);
  User.findOneAndUpdate({
    "_id": req.user._id, "address": {
      $elemMatch: {
        "_id": req.body.id
      }
    }
  },
    {
      $set: {
        "address.$.name": req.body.name,
        "address.$.phoneNumber": req.body.phoneNumber,
        "address.$.address1": req.body.address1,
        "address.$.address2": req.body.address2,
        "address.$.city": req.body.city,
        "address.$.state": req.body.state,
        "address.$.zip": req.body.zip,
        "address.$.default": req.body.default
      }
    }, { new: true }).exec((err, user) => {
      if (err) return res.send(409);
      return res.send(user);
    })
}

export function deleteAddress(req, res, next) {
  User.findById(req.user._id).exec((err, user)=>{
    if (err) return res.send(409);
    user.address.splice(user.address.indexOf(req.params.id), 1);
    return user.save((saveErr)=>{
        if (saveErr) return next(saveErr);
        return res.send(user);
    });
});
}

export function editDetails(req, res, next) {
  if (!req.isAuthenticated()) return res.send(401);
  User.findOneAndUpdate({
    "_id": req.user._id
  },
    {
      $set: {
        "firstName": req.body.firstName.value,
        "phoneNumber": req.body.phoneNumber.value,
        "lastName": req.body.lastName.value
      }
    }, { new: true }).exec((err, user) => {
      if (err) return res.send(409);
      return res.send(user);
    })
}

export function addToCart(req, res) {
  return addItem(req, res);
}

export function fetchCart(req, res) {
  return getCart(req, res);
}

export function removeFromCart(req, res, next) {
  return removeItemFromCart(req, res, next);
}

export default {
  login,
  logout,
  signUp,
  addAddress,
  editAddress,
  deleteAddress,
  addToCart,
  fetchCart,
  removeFromCart,
  editDetails
};
