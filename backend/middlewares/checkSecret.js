function checkSecret(req, res, next) {
    if (req.headers['x-secret-key'] !== process.env.SECRET_KEY) {
        return res.status(403).json({ error: 'Forbidden' });
    }
    next();
}

module.exports = checkSecret;
