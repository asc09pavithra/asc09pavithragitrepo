console.log("external script");
for(i=0;i<3;i++)
    console.log(i);

function
internalScript()
{
    console.log("internal script");
}
console.log("*");
internalScript();

function html(){
    var qrs = document.getElementById("abc");
    qrs.innerHTML ='<iframe width="633" height="351" src="https://www.youtube.com/embed/Ki_0iES2cGI" title="Learn HTML video in 2 minutes 🎥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
}

function css(){
    var klm = document.getElementById("abc");
    klm.innerHTML ='<iframe width="633" height="351" src="https://www.youtube.com/embed/1PnVor36_40" title="Learn CSS in 20 Minutes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
}


document.getElementById("myform").addEventListener("submit",function(event){
             event.preventDefault();

    var nam = document.getElementById("nam").value;
    document.getElementById("nametab").innerHTML = nam;

    var pwd = document.getElementById("pass").value;
    document.getElementById("password1").innerHTML = pwd;

    var email = document.getElementById("email2").value;
    document.getElementById("email1").innerHTML = email;

    var adrs = document.getElementById("address").value;
    document.getElementById("address1").innerHTML = adrs;

    var date1 = document.getElementById("dat").value;
    document.getElementById("dot1").innerHTML = date1;

    var travelplaces=[];
    if (document.getElementById("mountain").checked) travelplaces.push("mountain");
    if (document.getElementById("beaches").checked) travelplaces.push("beaches");
  document.getElementById("places1").innerHTML=travelplaces.join(",");

    var gender="";
    var mal=document.getElementById("male");
    var femal=document.getElementById("fem");
    if(mal.checked){
        gender="male";
    }

    else if(femal.checked)
    {
        gender="Female";
    }
    document.getElementById("gen").innerHTML=gender;

    var packages="";
    var pack1=document.getElementById("package1");
    var pack2=document.getElementById("package2");

    if(pack1.checked){
        packages="2days 5000";
    }
     
    else if(pack2.checked){
        packages="3days 7000";
    }
    document.getElementById("packages1").innerHTML=packages;


    var payment = document.getElementById("pay").value;
    document.getElementById("payment1").innerHTML = payment;
}
)






