const express = require("express");
const router = express.Router();
const service = require('../services/agentService');

router.get("/", async (req, res, next) => {
    res.json( await service.getAll());
});

router.get("/:id", async (req, res, next) => {
    res.json(await service.getOne(req.params.id));
});

router.post("/", async (req, res, next) => {
    res.json(await service.create());
});
    
router.put("/:id", async(req, res, next) =>{
    res.json(await service.update());
});

module.exports = router;