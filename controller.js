var Controller = {
    friendsRoute() {
        return Model.getFriends().then(function (friends) {
            console.log(friends);
            results.innerHTML = View.render('friends', {
                list: friends.items
            });
        });
    },
    friendsOnlineRoute() {
        return Model.getFriends().then(function (friends) {
            results.innerHTML = View.render('friendsOnline', {
                list: friends.items
            });
        });
    },
    newsRoute() {
        return Model.getNews().then(function (news) {
            results.innerHTML = View.render('news', {
                list: news.items
            });
        });
    }
};

// задача - прослойка между model и view