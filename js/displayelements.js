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
    var artibuteStyle = document.getElementsByTagName("style")[0];
    var background=     document.getElementsByClassName('background')[0];
    var full =          document.getElementsByClassName('full')[0];
    var mainwrap =      document.getElementsByClassName('mainwrap')[0];
    var iframewrapper =document.getElementsByClassName('iframewrapper')[0];
    var gamecontent = document.getElementById('gamecontent');
    var iframe = document.getElementsByTagName('iframe')[0];
    var fullout = document.getElementById('fullout');
    var fulls = document.getElementById('fulls');
    var forfullscreen =document.getElementById('forfullscreen');
    var history;












    function launchFullScreen(element) {
        if(element.requestFullScreen) {
            element.requestFullScreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    }
    function cancelFullScreen(){
        if (document.cancelFullScreen) {
        document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
        }
    }

    full.addEventListener("click",function(){
        launchFullScreen(fulls);

        fullout.style.display='inline-block';
    });
    fullout.addEventListener("click",function(){
        fullout.style.display='none';
        cancelFullScreen();



    })

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
            iframewrapper.classList.add("closeiframewrapper");
            gamecontent.classList.add("gamecontenopen");
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
            iframewrapper.classList.remove("closeiframewrapper");
            gamecontent.classList.remove("gamecontenopen");

        }
    });

//////////////////////////////////////////keypress

    window.onkeyup = pressed;
    function pressed(e) {

        if(e.which == 27){
            fullout.style.display='none';
            console.log("Нажата клавиша, ее значение ASCII: " + e.which);
        }
        else if(e.which ==122){
            fullout.style.display='none';
            console.log("Нажата клавиша, ее значение ASCII: " + e.which);
        }
    }

    closemenu.addEventListener("click",function(){
        mainwrap.remove()
    });

};
