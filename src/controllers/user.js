
const Homepage = function(req, res) {
    return res.status(200).json({
        message: "Homepage"
    })
}

module.exports = Homepage;