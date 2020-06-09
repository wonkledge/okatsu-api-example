import express from 'express'
import getAll from "./books/getAll";
import getAllFailed from "./books/getAllFailed";
import getAllWithMapping from "./books/getAllWithMapping";
import getById from "./books/getById";

let router = express.Router();
router.get('/', (req, res) => {
    res.json({ data: 'coucou'});
})
router.get('/books/success', getAll);
router.get('/books/successWithMapping', getAllWithMapping);
router.get('/books/failed', getAllFailed);

router.get('/books/:id', getById);

export default router;
