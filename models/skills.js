const mongoose = require("mongoose");
const skillsSchema = new mongoose.Schema(
  {
    skillType: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    icon: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Skills = mongoose.model("skills", skillsSchema);
module.exports = Skills;
