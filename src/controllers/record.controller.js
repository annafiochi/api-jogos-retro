import recordModel from '../models/record.model.js';


class RecordController {
    async findAll(req, res) {
        try {
            const records = await recordModel.findAll();

            return res.status(200).json(records);
        } catch (error) {
            console.error("Error finding all records", error);
            return res.status(500).json({ error: "Error finding all records" });
        }
    }

    async create (req, res) {
        try {
            const {score, screenShot, gameId, userId} = req.body;

            // Validação básica
            if (!score || !screenShot || !gameId || !userId) {
                return res.status(400).json({ error: "score, screenShot, userId and gameId fields are required" });
            }
            const data = { 
            score,
            screenShot,
            userId,
            gameId,

         };

         const newRecord = await recordModel.create(data);


         return res.status(201).json({
            message: "record created successfully created duolingo is singing",
            newRecord,
         });
        } catch (error) {
            console.error("Error creating record", error);
        }
    }
}


export default new RecordController();