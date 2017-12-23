$('#rules > p').eq(0).text("Welcome to the game «Student’s live»! This is game about freshman who just start learned in university, and started at this moment he has got 16 weeks before the end of the first semester. Twice a week you must choose one of the four tasks.");


$('#rules > ol > li').eq(0).text("Study");
$('#rules > ol > li').eq(1).text("Relationship");
$('#rules > ol > li').eq(2).text("Popularity");
$('#rules > ol > li').eq(3).text("Work");
$('#rules > p').eq(1).text('Your choice will affect the right panel. Originally each column it has got 100 points, if one of them will be less then 10 - you will lose. Also as often as possible look at your calendar, to prepare you character for the scheduled event. Important, during the event you can choose only the icon corresponding to the event, so if you are not prepared, you’ll lose.');
$('#rules > p').eq(2).text('I believing in you, you can do this close the window and good luck!');
$('#week > p').eq(1).text('WEEK');


$('#forKal0 > td').eq(0).text('Days of the week');
$('#forKal0 > td').eq(1).text('Monday');
$('#forKal0 > td').eq(2).text('Tuesday');
$('#forKal0 > td').eq(3).text('Wednesday ');
$('#forKal0 > td').eq(4).text('Thursday');
$('#forKal0 > td').eq(5).text('Friday');
$('#forKal0 > td').eq(6).text('Saturday');
$('#forKal0 > td').eq(7).text('Sunday');

$('.popularSprawy').eq(0).text('The birthday of your friend');
$('.popularSprawy').eq(1).text('The best party in your city');
$(".uczelnia").eq(0).text('The first Colloquim');
$(".uczelnia").text('Exams');
$('.uczelnia').eq(1).text('Colloquim');
$(".uczelnia").eq(2).text('Colloquim');
$('.loveSprawy').text('The birthday of your second half');

for(var j = 1;j < 17;j++){
    $('#forKal' + j + " > td").eq(0).text('Week ' + j);
}
$("#plan > h1").text('Your plan');


$("#startGame").text('New Game');
$('#ManWoman').text('Sex');
$('#lang').text('Language');
$('.sex').eq(0).text('Man');
$('.sex').eq(1).text('Woman');


