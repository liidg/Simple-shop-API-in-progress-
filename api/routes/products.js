const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST request to /products'
    });
});

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'An ID has been registered'
        });
    }
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'Patch has been made'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Product has been delete'
    });
});
module.exports = router;