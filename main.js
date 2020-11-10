var pizzaarry=["mushroom pizza","Vegetable pizza","Pizza candyland","PIzza fruit"];
function getmenu(){
    var display=[];
    for(var i=0; i<pizzaarry.length;i++){
        display.push("<h4> "+pizzaarry[i]+"</h4>");
    }
    var removecommas=display.join(" ");
document.getElementById("menu").innerHTML=removecommas;
}
function add_item(){
    var newpizza=document.getElementById("add_item").value;
    pizzaarry.push(newpizza);
    document.getElementById("add_item").value="";
}