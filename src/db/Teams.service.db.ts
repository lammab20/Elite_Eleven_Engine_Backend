import {Teams} from "./Teams.model.db";
import mongoose from "mongoose";
import {teams_mock} from "../mock/teams_mock";

const DB_URL = "mongodb://0.0.0.0:27017/Elite_Eleven_Engine";

export const initializeDB = async () => {
    try {
        await mongoose.connect(DB_URL).then( () => {
            console.log("Connected to DB");
        })
        await Teams.deleteMany();
        await Teams.insertMany(teams_mock);

        //const result = await Teams
    }catch (error){
        console.error(error);
    }
}