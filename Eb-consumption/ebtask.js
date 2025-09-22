
var data;
function appliance_ac(arg){
    var container = document.createElement("div");
    container.setAttribute("class","wrap_container"+arg);
    
    let ac_off=document.createElement("img");
    ac_off.setAttribute("src","img/ac off.png");
    ac_off.setAttribute("class","ac_off");

    document.getElementsByClassName("wrapper")[0].append(container);
    document.getElementsByClassName("wrap_container"+arg)[0].append(ac_off);

    
   let lable= document.createElement("label");
   let input= document.createElement("input");
   let span=document.createElement("span");

   lable.setAttribute("class","switch");
   input.setAttribute("type","checkbox");
   span.setAttribute("class","slider round");

   lable.append(input)
   lable.append(span)
   document.getElementsByClassName("wrap_container"+arg)[0].append(lable);

   input.addEventListener("click",function (){
    var element_this = this;
    power_cal(arg,element_this);
});
}

function appliance_fridge(arg){
    var container = document.createElement("div");
    container.setAttribute("class","wrap_container"+arg);
    
    let fridge_off=document.createElement("img");
    fridge_off.setAttribute("src","img/fridge off.png");
    fridge_off.setAttribute("class","fridge_off");

    document.getElementsByClassName("wrapper")[0].append(container);
    document.getElementsByClassName("wrap_container"+arg)[0].append(fridge_off);

    
   let lable= document.createElement("label");
   let input= document.createElement("input");
   let span=document.createElement("span");

   lable.setAttribute("class","switch");
   input.setAttribute("type","checkbox");
   span.setAttribute("class","slider round");

   lable.append(input)
   lable.append(span)
   document.getElementsByClassName("wrap_container"+arg)[0].append(lable);

   input.addEventListener("click",function (){
    var element_this = this;
    power_cal(arg,element_this);
});
}

function power_cal(arg,arg1){
    console.log(arg);
    console.log(this.document.getElementsByTagName("input")[0]);
    var element_this = arg1;
    console.log(element_this)
    if(element_this.checked == true){
        console.log(element_this.parentElement.parentElement)
        element_this.parentElement.parentElement.getElementsByTagName("img")[0].style.display="none";
        let app_img=document.createElement("img");
        if(arg == "ac"){
            console.log("if ac");
            app_img.setAttribute("class","app_on");
            app_img.setAttribute("src","img/ac on.png");
        }else if(arg == "fridge"){
            app_img.setAttribute("class","app_on");
            app_img.setAttribute("src","img/fridge on.png");
        }
        else if(arg == "light"){
            app_img.setAttribute("class","app_on");
            app_img.setAttribute("src","img/light on.png");
        }else if(arg == "tv"){
            app_img.setAttribute("class","app_on");
            app_img.setAttribute("src","img/tv on.webp");
        }else if(arg == "wc"){
            app_img.setAttribute("class","app_on");
            app_img.setAttribute("src","img/washingmachineon.png");
        }else if(arg == "fan"){
            app_img.setAttribute("class","app_on");
            app_img.setAttribute("src","img/fan.png");
        }
        console.log(element_this.parentElement)
        element_this.parentElement.before(app_img);

        let watch=document.createElement("div");
        watch.setAttribute("class","stopWatch"+arg);
        element_this.parentElement.parentElement.append(watch);
        console.log(watch);
        timer = true;
        //data = arg;
        if(arg == "ac"){
        stopWatch_ac();
        }else if(arg == "fridge"){
            stopWatch_fridge();
        }else if(arg == "light"){
            stopWatch_light();
        }else if(arg == "tv"){
            stopWatch_tv();
        }else if(arg == "wc"){
            stopWatch_wc();
        }else if(arg == "fan"){
            stopWatch_fan();
        }
    }else{
        timer=false;
        element_this.parentElement.parentElement.getElementsByTagName("img")[0].style.display="inline-block";
        console.log(element_this.parentElement.parentElement.getElementsByClassName("stopWatch"+arg)[0].style.display="none");
        element_this.parentElement.parentElement.getElementsByClassName("stopWatch"+arg)[0].style.display="none";
        element_this.parentElement.parentElement.getElementsByClassName("acunits_"+arg)[0].style.display="none";
        element_this.parentElement.parentElement.getElementsByClassName("app_on")[0].remove();
    }
}

let hour_ac = "00";
let minute_ac = "00";
let second_ac = "00";
let hour_fr = "00";
let minute_fr = "00";
let second_fr = "00";
function stopWatch_ac() {
    if (timer) {
        second_ac++;

        if (second_ac == 60) {
            minute_ac++;
            second_ac = 0;
        }

        if (minute_ac == 60) {
            hour_ac++;
            minute_ac = 0;
        }

        if (hour_ac == 24) {
            minute_ac = 0;
            second_ac = 0;
        }
       
        let hrString = hour_ac;
        let minString = minute_ac;
        let secString = second_ac;

        document.getElementsByClassName('stopWatchac')[0].innerText =  hrString +":"+ minString +":"+ secString+"sec";
        setTimeout(stopWatch_ac, 1000);
        
        
    document.getElementsByClassName("stopWatchac")[0].style.display="inline-block";
    let val=document.getElementsByClassName("stopWatchac")[0].innerText;
    let time=val;
    let array=time.split(":");// split time 
    console.log(array);
    let seconds=(parseInt(array[0],10)*60*60)+(parseInt(array[1],10)*60)+parseInt(array[2],10);
    console.log(seconds);
    let gethr=seconds/3600;
    let acw=1500;//ac wats
    let cal=acw/1000*gethr;
    if(!!document.getElementsByClassName("acunits_ac")[0]){
        document.getElementsByClassName("acunits_ac")[0].remove();
    }
    let acunit=document.createElement("div");
    acunit.setAttribute("class","acunits_ac");
    document.getElementsByClassName("wrap_containerac")[0].append(acunit);
    document.getElementsByClassName("acunits_ac")[0].innerText=cal.toFixed(3);
 
    //document.getElementsByClassName("units")[0].innerText=cal.toFixed(3);
    unit(cal.toFixed(3));
    }
}
function stopWatch_fridge() {
    console.log(timer);
    if (timer) {
        second_fr++;

        if (second_fr == 60) {
            minute_fr++;
            second_fr = 0;
        }

        if (minute_fr == 60) {
            hour_fr++;
            minute_fr = 0;
        }

        if (hour_fr == 24) {
            minute_fr = 0;
            second_fr = 0;
        }
       
        let hrString = hour_fr;
        let minString = minute_fr;
        let secString = second_fr;

        document.getElementsByClassName('stopWatchfridge')[0].innerText =  hrString +":"+ minString +":"+ secString+"sec";
        setTimeout(stopWatch_fridge, 1000);
        document.getElementsByClassName("stopWatchfridge")[0].style.display="inline-block";

        let val=document.getElementsByClassName("stopWatchfridge")[0].innerText;
    let time=val;
    let array=time.split(":");// split time 
    console.log(array);
    let seconds=(parseInt(array[0],10)*60*60)+(parseInt(array[1],10)*60)+parseInt(array[2],10);
    console.log(seconds);
    let gethr=seconds/3600;
    let acw=1500;//ac wats
    let cal=acw/1000*gethr;
    if(!!document.getElementsByClassName("acunits_fridge")[0]){
        document.getElementsByClassName("acunits_fridge")[0].remove();
    }
    let acunit=document.createElement("div");
    acunit.setAttribute("class","acunits_fridge");
    document.getElementsByClassName("wrap_containerfridge")[0].append(acunit);
    document.getElementsByClassName("acunits_fridge")[0].innerText=cal.toFixed(3);
 
    //document.getElementsByClassName("units")[0].innerText=cal.toFixed(3);
    unit(cal.toFixed(3));
    }
}

function unit(){
    var acunits_fridge = "",acunits_ac = "",acunits_light = "",acunits_tv = "",acunits_wc = "",acunits_fan = "";
    if(!!document.getElementsByClassName("acunits_ac")[0]){
    acunits_ac = document.getElementsByClassName("acunits_ac")[0].innerText;
    }
    if(!!document.getElementsByClassName("acunits_fridge")[0]){
    acunits_fridge = document.getElementsByClassName("acunits_fridge")[0].innerText;
    }
    if(!!document.getElementsByClassName("acunits_light")[0]){
        acunits_light = document.getElementsByClassName("acunits_light")[0].innerText;
    }
    if(!!document.getElementsByClassName("acunits_tv")[0]){
        acunits_light = document.getElementsByClassName("acunits_tv")[0].innerText;
    }
    if(!!document.getElementsByClassName("acunits_wc")[0]){
        acunits_light = document.getElementsByClassName("acunits_wc")[0].innerText;
    }
    if(!!document.getElementsByClassName("acunits_fan")[0]){
        acunits_light = document.getElementsByClassName("acunits_fan")[0].innerText;
    }
    var unit = "";
    if(acunits_ac != "" && acunits_fridge == "" && acunits_light == "" && acunits_tv == "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_ac);
    }else if(acunits_ac == "" && acunits_fridge != "" && acunits_light == "" && acunits_tv == "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_fridge);
    }else if(acunits_ac == "" && acunits_fridge == "" && acunits_light != "" && acunits_tv == "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_light);
    }else if(acunits_ac == "" && acunits_fridge == "" && acunits_light == "" && acunits_tv != "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_tv);
    }else if(acunits_ac == "" && acunits_fridge == "" && acunits_light == "" && acunits_tv == "" && acunits_wc != "" && acunits_fan == ""){
        unit = parseFloat(acunits_wc);
    }else if(acunits_ac == "" && acunits_fridge == "" && acunits_light == "" && acunits_tv == "" && acunits_wc == "" && acunits_fan != ""){
        unit = parseFloat(acunits_fan);
    }else if(acunits_ac != "" && acunits_fridge != "" && acunits_light == "" && acunits_tv == "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_ac) + parseFloat(acunits_fridge);
    }else if(acunits_ac != "" && acunits_fridge == "" && acunits_light != "" && acunits_tv == "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_ac) + parseFloat(acunits_light);
    }else if(acunits_ac != "" && acunits_fridge == "" && acunits_light == "" && acunits_tv != "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_ac) + parseFloat(acunits_tv);
    }else if(acunits_ac != "" && acunits_fridge == "" && acunits_light == "" && acunits_tv == "" && acunits_wc != "" && acunits_fan == ""){
        unit = parseFloat(acunits_ac) + parseFloat(acunits_wc);
    }else if(acunits_ac != "" && acunits_fridge == "" && acunits_light == "" && acunits_tv == "" && acunits_wc == "" && acunits_fan != ""){
        unit = parseFloat(acunits_ac) + parseFloat(acunits_fan);
    }
    else if(acunits_ac == "" && acunits_fridge != "" && acunits_light != "" && acunits_tv == "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_fridge) + parseFloat(acunits_light);
    }else if(acunits_ac == "" && acunits_fridge != "" && acunits_light == "" && acunits_tv != "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_fridge) + parseFloat(acunits_tv);
    }else if(acunits_ac == "" && acunits_fridge != "" && acunits_light == "" && acunits_tv == "" && acunits_wc != "" && acunits_fan == ""){
        unit = parseFloat(acunits_fridge) + parseFloat(acunits_wc);
    }else if(acunits_ac == "" && acunits_fridge != "" && acunits_light == "" && acunits_tv == "" && acunits_wc == "" && acunits_fan != ""){
        unit = parseFloat(acunits_fridge) + parseFloat(acunits_fan);
    }
    else if(acunits_ac == "" && acunits_fridge == "" && acunits_light != "" && acunits_tv != "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_light) + parseFloat(acunits_tv);
    }else if(acunits_ac == "" && acunits_fridge == "" && acunits_light != "" && acunits_tv == "" && acunits_wc != "" && acunits_fan == ""){
        unit = parseFloat(acunits_light) + parseFloat(acunits_wc);
    }else if(acunits_ac == "" && acunits_fridge != "" && acunits_light == "" && acunits_tv == "" && acunits_wc == "" && acunits_fan != ""){
        unit = parseFloat(acunits_fridge) + parseFloat(acunits_fan);
    }
    else if(acunits_ac == "" && acunits_fridge == "" && acunits_light == "" && acunits_tv != "" && acunits_wc != "" && acunits_fan == ""){
        unit = parseFloat(acunits_tv) + parseFloat(acunits_wc);
    }else if(acunits_ac == "" && acunits_fridge == "" && acunits_light == "" && acunits_tv != "" && acunits_wc == "" && acunits_fan != ""){
        unit = parseFloat(acunits_tv) + parseFloat(acunits_fan);
    }else if(acunits_ac == "" && acunits_fridge == "" && acunits_light == "" && acunits_tv == "" && acunits_wc != "" && acunits_fan != ""){
        unit = parseFloat(acunits_wc) + parseFloat(acunits_fan);
    }
    else if(acunits_ac != "" && acunits_fridge != "" && acunits_light != "" && acunits_tv == "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_ac) + parseFloat(acunits_fridge) + parseFloat(acunits_light);
    }else if(acunits_ac != "" && acunits_fridge != "" && acunits_light == "" && acunits_tv != "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_ac) + parseFloat(acunits_fridge) + parseFloat(acunits_tv);
    }else if(acunits_ac != "" && acunits_fridge != "" && acunits_light == "" && acunits_tv == "" && acunits_wc != "" && acunits_fan == ""){
        unit = parseFloat(acunits_ac) + parseFloat(acunits_fridge) + parseFloat(acunits_wc);
    }else if(acunits_ac != "" && acunits_fridge != "" && acunits_light == "" && acunits_tv == "" && acunits_wc == "" && acunits_fan != ""){
        unit = parseFloat(acunits_ac) + parseFloat(acunits_fridge) + parseFloat(acunits_fan);
    }
    else if(acunits_ac == "" && acunits_fridge != "" && acunits_light != "" && acunits_tv != "" && acunits_wc == "" && acunits_fan == ""){
        unit = parseFloat(acunits_fridge) + parseFloat(acunits_light) + parseFloat(acunits_tv);
    }else if(acunits_ac == "" && acunits_fridge != "" && acunits_light != "" && acunits_tv == "" && acunits_wc != "" && acunits_fan == ""){
        unit = parseFloat(acunits_fridge) + parseFloat(acunits_light) + parseFloat(acunits_wc);
    }else if(acunits_ac == "" && acunits_fridge != "" && acunits_light != "" && acunits_tv == "" && acunits_wc == "" && acunits_fan != ""){
        unit = parseFloat(acunits_fridge) + parseFloat(acunits_light) + parseFloat(acunits_fan);
    }
    else if(acunits_ac == "" && acunits_fridge == "" && acunits_light != "" && acunits_tv != "" && acunits_wc != "" && acunits_fan == ""){
        unit = parseFloat(acunits_light) + parseFloat(acunits_tv) + parseFloat(acunits_wc);
    }else if(acunits_ac == "" && acunits_fridge == "" && acunits_light != "" && acunits_tv != "" && acunits_wc == "" && acunits_fan != ""){
        unit = parseFloat(acunits_light) + parseFloat(acunits_tv) + parseFloat(acunits_fan);
    }
    else if(acunits_ac != "" && acunits_fridge != "" && acunits_light != "" && acunits_tv != "" && acunits_wc != "" && acunits_fan != ""){
        unit = parseFloat(acunits_ac) + parseFloat(acunits_fridge) + parseFloat(acunits_light) + parseFloat(acunits_wc) + parseFloat(acunits_fan);
    }
    document.getElementsByClassName("units")[0].innerText=unit.toFixed(3);
}

function appliance_light(arg){
    var container = document.createElement("div");
    container.setAttribute("class","wrap_container"+arg);
    
    let light_off=document.createElement("img");
    light_off.setAttribute("src","img/light off.png");
    light_off.setAttribute("class","light_off");

    document.getElementsByClassName("wrapper")[0].append(container);
    document.getElementsByClassName("wrap_container"+arg)[0].append(light_off);

    
   let lable= document.createElement("label");
   let input= document.createElement("input");
   let span=document.createElement("span");

   lable.setAttribute("class","switch");
   input.setAttribute("type","checkbox");
   span.setAttribute("class","slider round");

   lable.append(input)
   lable.append(span)
   document.getElementsByClassName("wrap_container"+arg)[0].append(lable);

   input.addEventListener("click",function (){
    var element_this = this;
    power_cal(arg,element_this);
});
}

function appliance_tv(arg){
    var container = document.createElement("div");
    container.setAttribute("class","wrap_container"+arg);
    
    let tv_off=document.createElement("img");
    tv_off.setAttribute("src","img/tv off.webp");
    tv_off.setAttribute("class","tv_off");

    document.getElementsByClassName("wrapper")[0].append(container);
    document.getElementsByClassName("wrap_container"+arg)[0].append(tv_off);

    
   let lable= document.createElement("label");
   let input= document.createElement("input");
   let span=document.createElement("span");

   lable.setAttribute("class","switch");
   input.setAttribute("type","checkbox");
   span.setAttribute("class","slider round");

   lable.append(input)
   lable.append(span)
   document.getElementsByClassName("wrap_container"+arg)[0].append(lable);

   input.addEventListener("click",function (){
    var element_this = this;
    power_cal(arg,element_this);
});
}


let hour_li = "00";
let minute_li = "00";
let second_li = "00";
let hour_tv= "00";
let minute_tv = "00";
let second_tv = "00";
function stopWatch_light() {
    if (timer) {
        second_li++;

        if (second_li == 60) {
            minute_li++;
            second_li = 0;
        }

        if (minute_li == 60) {
            hour_li++;
            minute_li = 0;
        }

        if (hour_li == 24) {
            minute_li = 0;
            second_li = 0;
        }
       
        let hrString = hour_li;
        let minString = minute_li;
        let secString = second_li;

        document.getElementsByClassName('stopWatchlight')[0].innerText =  hrString +":"+ minString +":"+ secString+"sec";
        setTimeout(stopWatch_light, 1000);
        
        
    document.getElementsByClassName("stopWatchlight")[0].style.display="inline-block";
    let val=document.getElementsByClassName("stopWatchlight")[0].innerText;
    let time=val;
    let array=time.split(":");// split time 
    console.log(array);
    let seconds=(parseInt(array[0],10)*60*60)+(parseInt(array[1],10)*60)+parseInt(array[2],10);
    console.log(seconds);
    let gethr=seconds/3600;
    let acw=1500;//ac wats
    let cal=acw/1000*gethr;
    if(!!document.getElementsByClassName("acunits_light")[0]){
        document.getElementsByClassName("acunits_light")[0].remove();
    }
    let acunit=document.createElement("div");
    acunit.setAttribute("class","acunits_light");
    document.getElementsByClassName("wrap_containerlight")[0].append(acunit);
    document.getElementsByClassName("acunits_light")[0].innerText=cal.toFixed(3);
 
    //document.getElementsByClassName("units")[0].innerText=cal.toFixed(3);
    unit(cal.toFixed(3));
    }
}
function stopWatch_tv() {
    console.log(timer);
    if (timer) {
        second_tv++;

        if (second_tv == 60) {
            minute_tv++;
            second_tv = 0;
        }

        if (minute_tv == 60) {
            hour_tv++;
            minute_tv = 0;
        }

        if (hour_tv == 24) {
            minute_tv = 0;
            second_tv = 0;
        }
       
        let hrString = hour_tv;
        let minString = minute_tv;
        let secString = second_tv;

        document.getElementsByClassName('stopWatchtv')[0].innerText =  hrString +":"+ minString +":"+ secString+"sec";
        setTimeout(stopWatch_tv, 1000);
        document.getElementsByClassName("stopWatchtv")[0].style.display="inline-block";

        let val=document.getElementsByClassName("stopWatchtv")[0].innerText;
    let time=val;
    let array=time.split(":");// split time 
    console.log(array);
    let seconds=(parseInt(array[0],10)*60*60)+(parseInt(array[1],10)*60)+parseInt(array[2],10);
    console.log(seconds);
    let gethr=seconds/3600;
    let acw=1500;//ac wats
    let cal=acw/1000*gethr;
    if(!!document.getElementsByClassName("acunits_tv")[0]){
        document.getElementsByClassName("acunits_tv")[0].remove();
    }
    let acunit=document.createElement("div");
    acunit.setAttribute("class","acunits_tv");
    document.getElementsByClassName("wrap_containertv")[0].append(acunit);
    document.getElementsByClassName("acunits_tv")[0].innerText=cal.toFixed(3);
 
    //document.getElementsByClassName("units")[0].innerText=cal.toFixed(3);
    unit(cal.toFixed(3));
    }
}
function appliance_wc(arg){
    var container = document.createElement("div");
    container.setAttribute("class","wrap_container"+arg);
    
    let tv_off=document.createElement("img");
    tv_off.setAttribute("src","img/washingmachine off.png");
    tv_off.setAttribute("class","wc_off");

    document.getElementsByClassName("wrapper")[0].append(container);
    document.getElementsByClassName("wrap_container"+arg)[0].append(tv_off);

   let lable= document.createElement("label");
   let input= document.createElement("input");
   let span=document.createElement("span");

   lable.setAttribute("class","switch");
   input.setAttribute("type","checkbox");
   span.setAttribute("class","slider round");

   lable.append(input)
   lable.append(span)
   document.getElementsByClassName("wrap_container"+arg)[0].append(lable);

   input.addEventListener("click",function (){
    var element_this = this;
    power_cal(arg,element_this);
});
}
function appliance_fan(arg){
    var container = document.createElement("div");
    container.setAttribute("class","wrap_container"+arg);
    
    let fan_off=document.createElement("img");
    fan_off.setAttribute("src","img/fan.png");
    fan_off.setAttribute("class","fan_off");

    document.getElementsByClassName("wrapper")[0].append(container);
    document.getElementsByClassName("wrap_container"+arg)[0].append(fan_off);

   let lable= document.createElement("label");
   let input= document.createElement("input");
   let span=document.createElement("span");

   lable.setAttribute("class","switch");
   input.setAttribute("type","checkbox");
   span.setAttribute("class","slider round");

   lable.append(input)
   lable.append(span)
   document.getElementsByClassName("wrap_container"+arg)[0].append(lable);

   input.addEventListener("click",function (){
    var element_this = this;
    power_cal(arg,element_this);
});
}

let hour_wc = "00";
let minute_wc = "00";
let second_wc = "00";
let hour_fan= "00";
let minute_fan = "00";
let second_fan = "00";
function stopWatch_wc() {
    if (timer) {
        second_wc++;

        if (second_wc == 60) {
            minute_wc++;
            second_wc = 0;
        }

        if (minute_wc == 60) {
            hour_wc++;
            minute_wc = 0;
        }

        if (hour_wc == 24) {
            minute_wc = 0;
            second_wc = 0;
        }
       
        let hrString = hour_wc;
        let minString = minute_wc;
        let secString = second_wc;

        document.getElementsByClassName('stopWatchwc')[0].innerText =  hrString +":"+ minString +":"+ secString+"sec";
        setTimeout(stopWatch_wc, 1000);
        
        
    document.getElementsByClassName("stopWatchwc")[0].style.display="inline-block";
    let val=document.getElementsByClassName("stopWatchwc")[0].innerText;
    let time=val;
    let array=time.split(":");// split time 
    console.log(array);
    let seconds=(parseInt(array[0],10)*60*60)+(parseInt(array[1],10)*60)+parseInt(array[2],10);
    console.log(seconds);
    let gethr=seconds/3600;
    let acw=1500;//ac wats
    let cal=acw/1000*gethr;
    if(!!document.getElementsByClassName("acunits_wc")[0]){
        document.getElementsByClassName("acunits_wc")[0].remove();
    }
    let acunit=document.createElement("div");
    acunit.setAttribute("class","acunits_wc");
    document.getElementsByClassName("wrap_containerwc")[0].append(acunit);
    document.getElementsByClassName("acunits_wc")[0].innerText=cal.toFixed(3);
 
    //document.getElementsByClassName("units")[0].innerText=cal.toFixed(3);
    unit(cal.toFixed(3));
    }
}
function stopWatch_fan() {
    if (timer) {
        second_fan++;

        if (second_fan == 60) {
            minute_fan++;
            second_fan = 0;
        }

        if (minute_fan == 60) {
            hour_fan++;
            minute_fan = 0;
        }

        if (hour_fan == 24) {
            minute_fan = 0;
            second_fan = 0;
        }
       
        let hrString = hour_fan;
        let minString = minute_fan;
        let secString = second_fan;

        document.getElementsByClassName('stopWatchfan')[0].innerText =  hrString +":"+ minString +":"+ secString+"sec";
        setTimeout(stopWatch_fan, 1000);
        
        
    document.getElementsByClassName("stopWatchfan")[0].style.display="inline-block";
    let val=document.getElementsByClassName("stopWatchfan")[0].innerText;
    let time=val;
    let array=time.split(":");// split time 
    console.log(array);
    let seconds=(parseInt(array[0],10)*60*60)+(parseInt(array[1],10)*60)+parseInt(array[2],10);
    console.log(seconds);
    let gethr=seconds/3600;
    let acw=1500;//ac wats
    let cal=acw/1000*gethr;
    if(!!document.getElementsByClassName("acunits_fan")[0]){
        document.getElementsByClassName("acunits_fan")[0].remove();
    }
    let acunit=document.createElement("div");
    acunit.setAttribute("class","acunits_fan");
    document.getElementsByClassName("wrap_containerfan")[0].append(acunit);
    document.getElementsByClassName("acunits_fan")[0].innerText=cal.toFixed(3);
 
    //document.getElementsByClassName("units")[0].innerText=cal.toFixed(3);
    unit(cal.toFixed(3));
    }
}

