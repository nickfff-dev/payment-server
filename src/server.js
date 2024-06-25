import express from 'express';
import routingController from './routes';

const app = express();
const PORT = 5000;
app.use(express.json());

routingController(app);
app.listen(PORT, () => {}, console.log(`Server is running on port ${PORT}`));

export default app;
module.exports = app;