$('#rules > p').eq(0).text("Witamy w grę Życie Studenta! To jest gra o perwszeroczniekie który właśnie trafił na uniwersytet, i zaczynając od tej chwili ma 15 tygodni do sesji. Dwa razy w tygodniu trzeba będzie wybrać jedną z czterech zadań, które będzie wykonywał twój bohater:");
$('#rules > ol > li').eq(0).text("Nauka");
$('#rules > ol > li').eq(1).text("Relacja");
$('#rules > ol > li').eq(2).text("Popularność");
$('#rules > ol > li').eq(3).text("Materialna ochrona");
$('#rules > p').eq(1).text('Twój wybór będzie miał wpływ na panel po prawej stronie zabierając lub dodając punkty w każdym z kolumny, która z kolei będzie wpływać na samego bohatera. Początkowo każda kolumna zainstalowana na 100 punktów, jeśli choć jeden z kolumn będzie mniejsza niż 10 - gra jest stracone. Także jak najczęściej patrz na swój kalendarz, aby przygotować swoją postać do wydarzeń, które są zaplanowane. Ważne jest, aby podczas imprezy możesz wybrać tylko tę ikonę, która odpowiada rodzaju imprezy, więc jeśli twój bohater będzie miał jakieś problemy z innymi zadaniami, przegrasz.');
$('#rules > p').eq(2).text('Wierzę w to, że dasz sobie radę, zamknij okno i powodzenia!');
$('#week > p').eq(1).text('TYDZIEŃ');

$('#forKal0 > td').eq(0).text('Dni tygodnia');
$('#forKal0 > td').eq(1).text('Niedzila');
$('#forKal0 > td').eq(2).text('Poniedziałek');
$('#forKal0 > td').eq(3).text('Wtorek');
$('#forKal0 > td').eq(4).text('Środa');
$('#forKal0 > td').eq(5).text('Czwartek');
$('#forKal0 > td').eq(6).text('Piątek');
$('#forKal0 > td').eq(7).text('Sobota');
$('.loveSprawy').text('Urodziny twojej drugiej połówki');
$('.popularSprawy').eq(1).text('Najwieksza impreza w twojemu mieście');
$('.popularSprawy').eq(0).text('Urodziny u ziomka');
$(".uczelnia").eq(0).text('Pierwszy kolokwium');
$(".uczelnia").text('Egzaminy');
$('.uczelnia').eq(1).text('Kolokwium');
$(".uczelnia").eq(2).text('Kolokwium');

for(var j = 1;j < 17;j++){
    $('#forKal' + j + " > td").eq(0).text('Niedziela ' + j);
}
$("#plan > h1").text('Twój plan');

$("#startGame").text('Nowa Gra');
$('#ManWoman').text('Wybor postaci');
$('#lang').text('Język');
$('.sex').eq(0).text('Facet');
$('.sex').eq(1).text('Dziewczyna');

