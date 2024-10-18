


var el = document.getElementById("submit1");
el.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm(); 
});

function addOrUpdateRow(label, value) {
    var table = document.getElementById('tab');
    var rows = table.getElementsByTagName('tr');
    var rowExists = false;
// if row already present!!! just update the valueee,,,
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === label) {
            rows[i].cells[1].textContent = value;
            rowExists = true;
            break;
        }
    }
// else create a new row!!!!!
    if (!rowExists) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = label;
        cell2.textContent = value;
    }
}
var reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    document.querySelector("#tab").innerHTML = "";
});

document.getElementById("nam").addEventListener("input", () => {
    addOrUpdateRow('nametab', document.getElementById("nam").value.trim());
});
document.getElementById("pass").addEventListener("input", () => {
    addOrUpdateRow('password', document.getElementById("pass").value.trim());
});
document.getElementById("email2").addEventListener("input", () => {
    addOrUpdateRow('email1', document.getElementById("email2").value.trim());
});
document.getElementById("address1").addEventListener("input", () => {
    addOrUpdateRow('address', document.getElementById("address1").value.trim());
});
document.getElementById("dot1").addEventListener("input", () => {
    addOrUpdateRow('dat', document.getElementById("dot1").value.trim());
});

document.getElementById("pay").addEventListener("input", () => {
    addOrUpdateRow('payment1', document.getElementById("pay").value);
});

var mountain = document.getElementById('mountain');
var beaches = document.getElementById('beaches');

mountain.addEventListener("change", () => {
    var places2 = [];
    if (mountain.checked) {
        places2.push("mountain");
    }
    if (mountain.checked) {
        places2.push("mountain");
    }
   
    addOrUpdateRow('places1', places2.join(", "));
});

var femaleElement = document.getElementById('mal');
var maleElement = document.getElementById('female');

femaleElement.addEventListener("change", () => {
    addOrUpdateRow('Gender', femaleElement.checked ? "female" : maleElement.checked ? "mal" : "");
});
maleElement.addEventListener("change", () => {
    addOrUpdateRow('Gender', femaleElement.checked ? "female" : maleElement.checked ? "mal" : "");
});


var pack1=document.getElementById("package1");
var pack2=document.getElementById("package2");
pack1.addEventListener("change", ()=>{
    addOrUpdateRow('packages1',pack1.checked ? "package1" : pack2.checked ? "package2":"");
});
pack2.addEventListener("change", ()=>{
    addOrUpdateRow('packages1',pack1.checked ? "package1" : pack2.checked ? "package2":"");
});



