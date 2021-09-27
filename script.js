// using moment for a day and time
moment(Date)
console.log(moment())
$('#currentDay').text(moment().format('ddd MMMM Do YYYY, h:mm a'))
//moment current time
var currentTime = moment()
// Returns current time to the nearest hour - 12:30 becomes 12:00
currentTime = currentTime.startOf('hour')
// Calculates the start of day + 9 to return 9 am
var beforeTime = moment().startOf('day').add(9, 'hours')

//9 AM
var time1 = beforeTime.add(0, 'h')
// var time1 = beforeTime;
time1 = time1.format('hh:mm A')
// Populates time formula into html
$('.block1').text(time1)
//10:00 AM
var time2 = beforeTime.add(1, 'h')
time2 = time2.format('hh:mm A')
// Populates time formula into html
$('.block2').text(time2)
//11:00 Am
var time3 = beforeTime.add(1, 'h')
// var time1 = beforeTime;
time3 = time3.format('hh:mm A')
// Populates time formula into html
$('.block3').text(time3)
//12:00 Pm
var time4 = beforeTime.add(1, 'h')
// var time1 = beforeTime;
time4 = time4.format('hh:mm A')
// Populates time formula into html
$('.block4').text(time4)
// 1:00 pm
var time5 = beforeTime.add(1, 'h')
// var time1 = beforeTime;
time5 = time5.format('hh:mm A')
// Populates time formula into html
$('.block5').text(time5)
// 2:00 pm
var time6 = beforeTime.add(1, 'h')
// var time1 = beforeTime;
time6 = time6.format('hh:mm A')
// Populates time formula into html
$('.block6').text(time6)
// 3:00 pm
var time7 = beforeTime.add(1, 'h')
// var time1 = beforeTime;
time7 = time7.format('hh:mm A')
// Populates time formula into html
$('.block7').text(time7)
// 4:00 pm
var time8 = beforeTime.add(1, 'h')
// var time1 = beforeTime;
time8 = time8.format('hh:mm A')
// Populates time formula into html
$('.block8').text(time8)
// 5:00 pm
var time9 = beforeTime.add(1, 'h')
// var time1 = beforeTime;
time9 = time9.format('hh:mm A')
// Populates time formula into html
$('.block9').text(time9)
