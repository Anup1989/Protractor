"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Learn Element Basics", function () {
    function addition(a, b, c) {
        let firstinput = protractor_1.element(protractor_1.by.model('first')).sendKeys(a);
        let secondinput = protractor_1.element(protractor_1.by.model('second')).sendKeys(b);
        // let sum = firstinput + secondinput;
        //    console.log("Sum of two number is :"+sum)
        protractor_1.element.all(protractor_1.by.tagName("option")).each(function (item) {
            item.getAttribute("value").then(function (values) {
                console.log(values);
                if (values == c) {
                    item.click();
                }
            });
        });
        protractor_1.element(protractor_1.by.id('gobutton')).click();
    }
    it("should open the site", function () {
        let url = protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        console.log("Website has been launched" + url);
        //    browser.sleep(5000);
        //  expect(element(by.css("h2[class = 'ng-binding']")).getText()).toBe(totalsum);
        // element(by.repeater("result in memory"))).element(by.css("td:nth-child"))
        addition(1, 2, "ADDITION");
        addition(2, 2, "DIVISION");
        addition(3, 2, "MULTIPLICATION");
        addition(3, 2, "SUBTRACTION");
        // addition(4,2);
        protractor_1.element.all(protractor_1.by.repeater("result in memory")).each(function (item) {
            item.element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            });
            protractor_1.element.all(protractor_1.by.repeater("result in memory")).count().then(function (counter) {
                console.log("Count of rows are : " + counter);
            });
        });
        let result = protractor_1.element(protractor_1.by.css("h2[class ='ng-binding']")).getText().then(function (text) {
            console.log("Sum of number is : " + result);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jYWxjdWxhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4QztBQUU5QyxRQUFRLENBQUMsc0JBQXNCLEVBQUM7SUFFNUIsU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBRW5CLElBQUksVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLFdBQVcsR0FBSSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsc0NBQXNDO1FBQ3RDLCtDQUErQztRQUczQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE1BQU07Z0JBRTlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUcsTUFBTSxJQUFJLENBQUMsRUFBQztvQkFDWCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2hCO1lBRUYsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtRQUNMLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBR25DLENBQUM7SUFFRCxFQUFFLENBQUMsc0JBQXNCLEVBQUM7UUFFM0IsSUFBSSxHQUFHLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLDBCQUEwQjtRQUU1QixpRkFBaUY7UUFFaEYsNEVBQTRFO1FBRTVFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0IsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0IsaUJBQWlCO1FBRWhCLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUE7WUFHSCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxPQUFPO2dCQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLE9BQU8sQ0FBRSxDQUFBO1lBQy9DLENBQUMsQ0FBQyxDQUFBO1FBR0YsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRSxNQUFNLENBQUMsQ0FBQztRQUc5QyxDQUFDLENBQUMsQ0FBQTtJQUdGLENBQUMsQ0FBQyxDQUFBO0FBRUYsQ0FBQyxDQUFDLENBQUEifQ==