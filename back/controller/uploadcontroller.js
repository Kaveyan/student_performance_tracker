const { project, language, ps, certificate, clanguage, achivement } = require('../model/upload');
const authMiddleware = require('../middleware/authMiddleware');
const { Faculty } = require('../model/userModel');
// Ensure authconst { Faculty } = require('../model/userModel');Middleware is applied to these routes to set req.userId

const uploadproject = async (req, res) => {
    const { title, description, domain, proof } = req.body;
    const userId = req.userId; // From auth middleware

    try {
        const newProject = await project.create({ userId, title, description, domain, proof });
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const uploadlanguage = async (req, res) => {
    const { name, proof } = req.body;
    const userId = req.userId; 

    try {
        const newLanguage = await language.create({ userId, name, proof });
        res.status(201).json(newLanguage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const uploadps = async (req, res) => {
    const { name } = req.body;
    const userId = req.userId; 
    try {
        const newPs = await ps.create({ userId, name });
        res.status(201).json(newPs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const uploadcertificate = async (req, res) => {
    const { title, domain, proof } = req.body;
    const userId = req.userId; // From auth middleware

    try {
        const newCertificate = await certificate.create({ userId, title, domain, proof });
        res.status(201).json(newCertificate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const uploadclanguage = async (req, res) => {
    const { name, proof } = req.body;
    const userId = req.userId; // From auth middleware

    try {
        const newClanguage = await clanguage.create({ userId, name, proof });
        res.status(201).json(newClanguage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const uploadachivement = async (req, res) => {
    const { eventname, proof } = req.body;
    const userId = req.userId; // This should now be correctly set by authMiddleware
  
    try {
      const newAchivement = await achivement.create({ userId, eventname, proof });
      res.status(201).json(newAchivement);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

const list = async (req, res) => {
    const userId = req.userId; // From auth middleware

    try {
        const [projectCount, languageCount, psCount, certificateCount, clanguageCount, achivementCount] = await Promise.all([
            project.countDocuments({ userId }),
            language.countDocuments({ userId }),
            ps.countDocuments({ userId }),
            certificate.countDocuments({ userId }),
            clanguage.countDocuments({ userId }),
            achivement.countDocuments({ userId })
        ]);

        res.json({
            projects: projectCount,
            languages: languageCount,
            ps: psCount,
            certifications: certificateCount,
            communication: clanguageCount,
            achievements: achivementCount
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
const getFacultyDomainData = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.userId).select('domain');
    if (!faculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }

    let data;
    switch (faculty.domain) {
      case 'language':
        data = await language.find().populate('userId', 'firstName roleNumber'); // Fetch language data with user info
        break;
      case 'project':
        data = await project.find().populate('userId', 'firstName roleNumber'); // Fetch project data with user info
        break;
      case 'achievement':
        data = await achivement.find().populate('userId', 'firstName roleNumber'); // Fetch achievement data with user info
        break;
      case 'communication language':
        data = await clanguage.find().populate('userId', 'firstName roleNumber'); // Fetch communication language data with user info
        break;
      case 'certificate':
        data = await certificate.find().populate('userId', 'firstName roleNumber'); // Fetch certificate data with user info
        break;
      default:
        return res.status(400).json({ message: 'Invalid domain' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching domain-specific data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { uploadachivement, uploadcertificate, uploadclanguage, uploadlanguage, uploadproject, uploadps, list,getFacultyDomainData };

