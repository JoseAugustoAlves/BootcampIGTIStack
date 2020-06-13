import express from "express";
import {calc} from "../libs/calculos.js"

const {writeFile, readFile} = require("fs").promises;
const router = express.Router();
const {inserirLancamento} = require("../controllers/lancamentosController.js")

router.post("/receita", async(req, res) => {
    res.send(await inserirLancamento(req.body))
});


router.post("/despesa", async(req, res) => {
    res.send(await inserirLancamento(req.body, "D"))
});

export {Router}