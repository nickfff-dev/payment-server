class AppController {
    static getStatus(req, res) {
        const status = {
            timestamp: Date(),
            status: "ok"
        };
        res.status(200).send(status)
    };
}

export default AppController;
module.exports = AppController;