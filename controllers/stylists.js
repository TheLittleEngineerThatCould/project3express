const express = require('express');
const router = express.Router();
const Stylists = require('../models/stylists.js');

// Remember INDUCES
// Index
router.get('/', (req, res) => {
    Stylists.find({}, (err, foundStylist) => {
        res.json(foundStylist);
    });
});

// New - Will be handled by React application
// Delete
router.delete('/:id', (req, res) => {
    Stylists.findByIdAndRemove(req.params.id, (err, deletedStylist) => {
        res.json(deletedStylist);
    });
});

// Update
router.put('/:id', (req, res) => {
    Stylists.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedStylist) => {
        res.json(updatedStylist);
    });
}); 

// Create
router.post('/', (req, res) => {
    Stylists.create(req.body, (err, createdStylist) => {
        res.json(createdStylist); //.json() will send proper headers in response so client knows it's json coming back
    });
});
// Edit - Will be handled by React application
// Show

module.exports = router;