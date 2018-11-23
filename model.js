var Model = {
    login(appId, perms) {
        return new Promise(function (resolve, reject) {
            VK.init({
                apiId: appId
            });

            VK.Auth.login(function (response) {
                if (response.session) {
                    resolve(response);
                } else {
                    reject(new Error('Не удалось авторизоваться'));
                }
            }, perms);
        });
    },
    callApi(method, params) {
        return new Promise(function (resolve, reject) {
            VK.api(method, params, function (response) {
                if (response.error) {
                    reject(new Error(response.error.error_msg));
                } else {
                    resolve(response.response);
                }
            });
        });
    },
    getUser() {
        return this.callApi('users.get', {
            name_case: 'gen',
            v: '5.87'
        });
    },
    getFriends() {
        return this.callApi('friends.get', {
            fields: 'photo_100',
            v: '5.87'
        });
    },
    getNews() {
        return this.callApi('newsfeed.get', {
            filters: 'post',
            count: 20,
            v: '5.87'
        });
    }
};

// задача - получение данных