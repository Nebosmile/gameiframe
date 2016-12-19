/**
 * Created by Nebosmile on 09.12.2016.
 */
window.onload =function(){
    var buttomFavorit = document.getElementsByClassName('favorit')[0];
    var menu=           document.getElementsByClassName('undermenu')[0];
    var rightmenu=      document.getElementsByClassName('rightmenu')[0];
    var info =          document.getElementsByClassName('i')[0];
    var closemenu =     document.getElementsByClassName('x')[0];
    var hide=           document.getElementsByClassName('hide')[0];
    var statistic=      document.getElementsByClassName('statistic')[0];
    var forstatistic=   document.getElementsByClassName('forstatistic')[0];
    var statictable=    document.getElementsByClassName('statictable')[0];
    var select=         document.getElementsByClassName('select')[0];
    var artibuteStyle = document.getElementsByTagName("style")[0];
    var background=     document.getElementsByClassName('background')[0];
    var full =          document.getElementsByClassName('full')[0];
    var mainwrap =      document.getElementsByClassName('mainwrap')[0];
    var history;


    background.addEventListener("click",function(){
        forstatistic.style.display="none";
    });


    function launchFullScreen(element) {
        if(element.requestFullScreen) {
            element.requestFullScreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    }
    full.addEventListener("click",function(){
        launchFullScreen(document.body)
    });

    buttomFavorit.addEventListener("click",function(){
        if(!buttomFavorit.classList.contains('checked')){
            buttomFavorit.classList.add('checked');
            menu.classList.add('open');
        }
        else{
            buttomFavorit.classList.remove('checked');
            menu.classList.remove('open');

        }
    });
    info.addEventListener("click",function(){
        if(!rightmenu.classList.contains('rightmenuopen')){
            rightmenu.classList.add('rightmenuopen');
            closemenu.classList.add('openx1');
            info.style.display="none";
        }
        else{
            rightmenu.classList.remove('rightmenuopen');
            closemenu.classList.remove('openx1');
            info.style.display="block";
        }
    });
    hide.addEventListener("click",function(){
        if(!rightmenu.classList.contains('rightmenuopen')){
        rightmenu.classList.add('rightmenuopen');
        closemenu.classList.add('openx1');
        info.style.display="none";
        }
        else{
            rightmenu.classList.remove('rightmenuopen');
            closemenu.classList.remove('openx1');
            info.style.display="block";
        }
    });



    ////////////////////////////////////////Ajax

    function getXmlHttp(){
        var xmlhttp;
        try{
            xmlhttp = new ActiveXObject("Msxm12.XMLHTTP");
        }   catch(e){
            try{
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E){
                xmlhttp = false;
            }

        }
        if(!xmlhttp && typeof XMLHttpRequest != "undefined" ){
            xmlhttp = new XMLHttpRequest();
            return xmlhttp;
        }
    }
    function loadstatic(){
        var xmlhttp = getXmlHttp();
        xmlhttp.open("POST", "js/history.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("");
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState ==4){
                if(xmlhttp.status ==200){

                    history=JSON.parse(xmlhttp.responseText);
                    history=history.history;
                    makestatistic(history);
                    forstatistic.style.display ="block";
                }
            }
        }
    }

    statistic.addEventListener("click",function(){

        loadstatic();
    });

    function makestatistic(element){
        statictable.innerHTML="";
        for(i=0;i<element.length;i++){
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var date =new Date(element[i]["date"]);

            td1.innerHTML=date.getDay()+"."+date.getMonth()+"."+date.getFullYear()+", "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
            if(element[i]["operation"]=="bet"){
                td2.innerHTML="Ставка";
                tr.setAttribute("bet","");
            }
            else{
                td2.innerHTML="Выиграш";
                tr.setAttribute("win","");
            }
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            td3.innerHTML=element[i]["sum"];
            statictable.appendChild(tr);
        }
    }

    select.addEventListener("change",function(){
        if(select.value=="all"){
            artibuteStyle.innerHTML=""
        }
        else if(select.value=="bet"){
            artibuteStyle.innerHTML="tr[win]{display: none;} tr[bet]:nth-of-type(n){background-color: #091100;}"

        }
        else if(select.value=="win"){
            artibuteStyle.innerHTML="tr[bet]{display: none;} tr[win]:nth-of-type(n){background-color: #091100;}"

        }
    });

    closemenu.addEventListener("click",function(){
        mainwrap.remove()
    });

};




