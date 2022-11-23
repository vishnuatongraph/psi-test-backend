const dbContext = require("../models");
const Users = dbContext.Users;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.create = async (req, res) => {
  try {
    const { id, name } = req.body;
    if (!id || !name) {
      return res.status(204).json("Id and name can not be empty!");
    }
    let whereObj = {
      id,
      name,
    };
    const [data, created] = await Users.findOrCreate({
      where: whereObj,
      defaults: req.body,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};


exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Users.findOne({
      where: { id },
    });
    return res.status(200).json({ data });
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    let payload = req.body;
    const [count, data] = await Users.update(payload, {
      where: { id },
      returning: true,
      plain: true,
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.destroy({
      where: { id },
    });
    return res.status(200).json("Record deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
};
