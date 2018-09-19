const api = function() {

    this.returnFriends = function(app, friends) {
        app.get("/api/friends", function(req, res) {
            res.json(friends);
        });
    },

    this.postNewFriend = function(app, friends) {
        app.post("/api/friends", function(req, res) {
            var newFriend = req.body;
            var friendsTotals = [];
            var userTotal;
            var friendMatch;

            // Add total value of scores arrays
            const getTotalScore = function(array) {
                var sum = 0;
                array.forEach(function(element) {
                    sum += parseInt(element);
                });
                return sum;
            };

            // get array of the difference from (friends scores - user score)
            const getFriendsListDifference = function() {
                friends.forEach(function(element) {
                    friendsTotals.push(Math.abs(getTotalScore(element.scores) - userTotal));
                });
            }

            // Compare scores from friends with users score & return closest diference
            const getFriendMatch = function() {
                var closestMatch = friendsTotals[0];

                friendsTotals.forEach(function(friendScore) {
                    if (closestMatch > friendScore) {
                        closestMatch = friendScore;
                    }
                });
                friendMatch = friends[friendsTotals.indexOf(closestMatch)];
            };

            userTotal = getTotalScore(newFriend.scores);
            getFriendsListDifference();
            getFriendMatch();
            
            console.log(friendsTotals);
            console.log(userTotal);
            console.log(friendMatch);
            
            friends.push(newFriend);

            //
            res.send(friendMatch);
        })
    }
}

module.exports = api;