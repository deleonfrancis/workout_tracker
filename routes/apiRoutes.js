const router = require("express").Router();
const path = require("path");
const db = require("../models");


router.get("/api/workouts", (req, res) => {
    
    db.Workout.aggregate()
    // .sort({ day: -1 })
    // .limit(1)
    .addFields({ totalDuration: { $sum: "$exercises.duration" } })
    .exec((err, results) => {
        if (err) return res.json(err) 
        return res.json(results)
      });
  });
  
// router.get("/api/workouts", (req, res) => {
//   db.Workout.find({})
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);

    db.Workout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $push: {
        exercises: req.body,
      },
    },
    {
      new: true,
      upsert: true,
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
//   db.Workout.find({})
//     .sort({ day: -1 })
//     .limit(7)
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
db.Workout.aggregate()
.sort({ day: -1 })
.limit(7)
.addFields({ totalDuration: { $sum: "$exercises.duration" } })
.exec((err, results) => {
    if (err) return res.json(err) 
    return res.json(results)
  });
});

module.exports = router;
