const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    domain: {
        type: String,
        required: [true, 'Please add a domain']
    },
    proof: {
        type: String,
        required: [true, 'Please add proof']
    }
});

const languageSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    proof: {
        type: String,
        required: [true, 'Please add proof']
    }
});

const psSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    }
});

const certificateSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    domain: {
        type: String,
        required: [true, 'Please add a domain']
    },
    proof: {
        type: String,
        required: [true, 'Please add proof']
    }
});

const clanguageSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    proof: {
        type: String,
        required: [true, 'Please add proof']
    }
});

const achivementSchema = mongoose.Schema({
    eventname: {
        type: String,
        required: [true, 'Please add an event name']
    },
    proof: {
        type: String,
        required: [true, 'Please add proof']
    }
});

const project = mongoose.model('project', projectSchema);
const language = mongoose.model('language', languageSchema);
const ps = mongoose.model('ps', psSchema);
const certificate = mongoose.model('certificate', certificateSchema);
const clanguage = mongoose.model('clanguage', clanguageSchema);
const achivement = mongoose.model('achivement', achivementSchema);

module.exports = { project, language, ps, certificate, clanguage, achivement };
 







