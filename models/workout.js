const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise type is required",
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise name is required",
      },
      duration: {
        type: Number,
        required: "Weight is required",
      },
      weight: {
        type: Number,
        //required: "Weight is required",
      },
      reps: {
        type: Number,
        //required: "Number of reps required",
      },
      sets: {
        type: Number,
        //required: "Number of sets required",
      },
    },
  ],
});


