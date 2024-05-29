import express, { Request, Response} from "express";
import {Teams} from "../src/db/Teams.model.db";

let router = express.Router();

router.get("/",async (request: Request, res: Response) => {
    try{
        const teams = await Teams.find();
        res.status(200).json(teams);
    }catch (error){
        //res.status(500).json({ message: error.message });
        console.error(error);
    }
})

router.post("/",async (req: Request, res: Response) => {
    const newTeam = new Teams(req.body);
    newTeam.save().then(x => {
        res.status(201).json(newTeam);
    }).catch(error => {
        res.status(500).send("POST-Error:" + error);
    });
})

module.exports = router;