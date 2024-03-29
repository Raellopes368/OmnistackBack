const Booking = require("../models/Booking");

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { id } = req.params;
    const { date } = req.body;
    const booking = await Booking.create({
      user: user_id,
      spot: id,
      date
    });
    await booking.populate("spot user").execPopulate();
    return res.json(booking);
  }
}