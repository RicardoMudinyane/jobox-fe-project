// import dateFormat from 'dateformat';

window.onload = checkLisEmpty

var allOfThem = [];
var html_ = "";


// for opening and closing form
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("addBtn").style.display = "none";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("addBtn").style.display = "block";
}


// for creating contract
function createFunc() {

    var clientname = document.getElementById('clientname').value;
    var servicename = document.getElementById('service_name').value;
    var servicecost = document.getElementById('servicecost').value;
    var date1 = document.getElementById('datePicker1').value;
    var date2 = document.getElementById('datePicker2').value;

    // var _picker = Litepicker({
    //     element: date1,
    //     format: 'DD/MMMM/YYYY'
    // });

    // var date1 = new Date("01/01/2022");
    // var date2 = new Date("06/19/2022");
    // console.log(formatDate(date1));
    // console.log(formatDate(date2));

    allOfThem.push({
        _client: clientname,
        _description: servicename,
        _cost: servicecost,
        _startDate: date1,
        _endDate: date2,
        _period: monthDiff(date1, date2),
    });

    html_ += '<div class="contractList mb-4"><div class="d-flex justify-content-between"><div><b>' + clientname +'</b></div> <div>'+ monthDiff(date1, date2)+' Months </div></div></div>';

    document.getElementById('all-contracts').innerHTML = html_;
    
    document.getElementById('cotract-fields').reset();
    closeForm();

    console.log(allOfThem);
}   


function monthDiff(dateFrom, dateTo) {
    return dateTo.split("-")[1] - dateFrom.split("-")[1] + 
      (12 * (dateTo.split("-")[0] - dateFrom.split("-")[0]))
}
function checkLisEmpty(){
    if (allOfThem.length ==0){
        document.getElementById('all-contracts').innerHTML = '<div><h1>You do not have any contracts yet!</h1><h1></h1><h1> </h1><img src="assets/Contract.png" width="300" height="300"></img> </div>'
    }

}