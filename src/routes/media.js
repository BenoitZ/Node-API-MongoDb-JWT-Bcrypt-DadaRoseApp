const express = require('express');
const Media = require('../models/media');
const authentification = require('../middleswares/authentification')
const router = new express.Router();

router.post('/media',  authentification, async (req, res, next) =>{
    const media = new Media(req.body);
    try {
        const saveMedia = await media.save();
        res.status(201).send(saveMedia);
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get('/media', authentification, async (req, res, next) =>{
    try {
    const media = await Media.find({});
            res.send(media);
        } catch (error) {
            res.status(500).send(error)
        }
    });

router.patch('/media/:id',  authentification, async (req, res, next) =>{
    const updatedInfo = Object.keys(req.body);
    const mediaId = req.params.id;
    try {
        const media = await Media.findById(mediaId);
        updatedInfo.forEach(update => media[update] = req.body[update]);
                // mets à jour la clef et la valeur pour chaque élément
        await media.save();

        if (!media) { return res.status(404).send('media not found')};
        res.send(media);
    } catch (error) {
        res.status(500).send(error)
     }
});

router.delete('/media/:id',  authentification, async (req, res, next) =>{
    const mediaId = req.params.id;
    try {
        const media = await Media.findByIdAndDelete(mediaId);
        if (!media) { return res.status(404).send('Media not found')};
        res.send(media);
    } catch (error) {
        res.status(500).send(error)
     }
});


module.exports = router;