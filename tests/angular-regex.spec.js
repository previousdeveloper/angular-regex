describe('Angular-Regex', function () {

    beforeEach(module('regex'));

    var regexServiceMock;

    beforeEach(inject(function (regexService) {
        regexServiceMock = regexService;
    }));

    describe('#init', function () {
        it('service init should be true', function () {

            var service = regexServiceMock.ex();

            expect(service).toBeDefined();
        });

        it('service type  should be object', function () {

            var service = regexServiceMock.ex();

            expect(typeof service).toEqual('object');

        });

        it('something', function () {

            var service = regexServiceMock.ex();

            testString = "";
            expect(!service.test(testString), "empty string doesn't have something");

            service.lastIndex = 0;
            testString = "a";
            expect(service.test(testString), "a is something");

        });

        it("anything", function () {
            var service = regexServiceMock.ex();
            var testString = "what";
            expect(service.test(testString), "Passes!");
        });

        it("anythingBut", function () {
            var service = regexServiceMock.ex().startOfLine().anythingBut("w");
            var testString = "what";
            expect(service.test(testString), "starts with w");
        });

        it("somethingBut", function () {
            var service = regexServiceMock.ex().somethingBut("a");
            var testString;

            testString = "";
            expect(!service.test(testString), "empty string doesn't have something");

            service.lastIndex = 0;
            testString = "b";
            expect(service.test(testString), "doesn't start with a");

            service.lastIndex = 0;
            testString = "a";
            expect(!service.test(testString), "starts with a");
        });


        it("startOfLine", function () {
            var service = regexServiceMock.ex().startOfLine().then("a");
            var testString;

            testString = "a";
            expect(service.test(testString), "Starts with a");

            service.lastIndex = 0;
            testString = "ba";
            expect(!service.test(testString), "Doesn't start with a");
        });

        it("endOfLine", function () {
            var service = regexServiceMock.ex().find("a").endOfLine();
            var testString;

            testString = "a";
            expect(service.test(testString), "Ends with a");

            service.lastIndex = 0;
            testString = "ab";
            expect(!service.test(testString), "Doesn't end with a");
        });

        it("maybe", function () {
            var service = regexServiceMock.ex().then("a").maybe("b");
            var testString;

            testString = "acb";
            expect(service.test(testString), "Maybe has a b after an a");

            service.lastIndex = 0;
            testString = "abc";
            expect(service.test(testString), "Maybe has a b after an a");
        });
    });
});