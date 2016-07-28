'use strict';

(function () {
    var component = {
        controllerAs: '$list',
        template: `
            <br ng-if="$list.emails.length > 0">
             <div flex layout="row" layout-align="center center">
                <div class="md-whiteframe-z2" flex-sm="100" flex-gt-sm="90" flex-gt-md="70" flex-gt-lg="50">
                    <md-content class="md-padding">
                         <md-list>
            
                            <md-list-item class="md-2-line" ng-repeat="item in $list.emails">
                                <div class="md-list-item-text">
                                    <h3>{{item.email}}</h3>
                                </div>
                                <md-divider ></md-divider>
                                <md-button class="md-warn md-raised md-hue-2"
                                    ng-click="$list.delete($index)">Delete</md-button>
                            </md-list-item>
                        </md-list>
                   </md-content>
                </div>
            </div>
        `,
        controller: ['$scope', '$log', 'loggerService', function ($scope, $log, loggerService) {
            var _this = this;
            this.emails = [];

            $scope.$watch(function () {
                    return loggerService.data;
                },
                function (data) {
                    $log.info('email is added to list');
                    $log.debug(data);
                    _this.emails = data;
                });

            this.delete = function ($index) {
                $log.info('email is removed from list by index: ' + $index);
                $log.debug(_this.emails[$index]);
                loggerService.remove($index);
            };
        }]
    };

    angular.module('zerto-app').component('list', component);
})();