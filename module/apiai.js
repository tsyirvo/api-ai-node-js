/*!
 * apiai
 * Copyright(c) 2015 http://api.ai/
 * MIT Licensed
 */

'use strict';

var util = require('util');


var TextRequest = require('./text_request').TextRequest;
var VoiceRequest = require('./voice_request').VoiceRequest;

var version = '20150415'

var language = 'en'

var hostname = 'api.api.ai'
var path = '/v1/query'

function createApplication(clientAccessToken, subscriptionKey, options) {
    var options = options || {};

    if (!clientAccessToken) {
        throw new Error('\'clientAccessToken\' cannot be empty.');
    }

    if (!subscriptionKey) {
        throw new Error('\'subscriptionKey\' cannot be empty.');
    }

    return new Application(clientAccessToken, subscriptionKey, options);
}

exports = module.exports = createApplication;

function Application (clientAccessToken, subscriptionKey, options) {
    var self = this;

    self.language = options.language || language;

    self.clientAccessToken = clientAccessToken;
    self.subscriptionKey = subscriptionKey;

    self.hostname = options.hostname || hostname;
    self.path = options.path || path;
    self.varsion = options.version || version;
};

Application.prototype.textRequest = function(query, options) {
    var self = this;
    var opt = options || {};

    return new TextRequest(self, query, opt);
};

Application.prototype.voiceRequest = function(options) {
    var self = this;
    var opt = options || {};

    return new VoiceRequest(self, opt);
};


