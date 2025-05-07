import mongoose from 'mongoose';

// Define schema for farmer product reviews
const farmerProductReviewSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
        comment: {
            type: String,
            required: true,
            trim: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users', // Referencing 'users' collection as per your MongoDB structure
        },
    },
    { timestamps: true }
);

// Define schema for suppliers
const supplierSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users', // Linking with the 'users' collection
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            match: [/.+\@.+\..+/, 'Please enter a valid email address'],
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            match: [/^\d{10}$/, 'Phone number must be 10 digits'],
        },
        storage: {
            type: String,
            required: true,
            trim: true,
        },
        reviews: [farmerProductReviewSchema],
        coordinates: {
            longitude: {
                type: Number,
                required: true,
            },
            latitude: {
                type: Number,
                required: true,
            },
        },
        cropSelection: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            match: [/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/, 'Please enter a valid image URL'],
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        isReviewed: {
            type: Boolean,
            required: true,
            default: false,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products', // Linking with a 'products' collection for supplier's products
            },
        ],
    },
    { timestamps: true }
);

// Middleware to calculate average rating after a review is added
supplierSchema.methods.calculateAverageRating = function () {
    if (this.reviews.length > 0) {
        const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
        this.rating = totalRating / this.reviews.length;
    } else {
        this.rating = 0;
    }
};

// Post-save middleware to calculate average rating
supplierSchema.post('save', function (doc) {
    doc.calculateAverageRating();
});

// Index frequently queried fields for better performance
supplierSchema.index({ user: 1, email: 1 });

// Create and export the Supplier model
const Supplier = mongoose.model('suppliers', supplierSchema); // Referencing 'suppliers' collection

export default Supplier;
