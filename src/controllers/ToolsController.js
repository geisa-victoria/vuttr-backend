const mongoose = require('mongoose');
const Tool = mongoose.model('Tool');

module.exports = {
  // List all Tools
  async index(req, res) {
    let { tag } = req.query;

    return res.json(await Tool.find(tag? {tags: tag} : undefined));
  },

  // Show one tool data based on id
  async show(req, res) {
    const tools = await Tool.findById(req.params.id);

    return res.json(tools);
  },

  // Create one tool record
  async store(req, res) {
    const tools = await Tool.create(req.body);

    return res.json(tools);
  },

  // Updates one tool based on an id and request.body
  async update(req, res) {
    const tools = await Tool.findByIdAndUpdate(req.params.id, req.body, { New: true });

    return res.json(tools);
  },
  // Delete tool
  async destroy(req, res) {
    const { statusCode } = res;
    const tools = await Tool.findByIdAndRemove(req.params.id);

    // res.send(statusCode);
    // res.send(statusCode);
    // return res.json({});
    res.sendStatus(200).json(tools);
  }
}
