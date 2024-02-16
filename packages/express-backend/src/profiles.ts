import { Document } from "mongoose";
import { Profile } from "./models/profile";
import ProfileModel from "./models/mongo/profile";

function index(): Promise<Profile[]> {
  return ProfileModel.find();
}

function get(userid: String): Promise<Profile> {
  console.log("Searching for profile with userid:", userid);
  return ProfileModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}


function create(profile: Profile): Promise<Profile> {
  const p = new ProfileModel(profile);
  return p.save();
}

export default { index, get, create };