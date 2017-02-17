var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtil = require("react-addons-test-utils");

var Clock = require("Clock");

describe("Clock", () =>{
    it("should exist", () =>{
        expect(Clock).toExist();
    });

    describe("render", () => {
        it("it should render clock to output", () => {
            var clock = TestUtil.renderIntoDocument(<Clock totalSeconds={62}/>);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find(".clock-text").text();

            expect(actualText).toBe("01:02");
        });
    });


    describe("formateSconds", () =>{
        it("should format seconds", ()=> {
            var clock = TestUtil.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var expected= "10:15";
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it("should format seconds when min/sec are less then 10", ()=> {
            var clock = TestUtil.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected= "01:01";
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
});