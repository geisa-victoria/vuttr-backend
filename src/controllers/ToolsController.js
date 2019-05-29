const mongoose = require('mongoose');
const Tool = mongoose.model('Tool');

module.exports = {
  async showAll(req, res) {
    let { tag } = req.query;

    return res.json(await Tool.find(tag? {tags: tag} : undefined));
  },

  async show(req, res) {
    const tools = await Tool.findById(req.params.id);

    return res.json(tools);
  },

  async create(req, res) {
    const tools = await Tool.create(req.body);

    return res.json(tools);
  },

  async update(req, res) {
    const tools = await Tool.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(tools);
  },

  async remove(req, res) {
    await Tool.findByIdAndRemove(req.params.id);

    return res.json({});
  }
}
