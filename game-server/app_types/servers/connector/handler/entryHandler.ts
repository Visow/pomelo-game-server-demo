
class ConnectorHandler {

    protected app;

    constructor(app) {
        this.app = app;
    }

    public entry(msg, session, next) {
        next(null, {code: 200, msg: 'game server is ok.'});
    }

    public publish(msg, session, next) {
        var result = {
            topic: 'publish',
            payload: JSON.stringify({code: 200, msg: 'publish message is ok.'})
        };
      next(null, result);
    }

    public subscribe(msg, session, next) {
        var result = {
            topic: 'subscribe',
            payload: JSON.stringify({code: 200, msg: 'subscribe message is ok.'})
        };
      next(null, result);
    }
}

export = function(app) {
    return new ConnectorHandler(app);
}