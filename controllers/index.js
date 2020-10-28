const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('hi there danie bakes');
})

module.exports = router;