const User = require ('./User');
const Post = require ('./Post');
const Zone = require ('./Zone');

Post.belongsTo(User, {
    foreignKey:'userId'
})
Post.belongsTo(Zone, {
    foreignKey:'zoneId'
})


module.exports = { User , Zone , Post};