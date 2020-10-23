const serviceToGetLocation = require("../../services/ip-api");

module.exports = async (req, res) => {
  try {
    const info = await serviceToGetLocation();
    res.send(info.data);
  } catch (err) {
    res.status(404).send({ status: "404", message: "no found" });
  }
};
