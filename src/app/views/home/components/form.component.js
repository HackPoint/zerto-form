'use strict';

(function () {
    var component = {
        controllerAs: '$email',
        template: `
            <div flex layout="row" layout-align="center center">
                <div class="md-whiteframe-z2" flex-sm="100" flex-gt-sm="90" flex-gt-md="70" flex-gt-lg="50">
                    <md-content class="md-padding">
                        <form name="myForm" data-ng-submit="$email.addToList()">
                            <md-input-container flex flex-gt-md-grow>
                                <label>Enter Email:</label>
                                <input type="email" id="email" name="email" ng-required="true" 
                                ng-model="$email.person.email" class="input-email"  layout-fill="layout-fill">
                        
                                <div ng-messages="myForm.name.$error">
                                    <div ng-message="required">Email is required</div>
                                </div>
                            </md-input-container>
                        
                            <md-button type="submit" class="md-raised md-primary"
                                       ng-disabled="!myForm.$valid"
                                       ng-class="{'md-raised md-hue-1': (myForm.$dirty && myForm.$valid) }"
                                       aria-label="Send">Send
                            </md-button>
                        </form>
                    </md-content>
                </div>
            </div>
        `,
        controller: ['loggerService', '$log', function (logService, $log) {
            var _this = this;
            _this.person = {};

            this.addToList = function () {
                $log.info('adding to list');
                $log.debug(_this.person);
                logService.add(_this.person);
                _this.reset();
            };

            this.reset = function () {
                $log.warn('reset inputs');
                _this.person = {
                    email: ''
                };
            }
        }]
    };

    angular.module('zerto-app').component('emailForm', component);
})();