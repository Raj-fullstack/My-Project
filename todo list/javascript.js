var count = 1;
var delete_key;
function addbtn(){

  var input_result=document.getElementsByClassName("inputvalue")[0].value;
  if(input_result != " "){
  list(input_result);

  }
}
function cancel_btn(){
   document.getElementsByClassName("delete-wrapper")[0].style.display="none"

}
function Delete_btn(){

  document.querySelector("[data-key="+delete_key+"]").remove();
  document.getElementsByClassName("delete-wrapper")[0].style.display="none";
  localStorage.removeItem(delete_key);


}
window.onload=function(){
  // console.log(this.localStorage);
  var local_storage = this.localStorage;
  // console.log(local_storage);
  Object.keys(this.localStorage).forEach((key) => {
    // console.log(this.localStorage.getItem(key));
    var list_item = this.localStorage.getItem(key);
    list(list_item);
  })
}

function list(input_result){
   console.log(input_result);
  document.getElementsByClassName("content")[0].style.display="block";
  var namelist=document.createElement("li");
  namelist.setAttribute("class","td");
  namelist.setAttribute("data-key","do-list-key"+count);

  localStorage.setItem("do-list-key"+count ,input_result);
  count++;

  var listCon = document.createElement("div");
  listCon.setAttribute("class","list-con");
  var listText = document.createElement("span");
  listText.setAttribute("class","list-text");
  listText.textContent=input_result;
  var hide=document.createElement("input");
  hide.setAttribute("class","hideinput");
  
  hide.value=input_result
  var savebtn= document.createElement("button");
  savebtn.setAttribute("class","savebtn")
  savebtn.innerText="Save";
  listCon.append(hide);
  listCon.append(listText);
  listCon.append(savebtn);
  namelist.append(listCon);

  var actionWrapper = document.createElement("div");
  actionWrapper.setAttribute("class","action-wrapper");

  var actionEdit = document.createElementNS("http://www.w3.org/2000/svg","svg");
  var editPath = document.createElementNS("http://www.w3.org/2000/svg","path");
  editPath.setAttribute("d","M416.9 85.2L372 130.1L509.9 268L554.8 223.1C568.4 209.6 576 191.2 576 172C576 152.8 568.4 134.4 554.8 120.9L519.1 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.9 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.7C236.9 535.6 250.2 527.9 261 517.1L476 301.9L338.1 164z");
  actionEdit.setAttribute("class","edit");
  actionEdit.setAttribute("viewBox","0 0 640 640");
  actionEdit.append(editPath);
  actionEdit.addEventListener("click",function(){
    hide.style.display="block";
    savebtn.style.display = "block";
    listText.style.display = "none";

    savebtn.addEventListener("click",function(){

    var newtext=hide.value;
    var dataKey = namelist.getAttribute("data-key");

    localStorage.setItem(dataKey ,newtext);
    hide.style.display="none";
    savebtn.style.display = "none";
    listText.innerText=newtext;
    listText.style.display = "initial";
    })


    // console.log("Edit");


  })

  var actionDelete = document.createElementNS("http://www.w3.org/2000/svg","svg");
  var deletepath = document.createElementNS("http://www.w3.org/2000/svg","path");
  deletepath.setAttribute("d","M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z");
  actionDelete.setAttribute("class","delete");
  actionDelete.setAttribute("viewBox","0 0 640 640");
  actionDelete.append(deletepath);

  actionDelete.addEventListener("click",function(){
    document.getElementsByClassName("delete-wrapper")[0].style.display="flex"
   console.log(namelist.getAttribute("data-key"))
   delete_key = namelist.getAttribute("data-key");

  })

  actionWrapper.append(actionEdit);
  actionWrapper.append(actionDelete);
  namelist.append(actionWrapper);
  document.getElementsByClassName("content")[0].append(namelist);
document.getElementsByClassName("inputvalue")[0].value = " ";
}