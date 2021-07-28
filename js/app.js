
'use strict'


let uname = prompt(' welcome to my website ,please enter your name ^^')
alert('welcome to my website ' + uname)
//console.log('the user enter', uname);


function userplace() {
    let place = prompt('whare are you from ?')
    //console.log('the user enter', place)
    alert(' welcome ' + uname + ' from ' + place + 'lets play a guessing game , please answer by yes or no (y/n) ,have fun'
    )
}
userplace();

let score = 0;

function question1() {
    let food = prompt('do you think i love food?');
    switch (food.toLocaleLowerCase()) {
        case 'yes':
        case 'y':

            alert('that is right ! who is do not love food');
            score++;
            break;
        case 'no':
        case 'n':

            alert('no your answer is wrong definitely i love it !')
            break;
    }
}
question1();

function question2() {
    let Edishs = prompt('do i like try exotic dishes?');
    switch (Edishs) {
        case 'yes':
        case 'y':

            alert('sure i like try them');
            score++;

            break;
        case 'no':
        case 'n':

            //consle.log('that is not true', Edishs)
            alert('not right , i love exotic dishes')
            break;
    }
}
question2();



function qusetion3() {
    let Travel = prompt(' Do yuo think i have been traveld ?');

    switch (Travel) {
        case 'yes':
        case 'y':

            alert('Yes your answer is right ');
            score++;

            //console.log('right answer');
            break;
        case 'no':
        case 'n':

            alert('Unfortunately, your answer is wrong i  traveld more than once and i hope to do it again & again ');

            break;
    }
}
qusetion3();

function qusetion4() {
    let loveAnimals = prompt('do you think i love animals');
    switch (loveAnimals) {
        case 'yes':
        case 'y':

            alert('Unfortunately, your answer is wrong i dont love them');
            break;
        case 'no':
        case 'n':

            consle.log('that is  true', loveAnimals)
            alert(' Right , i do not love them , i fear them ')
            score++;
            break;
    }
}
qusetion4();
function qusetion5() {
    let guessMonth = prompt('Now try to guess my fav month of the year, you have just four chances');
    for (let i = 0; i < 3; i++) {
        if (Number(guessMonth) === 4) {
            alert('  you are guessed the month ')
            score++;
            //console.log(guessMonth) 
            break;
        }
        else if (Number(guessMonth) < 4) {
            guessMonth = prompt('too low, try another one ');
            console.log(guessMonth + "low ");  
        }
        else {
            guessMonth = prompt('too high, try another one ' );
           console.log(guessMonth + " high");   
        }
    }
    alert('The correct number is four')
}
qusetion5();


    function abc() {
        let Favsport = ['swimming', 'football', 'climbing', 'walking'];

        let whatMyFavsport = prompt(' Now try to guess my favorite sport, note  you have just 6 attempts');


        for (let i = 0; i < 5; i++) {

            if (whatMyFavsport === 'football' || whatMyFavsport === 'swimming' || whatMyFavsport === 'climbing' || whatMyFavsport === 'walking') {
                alert(' Great ,you are guessed my favorite sport');
                score++;
                break;
            }
            else if (whatMyFavsport !== 'football' || whatMyFavsport !== 'swimming' || whatMyFavsport !== 'climbing' || whatMyFavsport !== 'walking') {
                whatMyFavsport=prompt(' Unfortunately ,this is not my  favorite sport, try again');
            }
        }
    }

abc();

alert('you got' + score + '/7');
alert('Thank you for joinig my website , i hope you have fun ^-^')