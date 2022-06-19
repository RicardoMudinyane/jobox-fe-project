// window.onload = loadData;

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("addBtn").style.display = "none";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("addBtn").style.display = "block";
}

// const listContracts = document.getElementById('allContracts');
var allOfThem = [];

function createFunc() {

    const clientname = document.getElementById('clientname').value;
    const servicename = document.getElementById('service_name').value;

    const entry = document.createElement('ul');

    entry.appendChild(document.createTextNode(clientname));
    listContracts.appendChild(entry);


    // listContracts.appendChild(entry);

    console.log("Added");

    console.log(listContracts);
}   

function tmpFunc() {

    const clientname = document.getElementById('clientname').value;
    const servicename = document.getElementById('service_name').value;

    const entry = document.createElement('div');

    entry.appendChild(document.createTextNode("Add"));
    document.getElementById('allContracts').appendChild(entry);


    allOfThem.push({
        _client: "Name",
        _description: "Here"
    });

    console.log("Added");

    console.log(allOfThem);
}  
var temperatures = [59.2, 60.1, 63, 65, 62];
var html_ = "";

function loadData(){
    temperatures.map(function (t, i) {
        return 'The temperature at ' + i + ' was ' + t
    });
    html_ += '<div class="contractList mb-4">' + "another" + '</div>';
    
    document.getElementById('all-contracts').innerHTML = html_
    // '<li>' + temperatures.join('</li><li>') + '</li>'
}

function testFunc(){
    temperatures.push(40.1);
    loadData();
}