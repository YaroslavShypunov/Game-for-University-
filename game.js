function Start(){
    $('#menu').slideDown('slow');
        $('#time').css('display','none');
}
  function startGame(){

      $("#game").css('display',"block");
    }
$(function () {
    
    
    /* -------------------------------GLOBAL ZMINNY----------------------------*/
    
    var a = 0;
    
    var forKal = 0; 
    var week = 1;
    var stap = 0;
    
    var studyScales = 100;
    var popularScales = 100;
    var relationshipScales = 100;
    var workScales = 100;
    
    
    
    /* ------------------------------------------------------------------------*/
    
    
    
   $('#startGame').on('click',function(){
	  $('#menu').slideUp('slow');
    setTimeout(startGame,1000);
         
 });
	
    setTimeout(Start,1000);
    
    $('#lang').on('click',function(){
		  $('.sex').animate({
               opacity:0.0,
               left:'0px'
           },70);
           $('.sex').css('display','none');
		
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
    $('#polskiLang').on('click',function(){
            $.ajax({
                type: "GET",
                url: "polski.js",
                dataType: "script"
            });
                          $('.language').animate({
                      opacity: 0.0,
                    left: '0px'
               },60);
                  $('.language').css('display',"none");
        });
    $('#ukranianLang').on('click',function(){
        $.ajax({
            type:"GET",
            url:"ukrainian.js",
            dataType: "script"
        });
                                  $('.language').animate({
                      opacity: 0.0,
                    left: '0px'
               },60);
                  $('.language').css('display',"none");
    });
        $('#russianLang').on('click',function(){
        $.ajax({
            type:"GET",
            url:"russian.js",
            dataType: "script"
        });
                  $('.language').animate({
                      opacity: 0.0,
                    left: '0px'
               },60);
                  $('.language').css('display',"none");
    });
    $('#englishLang').on('click',function(){
        $.ajax({
            type: "GET",
            url: "english.js",
            dataType: "script"
        });
                                          $('.language').animate({
                      opacity: 0.0,
                    left: '0px'
               },60);
                  $('.language').css('display',"none");
    });
    
    $('.sex').eq(1).on('click',function(){
        $.ajax({
            type:"GET",
            url: "girl.js",
            dataType: "script"
        });
                   $('.sex').animate({
               opacity:0.0,
               left:'0px'
           },70);
           $('.sex').css('display','none');
        
    });
       
        $('.sex').eq(0).on('click',function(){
        $.ajax({
            type:"GET",
            url: "man.js",
            dataType: "script"
        });
                   $('.sex').animate({
               opacity:0.0,
               left:'0px'
           },70);
           $('.sex').css('display','none');
        
    });
    
    $('#ManWoman').on('click',function(){
		   $('.language').animate({
                      opacity: 0.0,
                    left: '0px'
               },60);
           $('.language').css('display',"none");
                  
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


    
    
    $('#startGame').on('click',function(){
        if(a != 0){
        
        $('#menu').slideUp('slow');
        $('#time').css('display','none');
        }
    });
    

    
    
    
    $('#rules div img').on('click',function(){
        $('#rules').hide(100);
    });
    $('#gamePlay img:nth-of-type(1)').on('click',function(){
        $('#rules').show(50);
    });
    
    
    
    
    
    
   /*------------------------------___GAME's SCRIPT___---------------------------*/

    $('#go').on('click',function(){

       studyScales = studyScales - 5;
       popularScales = popularScales - 5;
       relationshipScales = relationshipScales - 5;
       workScales = workScales - 5;
				$('#popular').css('display','inline-block');
		$('#study').css('display','inline-block');
		$('#relationship').css('display','inline-block');
		$('#work').css('display','inline-block');
        $('#go').css('display','block');
    
        stap++;
        if(stap%2 == 0){
            week++;
            $('#numWeek').text(week);
        }
 /*       $('#oneScales').css('height',studyScales  + 'px');
        $('#twoScales').css('height',relationshipScales + 'px');
        $('#threeScales').css('height',popularScales + 'px');
        $('#fourScales').css('height',workScales + 'px'); */
          $('#oneScales').animate({
              height: studyScales  + 'px'
          },1000);
                  $('#twoScales').animate({
              height: relationshipScales  + 'px'
          },1000);
                  $('#threeScales').animate({
              height: popularScales  + 'px'
          },1000);
                  $('#fourScales').animate({
              height: workScales  + 'px'
          },1000);
        
        if(studyScales < 10 || relationshipScales < 10 || popularScales < 10 || workScales < 10){
            alert("ВЫ ПРОИГРАЛИ! ПЕРЕЗАГРУЗИТЕ ИГРУ");
        $('#popular').css('display','none');
		$('#study').css('display','none');
		$('#relationship').css('display','none');
		$('#work').css('display','none');
        }
                                   if(stap == 1){
		$('#study').css('display','none');
		$('#relationship').css('display','none');
		$('#work').css('display','none');
        studyScales = studyScales - 15;
        popularScales = popularScales + 200;
        relationshipScales = relationshipScales -15;
        workScales = workScales - 20;
        stap++;
  
                   }
                                           if(stap == 7){
                $('#popular').css('display','none');
		$('#relationship').css('display','none');
		$('#work').css('display','none');
        studyScales = studyScales + 200;
        popularScales = popularScales - 5;
        relationshipScales = relationshipScales - 5;
        workScales = workScales - 10; 
        stap++;
                   };
        
                                                   if(stap == 12 || stap == 13){
                $('#popular').css('display','none');
		$('#relationship').css('display','none');
		$('#work').css('display','none');
        stap++
        studyScales = studyScales + 50;
        popularScales = popularScales - 2;
        relationshipScales = relationshipScales - 5;
        workScales = workScales - 5; 
         };
                if(stap == 17){
                $('#popular').css('display','none');
		$('#study').css('display','none');
		$('#work').css('display','none');
        studyScales = studyScales - 50;
        popularScales = popularScales - 5;
        relationshipScales = relationshipScales + 105;
        workScales = workScales - 5; 
        stap++;
                   };
                        if(stap == 23){
		$('#study').css('display','none');
		$('#relationship').css('display','none');
		$('#work').css('display','none');
        studyScales = studyScales - 50;
        popularScales = popularScales + 105;
        relationshipScales = relationshipScales - 50;
        workScales = workScales - 10; 
        stap++;
                   };
                if(stap == 30 || stap == 31){
        $('#popular').css('display','none');
		$('#relationship').css('display','none');
		$('#work').css('display','none');
        popularScales = popularScales -20;
        relationshipScales = relationshipScales - 20;
        workScales = workScales - 20; 
        stap++;
         };
        
        
        
        
        
          /*--------------------------__KALENDAR X__-----------------------------*/     
        
       if(stap%2 != 0){
        for(var i = 4; i < 8; i++){
            $('#forKal' + week  + ' > td').eq(i).css('backgroundImage','url(end.svg)');
        }
           forKal = 0;
       }
            
        for(var i = 1; i < 4; i++){
            $('#forKal' + week  + ' > td').eq(i).css('backgroundImage','url(end.svg)');
            forKal = 1;
        }
            
        
        
        
        
        /*--------------------------__KALENDAR X__-----------------------------*/
    });

    $('#go').css('display','none');
    $('#study').on('click',function(){
        studyScales = studyScales + 50;
        popularScales = popularScales - 15;
        relationshipScales = relationshipScales - 5;
        workScales = workScales - 5;
				$('#popular').css('display','none');
		$('#study').css('display','none');
		$('#relationship').css('display','none');
		$('#work').css('display','none');
        $('svg #go').css('fill','#E8BD63');
        $('#go').css('display','block');
    });
    
    $('#popular').on('click',function(){
       studyScales = studyScales - 30;
       popularScales = popularScales + 40;
       relationshipScales = relationshipScales - 10;
       workScales = workScales - 30;
				$('#popular').css('display','none');
		$('#study').css('display','none');
		$('#relationship').css('display','none');
		$('#work').css('display','none');
        $('#go').css('display','block');
    });
    
    $('#relationship').on('click',function(){
        studyScales = studyScales - 20;
        popularScales = popularScales - 15;
        relationshipScales = relationshipScales + 30;
        workScales = workScales - 60;
				$('#popular').css('display','none');
		$('#study').css('display','none');
		$('#relationship').css('display','none');
		$('#work').css('display','none');
        $('#go').css('display','block');
    });
    
    $('#work').on('click',function(){
        studyScales = studyScales + 5;
        popularScales = popularScales - 20;
        relationshipScales = relationshipScales -5;
        workScales = workScales + 100; 
				$('#popular').css('display','none');
		$('#study').css('display','none');
		$('#relationship').css('display','none');
		$('#work').css('display','none');
        $('#go').css('display','block');
    });


    var audio = $('#studyAu')[0];
    var audio1 = $('#popularAu')[0];
    var audio2 = $('#relationshipAu')[0];
    var audio3 = $('#workAu')[0];
    
    $('#study').mouseenter(function(){
        audio.play();
    });
    $('#popular').mouseenter(function(){
        audio1.play();
    });
    $('#relationship').mouseenter(function(){
        audio2.play();
    });
    $('#work').mouseenter(function(){
        audio3.play();
    });
    
    
/*-----------------------------__PLANZAJEC__-----------------------------------*/
    $('#plan > div > img').on('click',function(){
        $('#plan').hide(100);
    });
       $('#gamePlay img:nth-of-type(2)').on('click',function(){
        $('#plan').show(50);
    });
});

 



