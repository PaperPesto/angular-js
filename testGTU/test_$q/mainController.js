angular.module('test.q', []).controller('mainController', ['$scope', '$http', '$q', 'testService', function ($scope, $http, $q, TestService) {

    $scope.title = 'Testing $q...';

    let urlsArray = [
        'http://localhost:3000/dev/getRandomName',
        'http://localhost:3000/dev/getRandomName',
        'http://localhost:3000/dev/getRandomName'
    ];

    TestService.getDataAsync(urlsArray).then(success, error, notify);
}]);

angular.module('test.q').factory('testService', function($q, $http, $timeout){
    return {
        getData: function() {
            let deferred = $q.defer();

            let callArray = [
                $http.get('http://localhost:3000/dev/getRandomName'),
                $http.get('http://localhost:3000/dev/getRandomName'),
                $http.get('http://localhost:3000/dev/getRandomName')
            ];

            // Workaround hack
            // https://www.bennadel.com/blog/2800-forcing-q-notify-to-execute-with-a-no-op-in-angularjs.htm
            deferred.promise.then(null, null, angular.noop);

            callArray.forEach(call => {
                //console.log('inside call');

                call
                    .success(function (success) {
                        deferred.notify(success);
                    })
                    .error(function (data, status) {
                        deferred.reject(data);
                    });
            });

            //console.log('after call');
            
            $timeout(function(){deferred.resolve('fatto', callArray.length)});

            return deferred.promise;
        },
        getDataAsync: function(urlsArray) {
            let deferred = $q.defer();

            // Workaround hack
            // https://www.bennadel.com/blog/2800-forcing-q-notify-to-execute-with-a-no-op-in-angularjs.htm
            deferred.promise.then(null, null, angular.noop);

            let resultArray = [];

            urlsArray.forEach(async function(url) {

                let call = $http.get(url);

                try {
                    let start = new Date().getTime();
                    console.log('before async');
                    let response = await call;
                    console.log('after async');
                    let stop = new Date().getTime();

                    let middleInfo = {
                        url: url,
                        response: response,
                        deltaTime: stop - start
                    };

                    resultArray.push(middleInfo);
                    deferred.notify(middleInfo);
                }
                catch(err){
                    deferred.reject(err);
                }

            });

            console.log('resultArray', resultArray);

            let finalInfo = {
                totalTime: resultArray.reduce((a, c) => a + c.deltaTime, 0),
                urls: urlsArray.length,
                results: resultArray
            };
            
            $timeout(function(){deferred.resolve(finalInfo)});

            return deferred.promise;
        }
    }
});


success = (data) => console.log('success', data);
error = (data) => console.log('error', data);
notify = (data) => console.log('notify', data);