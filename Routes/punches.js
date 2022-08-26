const router = require('express').Router();
let Punch = require('../Models/punch.model');

router.route('/').get((req, res) => {
    Punch.find()
        .then(punches => res.json(punches))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res)=> {
    const name = req.body.name;
    const category = req.body.category;

    const newPunch = new Punch({
        name,
        category
    });

    newPunch.save()
        .then(()=> res.json('Punch added!'))
        .catch(err=>res.status(400).json('Error: '+ err))
});

router.route('/:id').get((req, res)=>{
    Punch.findById(req.params.id)
        .then(punches => res.json(punches))
        .catch(err=> res.status(400).json('Error: ' +err));
});

router.route('/:id').delete((req, res) => {
    Punch.findByIdAndDelete(req.params.id)
        .then(() => res.json('Punch deleted.'))
        .catch(err => res.status(400).json('Error: ' + err + 'Id:' + req.params.id));
});

module.exports = router;