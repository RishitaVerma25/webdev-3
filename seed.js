require('dotenv').config();
const mongoose = require('mongoose');
const Tour = require('./models/tourModel');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/my_local_db';

const tours = [
    {
        name: 'The Forest Hiker',
        duration: 5,
        maxGroupSize: 25,
        difficulty: 'easy',
        price: 397,
        summary: 'Breathtaking hike through the Canadian Banff National Park'
    },
    {
        name: 'The Sea Explorer',
        duration: 7,
        maxGroupSize: 15,
        difficulty: 'medium',
        price: 497,
        summary: 'Exploring the jaw-dropping US east coast by foot and boat'
    },
    {
        name: 'The Snow Adventurer',
        duration: 4,
        maxGroupSize: 10,
        difficulty: 'hard',
        price: 997,
        summary: 'Exciting adventure in the snow with snowboarding and skiing'
    }
];

mongoose.connect(MONGO_URI)
    .then(async () => {
        console.log('Connected to DB. Seeding data...');
        
        // Delete all existing tours first to avoid duplicate errors
        await Tour.deleteMany();
        console.log('Cleared existing data.');

        // Insert new tours
        await Tour.create(tours);
        console.log('Successfully loaded new data!');
        
        process.exit(0);
    })
    .catch(err => {
        console.error('Error seeding data:', err);
        process.exit(1);
    });
