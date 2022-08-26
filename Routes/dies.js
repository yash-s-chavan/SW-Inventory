const router = require('express').Router();
let Die = require('../Models/die.model');

router.route('/').get((req, res) => {
    Die.find()
        .then(dies => res.json(dies))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res)=> {
    const name = req.body.name;
    const category = req.body.category;

    const newDie = new Die({
        name,
        category
    });

    newDie.save()
        .then(()=> res.json('Die added!'))
        .catch(err=>res.status(400).json('Error: '+ err))
});

router.route('/:id').get((req, res)=>{
    Die.findById(req.params.id)
        .then(dies => res.json(dies))
        .catch(err=> res.status(400).json('Error: ' +err));
});

router.route('/:id').delete((req, res) => {
    Die.findByIdAndDelete(req.params.id)
        .then(() => res.json('Die deleted.'))
        .catch(err => res.status(400).json('Error: ' + err + 'Id:' + req.params.id));
});

module.exports = router;