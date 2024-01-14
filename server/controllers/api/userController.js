const User = require('../../data/User');

const getUserByUsername = async (req, res) => {
    const username = req.params.username;
    if (!username) return res.status(400).json({ 'message': 'username is required' });
    try {
        const foundUser = await User.findOne({username: username}).exec();
        if (!foundUser) res.status(404);
        const user = foundUser.username;
        const completed = foundUser.completed;
        res.json({ user, completed });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { getUserByUsername };