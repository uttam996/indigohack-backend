const exoress = require('express');

const router = exoress.Router();

const MyBooking = require('../Models/MyBooking');


router.get('/', async (req, res) => {
    try {

        const allbookings = await MyBooking.find({});
         return res.status(200).json(allbookings);
        
    } catch (error) {

        return res.status(500).json({message:error.message});
        
        
    }
});

router.post('/create', async (req, res) => {
    try {
        const newBooking = await MyBooking.create(req.body);
        return res.status(200).json(newBooking);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
});






module.exports = router;