const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { tech } = req.query;
    const spots = await Spot.find({ techs: tech });
    return res.json(spots)
  },
  async store(req, res) {
    const { filename: thumbnail } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;
    console.log(req.file)
    const user = User.findById(user_id);
    if (!user) {
      return res.status(400).json({ error: "User does not exists" });
    }

    const spot = await Spot.create({
      thumbnail,
      company,
      techs: techs.split(",").map(tech => tech.trim()),
      price,
      user: user_id
    });
    return res.json(spot);
  }
}