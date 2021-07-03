var customerreview=["Excellent work by the company and team","Solved our automization problem very accuretly","Hat's off to their team member",
                    "It was nice, working with them","Must Approch them for automization","Great technology and solutions"];
var customername=["Aeda Shelby","Ratan Tata","Freeni Throne","Vijaynath Patel","Lana Sekh","Miachle Gray"];
var customercompany=["Shelby Limited,London","Tata and Son's,India","Throne Limited,Japan",
                    "Zydus Group,India","GoodWill Limited,UAE","Gary Group of Companies,Italy"];
function customer(id){
    document.getElementById("review").innerHTML=customerreview[id];
    document.getElementById("customername").innerHTML=customername[id];
    document.getElementById("customercompany").innerHTML=customercompany[id];
}