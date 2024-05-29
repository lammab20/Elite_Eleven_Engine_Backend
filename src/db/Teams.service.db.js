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
exports.initializeDB = void 0;
const Teams_model_db_1 = require("./Teams.model.db");
const mongoose_1 = __importDefault(require("mongoose"));
const teams_mock_1 = require("../mock/teams_mock");
const DB_URL = "mongodb://0.0.0.0:27017/Elite_Eleven_Engine";
const initializeDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(DB_URL).then(() => {
            console.log("Connected to DB");
        });
        yield Teams_model_db_1.Teams.deleteMany();
        yield Teams_model_db_1.Teams.insertMany(teams_mock_1.teams_mock);
        //const result = await Teams
    }
    catch (error) {
        console.error(error);
    }
});
exports.initializeDB = initializeDB;
