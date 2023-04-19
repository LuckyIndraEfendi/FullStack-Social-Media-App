const Logs = (req, res, next) => {
    console.log(`Terjadi Logs ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}

module.exports = Logs