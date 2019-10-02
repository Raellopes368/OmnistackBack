const { Schema, model } = require("mongoose");


const BookingSchema = new Schema({
  date: String,
  aproved: Boolean,
  spot: {
    type: Schema.Types.ObjectId,
    ref: "Spot"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = model("Booking", BookingSchema);