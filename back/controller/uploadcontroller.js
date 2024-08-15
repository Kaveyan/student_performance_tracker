const { project, language, ps, certificate, clanguage, achivement } = require('../model/upload');

const uploadproject = async (req, res) => {
    const { title, description, domain, proof } = req.body;
    try {
        const newProject = await project.create({ title, description, domain, proof });
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const uploadlanguage = async (req, res) => {
    const { name, proof } = req.body;
    try {
        const newLanguage = await language.create({ name, proof });
        res.status(201).json(newLanguage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const uploadps = async (req, res) => {
    const { name } = req.body; // Corrected to match schema
    try {
        const newPs = await ps.create({ name });
        res.status(201).json(newPs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const uploadcertificate = async (req, res) => {
    const { title, domain, proof } = req.body;
    try {
        const newCertificate = await certificate.create({ title, domain, proof });
        res.status(201).json(newCertificate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const uploadclanguage = async (req, res) => {
    const { name, proof } = req.body;
    try {
        const newClanguage = await clanguage.create({ name, proof });
        res.status(201).json(newClanguage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const uploadachivement = async (req, res) => {
    const { eventname, proof } = req.body;
    try {
        const newAchivement = await achivement.create({ eventname, proof });
        res.status(201).json(newAchivement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { uploadachivement, uploadcertificate, uploadclanguage, uploadlanguage, uploadproject, uploadps };
