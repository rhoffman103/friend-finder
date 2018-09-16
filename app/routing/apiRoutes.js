const api = function() {

    this.returnFriends = function(app, friends) {
        app.get("/api/friends", function(req, res) {
            res.json(friends);
        });
    },

    this.postNewFriend = function(app, friends) {
        app.post("/api/friends", function(req, res) {
            var newFriend = req.body;
            newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
            friends.push(newFriend);
            res.json(newFriend);
        })
    }
}

module.exports = api;