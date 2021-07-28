

let uname = prompt(' welcome to my website ,please enter your name ^^')
console.log('the user enter', uname);

let place = prompt('whare are you from ?')
console.log('the user enter', place)
alert(' welcome ' + v1 + ' from ' + v2 + 'lets play a guessing game , please answer by yes or no (y/n) ,have fun'
)

let food = promt('do you think i love food?');
switch (food) {
    case 'yes':
    case 'y'
 alert('that is right ! who is do not love food').toLocaleLowerCase;

        break;
    case 'no':
    case 'n':
        alert('no your answer is wrong definitely i love it !')
        break;
}

let Edishs = prompt('do i like try exotic dishes?').toLocaleLowerCase();
switch (Edishs) {
    case 'yes':
    case 'y':
        alert('sure i like try them');
        break;
    case 'no':
    case 'n':
        consle.log('that is not true', Edishs)
        alert('not right , i love exotic dishes')
        break;
}

let Travel = prompt(' Do yuo think i have been traveld ?').toLowerCase();

switch (Travel) {
    case 'yes':
    case 'y':
        alert('Yes your answer is right ');
        //console.log('right answer');
        break;
    case 'no':
    case 'n':
        alert('Unfortunately, your answer is wrong i  traveld more than once and i hope to do it again & again ');

        break;
}

let loveAnimals = prompt('do you think i love animals').toLocaleLowerCase();
switch (loveAnimals) {
    case 'yes':
    case 'y':
        alert('Unfortunately, your answer is wrong i dont love them');
        break;
    case 'no':
    case 'n':
        consle.log('that is  true', loveAnimals)
        alert(' Right , i do not love them , i fear them ')
        break;
}

let guessMonth = prompt('Now try to guess my fav month of the year, you have just four chances');

for (let i = 0; i < 3; i++) {
    if (guessMonth === 4) {
        alert('  you are guessed the month ')
        console.log(guessMonth);
        break;
    }
    else if (guessMonth < 4) {
        alert('too low');
        console.log(guessMonth);
    } else if (guessNumber > 4) {
        alert('too high');
        console.log(guessMonth);


        alert('The correct number is four')
    }

    let Favsport = ['swimming', 'football', 'climbing', 'walking'];

    let whatMyFavsport = prompt(' Now try to guess my favorite sport, note  you have just 6 attempts');

    for (let i = 0; i < 5; i++) {

        if (whatMyFavsport === 'football' || whatMyFavsport === 'swimming' || whatMyFavsport === 'climbing' || whatMyFavsport === 'walking') {
            alert(' Great ,you are guessed my favorite sport');

            break;
        }
        else if (whatMyFavsport !== 'football' || whatMyFavsport !== 'swimming' || whatMyFavsport !== 'climbing' || whatMyFavsport !== 'walking') {
            alert(' Unfortunately ,this is not my  favorite sport, try again');
        }
    }

    alert(`my favorite programming language is: Favsport );

alert('Congratulation we done here, thanks a lot for your time with us I hope you have a good time'); 

let score = 0;

if (food === 'yes' || food === 'y'){
  score = score + 1;
}

if (dishs === 'yes' || dishs === 'y')

  if (Travel=== 'yes' || Travel=== 'y'){
    score = score + 1;
  }

if (loveAnimals === 'no' || loveAnimals === 'n'){
  score = score + 1;
}


if (guessMonth === 4){
  score = score + 1;
}

if{ (whatMyFavsport) === ('swimming', 'football', 'climbing', 'walking')
  score = score + 1;
}
