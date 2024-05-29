import mongoose, { Schema } from "mongoose";

const teamsSchema = new Schema ( {
    name: { type: String, required: true },
    playerAmount: { type: Number, required: true },
    ageGroup: {type:String, required: true}
});

const TeamsModel = mongoose.model ('TeamsTodo', teamsSchema);

export const Teams = TeamsModel;