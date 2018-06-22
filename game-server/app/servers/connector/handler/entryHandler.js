"use strict";
var ConnectorHandler = /** @class */ (function () {
    function ConnectorHandler(app) {
        this.app = app;
    }
    ConnectorHandler.prototype.entry = function (msg, session, next) {
        next(null, { code: 200, msg: 'game server is ok.' });
    };
    ConnectorHandler.prototype.publish = function (msg, session, next) {
        var result = {
            topic: 'publish',
            payload: JSON.stringify({ code: 200, msg: 'publish message is ok.' })
        };
        next(null, result);
    };
    ConnectorHandler.prototype.subscribe = function (msg, session, next) {
        var result = {
            topic: 'subscribe',
            payload: JSON.stringify({ code: 200, msg: 'subscribe message is ok.' })
        };
        next(null, result);
    };
    return ConnectorHandler;
}());
module.exports = function (app) {
    return new ConnectorHandler(app);
};
//# sourceMappingURL=entryHandler.js.map