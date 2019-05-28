const mongoose = require('mongoose');
const Tool = mongoose.model('Tool');

module.exports = {
  async index(req, res) {
    const tools = await Tool.find();
    return res.json(tools);
  }
}
