module.exports = (req, res, next) => {
    if (!req.body.userId) return res.status(400).send({ error: 'userId is required' });
    if (!req.body.value) return res.status(400).send({ error: 'value is required' });
    if (typeof req.body.value !== 'number') return res.status(400).send({ error: 'value must be a number' });
    if (typeof req.body.userId !== 'number') return res.status(400).send({ error: 'userId must be a number' });
    next();
}