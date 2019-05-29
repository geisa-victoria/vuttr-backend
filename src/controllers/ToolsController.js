const mongoose = require('mongoose');
const Tool = mongoose.model('Tool');


module.exports = {
  async showAll(req, res) {
    let { tag } = req.query;

    return res.json(await Tool.find(tag? {tags: tag} : undefined));
  },

  async show(req, res) {
    try {
      const tools = await Tool.findById(req.params.id)
      return res.json(tools);
    } catch (error) {
      return res.status(500).send({ message: 'Provided ID is invalid.'});
    }
  },

  async create(req, res) {
    try {
      const tools = await Tool.create(req.body);
      return res.json(tools);
    } catch (error) {
      return res.status(500).send({ message: 'Couldn\'t create the tool. Some fields are missing...'});
    }

  },

  async update(req, res) {
    try {
      const tools = await Tool.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json(tools);
    } catch (error) {
      return res.status(500).send({ message: 'Couldn\'t update the tool because provided ID is invalid.'});
    }
  },

  async remove(req, res) {
    try {
      await Tool.findByIdAndRemove(req.params.id);
      return res.json({});
    } catch (error) {
      return res.status(500).send({ message: 'Couldn\'t delete the tool because provided ID is invalid.'});
    }

  }
}
