"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsMiddleware = MetricsMiddleware;
const prom_client_1 = require("prom-client");
// counter 
let counter = new prom_client_1.Counter({
    name: "http_number_of_requests",
    help: "number of http requsts",
    labelNames: ["method", "route", "status_code"]
});
// gauge
const activeUserGuage = new prom_client_1.Gauge({
    name: "active_user",
    help: "Number of Active user"
});
// histogram
const histogram = new prom_client_1.Histogram({
    name: "requst_time",
    help: "Duration of http request in ms",
    labelNames: ["method", "routes", "code"],
    buckets: [0.1, 1, 5, 10, 100]
});
function MetricsMiddleware(req, res, next) {
    // gauge logic increase when user visits the request
    activeUserGuage.inc();
    const startTime = Date.now();
    res.on('finish', () => {
        //counter logic
        counter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode
        });
        //histogram Logic
        const endTime = Date.now();
        const duration = startTime - endTime;
        histogram.observe({
            method: req.method,
            routes: req.route ? req.route.path : req.path,
            code: res.statusCode
        }, duration);
        // gauge logic decreses when user leaves / ends the request
        activeUserGuage.dec();
    });
    next();
}
