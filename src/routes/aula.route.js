import express from 'express';

const router = express.Router();

router.get('/aulas', (req, res, next) => {
  res.json([]);
});

export default router;
