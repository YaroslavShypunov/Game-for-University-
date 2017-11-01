function Start(){
    $('#menu').slideDown('slow');
        $('#time').css('display','none');
}
$(function () {
    
    /* -------------------------------GLOBAL ZMINNY----------------------------*/
    
    var a = 0;
    
     
    var week = 1;
    var stap = 0;
    
    var studyScales = 100;
    var popularScales = 100;
    var relationshipScales = 100;
    var workScales = 100;
    
    
    
    /* ------------------------------------------------------------------------*/
    
    
    
    setTimeout(Start,1000);
    
    $('#lang').on('click',function(){
        if($('.language').is(':hidden')){
       $('.language').css('display','block');
        
      $('.language').eq(0).animate({
          opacity:1.0,
          left:'-250px'
      },50);
     $('.language').eq(1).animate({
          opacity:1.0,
          left:'-250px'
      },55);
        $('.language').eq(2).animate({
            opacity:1.0,
          left:'-250px'
      },60);
        $('.language').eq(3).animate({
            opacity:1.0,
          left:'-250px'
      },65);
  
    }else{
                  $('.language').animate({
                      opacity: 0.0,
                    left: '0px'
               },60);
                  $('.language').css('display',"none");
                  }
          });
       
    
    $('#ManWoman').on('click',function(){
       if($('.sex').is(':hidden')){
           $('.sex').css('display','block');
           $('.sex').eq(0).animate({
               opacity:1.0,
               left:'-450px'
           },50);
           $('.sex').eq(1).animate({
               opacity:1.0,
               left:'-250px'
           },50);
       } else{
           $('.sex').animate({
               opacity:0.0,
               left:'0px'
           },70);
           $('.sex').css('display','none');
       }
    });


    $('.sex').eq(0).on('click',function(){
        a = 1;
    });
    
    $('.sex').eq(1).on('click',function(){
        a = 2;
    });
    
    
    $('#startGame').on('click',function(){
        if(a != 0){
        
        $('#menu').slideUp('slow');
        $('#time').css('display','none');
        }
    });
    

    
    
    
    $('#rules div img').on('click',function(){
        $('#rules').hide(100);
    });
    $('#gamePlay img:nth-of-type(2)').on('click',function(){
        $('#rules').show(50);
    });
    
    
    
    
    
    
   /*------------------------------___GAME's SCRIPT___---------------------------*/
    
    $('#study').on('click',function(){
        studyScales = studyScales + 50;
        popularScales = popularScales - 15;
        relationshipScales = relationshipScales - 5;
        workScales = workScales - 5;
    });
    
    $('#popular').on('click',function(){
       studyScales = studyScales - 30;
       popularScales = popularScales + 40;
       relationshipScales = relationshipScales - 15;
       workScales = workScales - 30;
    });
    
    $('#relationship').on('click',function(){
        studyScales = studyScales - 20;
        popularScales = popularScales - 15;
        relationshipScales = relationshipScales + 30;
        workScales = workScales - 60;
    });
    
    $('#work').on('click',function(){
        studyScales = studyScales + 5;
        popularScales = popularScales - 20;
        relationshipScales = relationshipScales +5;
        workScales = workScales + 100; 
    });
    
    $('#go').on('click',function(){
        stap++;
        if(stap%2 == 0){
            week++;
            $('#numWeek').text(week);
        }
        $('#oneScales').css('height',studyScales  + 'px');
        $('#twoScales').css('height',relationshipScales + 'px');
        $('#threeScales').css('height',popularScales + 'px');
        $('#fourScales').css('height',workScales + 'px');
        
        if(studyScales < 10 || relationshipScales < 10 || popularScales < 10 || workScales < 10){
            alert("ВЫ ПРОИГРАЛИ! ПЕРЕЗАГРУЗИТЕ ИГРУ");
        }

    });
    
    
    
    
    
/*-----------------------------_NewGame_-----------------------------*/


//   $('#start').ready(function(){
   //    setTimeout(startGame,1000);
         
 //});

});

 //   function startGame(){
   //           $('#menu').slideUp('slow');
     //  $('#menu').css('display','none');
    //}



