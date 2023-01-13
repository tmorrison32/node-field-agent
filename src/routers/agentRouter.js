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
    res.json(await service.create(req.body));
});
    
router.put("/:id", async(req, res, next) =>{
    res.json(await service.update(req.params.id, req.body));
});

router.delete("/:id", async (req, res, next) => {
    res.json(await service.deleteOne(req.params.id))
});

module.exports = router;