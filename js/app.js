    
     let uname =prompt('please enter your name ^^')
     console.log('the user enter', uname);
     
     let place =prompt('whare are you from ?')
     console.log('the user enter', place)
     alert(' welcom ' + v1 + ' from ' + v2);
     
     let dish =prompt('what your traditional dish?')
     console.log('the user enter' ,dish)
     
     let Edishs =prompt('do i like try exotic dishes?').toLocaleLowerCase();
     switch(Edishs){
         case 'yes':
        case 'y':
      alert('sure i like try them');
      break;
      case 'no':
       case'n':
       consle.log('that is not true',Edishs)         
       alert('not right , i love exotic dishes')
       break;
     }
        alert('Thanks for join my website')
