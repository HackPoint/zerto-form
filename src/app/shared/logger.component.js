'use strict';

(function () {
    var component = {
        controllerAs: '$logList',
        template: `
            <div ng-if="$logList.items.length > 0">
            <br>
            <div flex layout="row" layout-align="center center">
                <div class="md-whiteframe-z2" flex-sm="100" flex-gt-sm="90" flex-gt-md="70" flex-gt-lg="50">
                    <md-content class="md-padding">
                         <md-list>
                            <h2>Logs:</h2>
                            <md-list-item class="md-2-line" ng-repeat="item in $logList.items">
                                <div class="md-list-item-text">
                                    <h2>Action: {{item.action}}</h2>
                                    <p>{{item.data|json}}</p>
                                </div>
                                <md-divider ng-if="$logList.items.length > 0"></md-divider>
                            </md-list-item>
                        </md-list>
                     </md-content>
                    </div>
                </div>
            </div>
        `,
        controller: ['loggerService', '$log', '$scope', function (loggerService, $log, $scope) {
            var _this = this;
            this.items = [];

            $scope.$watch(function () {
                    return loggerService.logs;
                },
                function (data) {
                    $log.info('logs are added to list');
                    $log.debug(data);
                    _this.items = data;
                });

        }]
    };

    angular.module('zerto-app').component('logsList', component);
})();