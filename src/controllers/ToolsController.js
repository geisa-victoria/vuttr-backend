const mongoose = require('mongoose');

const Tool = mongoose.model('Tool');

module.exports = {
  async showAll(req, res) {
    try {
      const { tag } = req.query;
      return res.json(await Tool.find(tag ? { tags: tag } : undefined)).status(200);
    } catch (error) {
      return res.status(404).send({ message: "Couldn't find any tools on the database" });
    }
  },

  async show(req, res) {
    try {
      const tools = await Tool.findById(req.params.id);
      return res.status(200).json(tools);
    } catch (error) {
      return res.status(404).send({ message: "Provided ID wasn't found on database." });
    }
  },

  async create(req, res) {
    try {
      const tools = await Tool.create(req.body);
      return res.status(201).json(tools);
    } catch (error) {
      return res.status(500).send({
        message: 'Internal server error',
      });
    }
  },

  async update(req, res) {
    try {
      const tools = await Tool.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).json(tools);
    } catch (error) {
      return res.status(404).send({
        message: "Couldn't update the tool because provided ID wasn't found.",
      });
    }
  },

  async remove(req, res) {
    try {
      await Tool.findByIdAndRemove(req.params.id);
      return res.status(204).json({});
    } catch (error) {
      return res.status(404).send({
        message: "Couldn't delete the tool because provided ID wasn't found",
      });
    }
  },
};
