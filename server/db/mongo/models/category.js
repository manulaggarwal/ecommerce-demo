import mongoose from 'mongoose';


const CategorySchema = mongoose.Schema({
    categoryName: String,
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'products'}]
});

export default mongoose.model('Category', CategorySchema);