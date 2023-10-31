const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone_no: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    skills: [
      {
        type: String,
      },
    ],
    availability: { type: String, required: true },
    interest: [
      {
        type: String,
      },
    ],
    events_registered: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  { timestamps: true }
);

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
module.exports = Volunteer;
