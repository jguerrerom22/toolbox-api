const express = require('express');
const router = express.Router();

const setText = async (req, res) => {
    if (req.body.text)
        return res.send({ text: req.body.text });
    else 
        return res.status(400).send('Text is required');
}
router.post('/', setText);

module.exports = router;