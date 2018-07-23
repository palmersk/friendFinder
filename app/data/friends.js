let friends = [{
    "name": "Jim",
    "photo": "http://m5.paperblog.com/i/55/552543/how-the-hell-does-jim-carrey-do-it-L-NgAvhp.jpeg",
    "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
},

{
    "name": "Jack",
    "photo": "http://iconolo.gy/sites/default/files/jack37.jpg",
    "scores": [1, 3, 5, 4, 5, 1, 2, 5, 4, 1]
},

{
    "name": "Sally",
    "photo": "https://i.pinimg.com/236x/ed/8d/6d/ed8d6dfe49b5a67670aa3692d7c07e9c.jpg",
    "scores": [2, 1, 4, 4, 5, 1, 2, 5, 4, 1]
},

{
    "name": "Mary",
    "photo": "https://blogs-images.forbes.com/jimclash/files/2016/03/dawn_wells-14-640.jpg",
    "scores": [5, 4, 3, 2, 1, 1, 2, 3, 4, 5]
},

{
    "name": "Albert",
    "photo": "http://1.bp.blogspot.com/_IfHKdZwDktA/TCBXYbGlJKI/AAAAAAAABgY/e8Z7YecgZic/s1600/Famous+photo+of+Scientist+Albert+Einstein.jpg",
    "scores": [3, 2, 1, 5, 4, 5, 3, 4, 4, 2]
},

{
    "name": "Jessica",
    "photo": "https://koreaboo-cdn.storage.googleapis.com/2016/05/jessica-1.jpg",
    "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
}
]

function friendConstructor(name, picture, survey) {
this.friendObj = {
    "name": name,
    "photo": picture,
    "scores": survey
}

this.newFriend = function() {
    friends.push(this.friendObj);
    this.findMatch();
}

this.closestMatch;

this.showFriends = function() {
    return friends;
}

this.findMatch = function() {
    let currentBestMatch;
    let currentBestMatchScore = -1;

    for (let i in friends) {
        if (friends[i] != this.friendObj) {
            var newFriendBestMatch = calcFriendDifference(friends[i].scores, this.friendObj.scores);

            if (currentBestMatchScore >= 0) {
                if (newFriendBestMatch < currentBestMatchScore) {
                    currentBestMatch = friends[i];
                    currentBestMatchScore = newFriendBestMatch;
                }
            }
            else {
                currentBestMatch = friends[i];
                currentBestMatchScore = newFriendBestMatch;
            }
        }
    }
    this.closestMatch = currentBestMatch;
}
}

module.exports = friendConstructor;

let calcFriendDifference = function(arr1, arr2) {
totalDifference = 0;
for (let i in arr1) {
    totalDifference += Math.abs(arr1[i] - arr2[i]);
}
return totalDifference;
}