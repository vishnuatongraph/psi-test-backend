const dbContext = require("../models");
const Tasks = dbContext.Tasks;
const Sequelize = require('sequelize');
const Op = Sequelize.Op

exports.create = async (req, res) => {
    try {
        await Tasks.create(req.body)
            .then((data) => {
                res.status(200).json(data)
            })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.findAll = async (req, res) => {
    try {
        const {query, id} = req.query
        let data;
        if(query == '' || !query) {
            data = await Tasks.findAll({
                where: {user_id: id},
                order: [
                    ['id', 'DESC']
                ],
            })
        } else {
            data = await Tasks.findAll({
                where: {
                    name: { [Op.like]: `%${query}%` },
                    user_id: id
                    // level: { [Op.like]: `%${search}%` }
                },
                order: [
                    ['id', 'DESC']
                ],
            })
        }
        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

exports.findById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Tasks.findOne({
            where: { id }
        });
        return res.status(200).json({ data });
    }
    catch (err) {
        return res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params
        let payload = req.body
        console.log(id, payload)
        const [count, data] = await Tasks.update(payload, {
            where: { id }, returning: true, plain: true
        });
        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params
        await Tasks.destroy({
            where: { id }
        });
        return res.status(200).json("Record deleted")
    }
    catch (err) {
        return res.status(500).json(err)
    }
}