"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Teams_model_db_1 = require("../src/db/Teams.model.db");
let router = express_1.default.Router();
router.get("/", (request, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teams = yield Teams_model_db_1.Teams.find();
        res.status(200).json(teams);
    }
    catch (error) {
        //res.status(500).json({ message: error.message });
        console.error(error);
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTeam = new Teams_model_db_1.Teams(req.body);
    newTeam.save().then(x => {
        res.status(201).json(newTeam);
    }).catch(error => {
        res.status(500).send("POST-Error:" + error);
    });
}));
module.exports = router;
