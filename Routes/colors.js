const router = require('express').Router();
let Color = require('../Models/color.model');

router.route('/').get((req, res) => {
    Color.find()
        .then(colors => res.json(colors))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res)=> {
    const name = req.body.name;
    const blends = req.body.blends;
    const cardstock = req.body.cardstock;
    const inkpads = req.body.inkpads;
    const markers = req.body.markers;
    const reinkers = req.body.reinkers;

    const newColor = new Color({
        name,
        blends,
        cardstock,
        inkpads,
        markers,
        reinkers
    });

    newColor.save()
        .then(()=> res.json('Color added!'))
        .catch(err=>res.status(400).json('Error: '+ err))
});

router.route('/:id').get((req, res)=>{
    Color.findById(req.params.id)
        .then(colors => res.json(colors))
        .catch(err=> res.status(400).json('Error: ' +err));
});

router.route('/:id').delete((req, res) => {
    Color.findByIdAndDelete(req.params.id)
        .then(() => res.json('Color deleted.'))
        .catch(err => res.status(400).json('Error: ' + err + 'Id:' + req.params.id));
});

module.exports = router;