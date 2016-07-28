describe('logs service tracker', function () {
    var loggerService;

    beforeEach(angular.mock.module('zerto-app'));

    beforeEach(inject(function (_loggerService_) {
        loggerService = _loggerService_;
    }));

    it('should exist', function () {
        expect(loggerService).toBeDefined();
    });

    describe('.logs', function () {
        it('should exist', function () {
            expect(loggerService.logs).toBeDefined();
        });
    });


    describe('.add() && .remove()', function () {
        it('should be adding logs', function () {
            loggerService.add('some@email.com');
            expect(loggerService.logs.length).toBeGreaterThan(0);
        });


        it('should be removing logs by index', function () {
            loggerService.reset();
            loggerService.add('some@email.com');
            loggerService.remove(0);
            expect(loggerService.logs.length).toEqual(0);
        });
    });
});