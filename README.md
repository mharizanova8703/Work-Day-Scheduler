
# Work-Day-Scheduler
# Description
## Screenshot
<img width="1093" alt="Screen Shot 2021-09-27 at 2 08 23 PM" src="https://user-images.githubusercontent.com/85656320/134962283-cffce6d3-6616-46b5-bc14-7d818eb5b87f.png">

## Demo video
https://user-images.githubusercontent.com/85656320/134960534-efa1e7bf-6090-45a0-a937-0dde4588fe53.mov


## Code snippet of a challenging  code
```swift
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});
```
