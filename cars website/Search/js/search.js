function searchfunction()
{
var search=document.getElementById("search");
var filter=search.value.toUpperCase();
var ul=document.getElementsByClassName("ul");
var li = document.getElementsByClassName("li");
var a, i, txtvalue;
for(i=0; i < li.length;i++)
{
a=li[i].getElementsByTagName("a")[0];
txtvalue=a.textContent;
if (txtvalue.toUpperCase().indexOf(filter)==-1)
{
li[i].style.display="none";
}
else
{
li[i].style.display="";
}
}
}
function swapStyleSheet(sheet){
document.getElementById('pagestyle').setAttribute('href', sheet);
}
function swapStyleSheet2(sheet){
document.getElementById('pagestyle').setAttribute('href', sheet);
}


