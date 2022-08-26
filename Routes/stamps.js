const router = require('express').Router();
let Stamp = require('../Models/stamp.model');

router.route('/').get((req, res) => {
    Stamp.find()
        .then(stamps => res.json(stamps))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res)=> {
    const name = req.body.name;
    const category = req.body.category;

    const newStamp = new Stamp({
        name,
        category
    });

    newStamp.save()
        .then(()=> res.json('Stamp added!'))
        .catch(err=>res.status(400).json('Error: '+ err))
});

router.route('/:id').get((req, res)=>{
    Stamp.findById(req.params.id)
        .then(stamps => res.json(stamps))
        .catch(err=> res.status(400).json('Error: ' +err));
});

router.route('/:id').delete((req, res) => {
    Stamp.findByIdAndDelete(req.params.id)
        .then(() => res.json('Stamp deleted.'))
        .catch(err => res.status(400).json('Error: ' + err + 'Id:' + req.params.id));
});

module.exports = router;