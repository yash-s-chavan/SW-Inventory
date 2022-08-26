const router = require('express').Router();
let Folder = require('../Models/folder.model');

router.route('/').get((req, res) => {
    Folder.find()
        .then(folders => res.json(folders))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res)=> {
    const name = req.body.name;
    const category = req.body.category;

    const newFolder = new Folder({
        name,
        category
    });

    newFolder.save()
        .then(()=> res.json('Folder added!'))
        .catch(err=>res.status(400).json('Error: '+ err))
});

router.route('/:id').get((req, res)=>{
    Folder.findById(req.params.id)
        .then(folders => res.json(folders))
        .catch(err=> res.status(400).json('Error: ' +err));
});

router.route('/:id').delete((req, res) => {
    Folder.findByIdAndDelete(req.params.id)
        .then(() => res.json('Folder deleted.'))
        .catch(err => res.status(400).json('Error: ' + err + 'Id:' + req.params.id));
});

module.exports = router;