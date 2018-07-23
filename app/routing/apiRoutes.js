const friendMaker = require("../data/friends.js")
let friend = new friendMaker()

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friend.showFriends())
    })

    app.post("/api/friends", function(req, res) {
        let newRequest = req.body

        let newFriend = new friendMaker(newRequest.name, newRequest.picture, newRequest.survey)

        newFriend.newFriend()

        res.send(newFriend.closestMatch)

    })


}