var express = require('express');
var router = express.Router();

const Categories = require("./db/models/Categories");

/* GET categories  listing. */
router.get('/', async (req, res, next) => {
    
    try{
        let categories = await Categories.find();
        res.json(categories);
    }catch(err){

    }
    res.json({success: true});

});

module.exports = router;
 