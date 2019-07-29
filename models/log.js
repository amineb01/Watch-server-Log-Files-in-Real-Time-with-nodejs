

const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({

    method: {
        type: String,
        required: false
    },
    path: {
        type: String,
        required: false

    },
    controller: {
        type: String,
        required: false
    },
    action: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false

    },
    duration: {
        type: String,
        required: false

    },
    view: {
        type: String,
        required: false

    },
    // db: {
    //     type: String,
    //     required: false

    // },
    company: {
        type: String,
        required: false

    },
    ip: {
        type: String,
        required: false

    },
    request_time: {
        type: String,
        required: false

    }
    
})

const Log = mongoose.model('log', logSchema);

module.exports.Log=Log;
