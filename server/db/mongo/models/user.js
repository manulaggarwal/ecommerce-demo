
import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';
import titilize from 'mongoose-title-case';
import validate from 'mongoose-validator';

var nameValidator = [
  validate({
    validator:'matches',
    arguments:/^[a-zA-Z0-9_.+-]*(?:[a-zA-Z][a-zA-Z0-9_.+-]*){2,}$/,
    message:  'Must be at least two characters long, no special characters or numbers'
  })
];

var emailValidator = [
  validate({
    validator:'isEmail',
    message:  'Is not a valid e-mail ID'
  })
];

var passwordValidator = [
  validate({
    validator:'matches',
    arguments:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message:  'Password must be at least 8 characters long and should consist of at least one character and one number'
  })
];

var telephoneValidator = [
  validate({
    validator:'matches',
    arguments:/^(\+\d{1,3}[- ]?)?\d{10}$/,
    message:  'Enter a valid phone number'
  })
];

var zipValidator = [
  validate({
    validator:'matches',
    arguments:/^(\+\d{1,3}[- ]?)?\d{5}$/,
    message:  'Enter a valid zip code'
  })
];

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true, validate: emailValidator },
  password: String,
  firstName: {type: String, validate: nameValidator },
  lastName: {type: String, validate: nameValidator },
  phoneNumber: {type:String, validate:telephoneValidator},
  address: [{
    name: String,
    phoneNumber:  {type:String, validate:telephoneValidator},
    address1: {type:String, validate:nameValidator},
    address2: String,
    city: {type:String, validate:nameValidator},
    state: {type:String, validate:nameValidator},
    zip: {type:String, validate:zipValidator},
    default: Boolean
  }],
  cartItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'products'}],
  paymentDetails:{}
}, {
  email: String,
  cartItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'products'}]
});

function encryptPassword(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  return bcrypt.genSalt(5, (saltErr, salt) => {
    if (saltErr) return next(saltErr);
    return bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
      if (hashErr) return next(hashErr);
      user.password = hash;
      return next();
    });
  });
}

UserSchema.plugin(titilize, {
  paths:['firstName' , 'lastName']
});

/**
 * Password hash middleware.
 */
UserSchema.pre('save', encryptPassword);

/*
 Defining our own custom document instance method
 */
UserSchema.methods = {
  comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return cb(err);
      return cb(null, isMatch);
    });
  }
};

/**
 * Statics
 */

UserSchema.statics = {};

export default mongoose.model('User', UserSchema);
