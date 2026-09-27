const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a group size']
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty']
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    },
    summary: {
        type: String,
        trim: true,
        required: [true, 'A tour must have a description']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
