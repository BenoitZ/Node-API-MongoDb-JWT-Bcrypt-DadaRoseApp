const express = require('express');
const Project = require('../models/project');
const authentification = require('../middleswares/authentification')
const router = new express.Router();

router.post('/project',  authentification, async (req, res, next) =>{
    const project = new Project(req.body);
    try {
        const saveProject = await project.save();
        res.status(201).send(saveProject);
    } catch (error) {
        res.status(400).send(error)
     }
});

router.get('/project', authentification, async (req, res, next) =>{
    try {
    const project = await Project.find({});
            res.send(project);
        } catch (error) {
            res.status(500).send(error)
        }
    });

router.patch('/project/:id',  authentification, async (req, res, next) =>{
    const updatedInfo = Object.keys(req.body);
    const projectId = req.params.id;
    try {
        const project = await Project.findById(projectId);
        updatedInfo.forEach(update => project[update] = req.body[update]);
        await project.save();

        if (!project) { return res.status(404).send('media not found')};
        res.send(project);
    } catch (error) {
        res.status(500).send(error)
     }
});

router.delete('/project/:id',  authentification, async (req, res, next) =>{
    const projectId = req.params.id;
    try {
        const project = await Project.findByIdAndDelete(projectId);
        if (!project) { return res.status(404).send('Project not found')};
        res.send(project);
    } catch (error) {
        res.status(500).send(error)
     }
});

module.exports = router;