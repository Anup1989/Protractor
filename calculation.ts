import {browser, element,by} from "protractor"

describe("Learn Element Basics",function(){

    function addition(a,b,c){

        let firstinput = element(by.model('first')).sendKeys(a);
    let secondinput =  element(by.model('second')).sendKeys(b);
   // let sum = firstinput + secondinput;
   //    console.log("Sum of two number is :"+sum)


       element.all(by.tagName("option")).each(function(item){
           item.getAttribute("value").then(function(values){

            console.log(values);
            if(values == c){
                item.click();
            }

           })
       })
    element(by.id('gobutton')).click();


    }

    it("should open the site",function(){

   let url = browser.get("http://juliemr.github.io/protractor-demo/");
    console.log("Website has been launched"+url);
    //    browser.sleep(5000);
    
  //  expect(element(by.css("h2[class = 'ng-binding']")).getText()).toBe(totalsum);

   // element(by.repeater("result in memory"))).element(by.css("td:nth-child"))

   addition(1,2,"ADDITION");
   addition(2,2,"DIVISION");
   addition(3,2,"MULTIPLICATION");
   addition(3,2,"SUBTRACTION");
  // addition(4,2);

   element.all(by.repeater("result in memory")).each(function(item){
    item.element(by.css("td:nth-child(3)")).getText().then(function(text){
console.log(text);
    })
  

   element.all(by.repeater("result in memory")).count().then(function(counter){
    console.log("Count of rows are : " + counter )
   })

  
   })

   let result = element(by.css("h2[class ='ng-binding']")).getText().then(function(text){
   console.log("Sum of number is : "+ result);
   

})


})

})

    