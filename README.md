
# Work-Day-Scheduler
 https://mharizanova8703.github.io/Work-Day-Scheduler/
# Description 
# This scheduler has the following features:
* A header with local time that updates live
* Seven Input Entries
* A Save button that saves items to local storage
* Attribute changes for hour by hour time tracking
* Gray is past the current hour
* Red is on the current hour
* Green is before the current hour

## The sheduler is build with:
  * Moment.js for local time, current time, and time conversion for individual hours
 * Appended text to HTML for hour time
 * If, if/else statement to compare time with the current time
 * Appended attributes for color current time
* An event listener for the save buttons to save to local storage
* Bootstrap layout (responcive design )

## Screenshot
<img width="1093" alt="Screen Shot 2021-09-27 at 2 08 23 PM" src="https://user-images.githubusercontent.com/85656320/134962283-cffce6d3-6616-46b5-bc14-7d818eb5b87f.png">

## Demo video
https://user-images.githubusercontent.com/85656320/134960534-efa1e7bf-6090-45a0-a937-0dde4588fe53.mov


## Code snippet of a challenging  code
``` swift
testTime();
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    // form - control
    $(".form" + x[i]).val(dataHour);
}

```

```swift
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});
```
