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

router.put('/update/:id', async (req, res) => {
    try {
        const booking = await MyBooking.findById(req.params.id);

        if(!booking){
            return res.json({message:'Booking not found'});
        }

        booking.name = req.body.name || booking.name;
        booking.to = req.body.to || booking.to;
        booking.destination = req.body.destination || booking.destination;
        booking.travelDate = req.body.travelDate || booking.travelDate;
        booking.amt = req.body.amt || booking.amt;

        await booking.save();


        
    } catch (error) {
        
    }
});






module.exports = router;