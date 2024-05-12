import { Schema, model } from "mongoose";

const SeoulLandExplainSchema = new Schema({
  id:{type : String, unique : true, required : true},
  title:{type:String, required:true},
  description:{type:String},
  image : {type : String},
  people : {type : String},
  height : {type : String},
  location : {type:String, required:true}
})

export default model("AttractionSeoulLandExplain", SeoulLandExplainSchema);