'use strict';
(function () {
    var service = function () {
        var data = [];
        var tracking = [];

        this.addItem = function (item) {
            data.push(item);
            tracking.push({action: 'add', data: item});
        };

        this.removeItem = function (index) {
            tracking.push({action: 'remove', data: data[index]});
            data.splice(index, 1);
        };


        return {
            add: this.addItem,
            remove: this.removeItem,
            data: data,
            logs: tracking
        }
    };
    angular.module('zerto-app').service('loggerService', service);
})();