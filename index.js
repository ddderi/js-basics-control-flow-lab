let feet = 199;


function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
  return scuberGreetingForFeet = 'This one is on me!';
} else if (feet > 2000 && feet <= 2500) { 
  return scuberGreetingForFeet = 'I will gladly take your thirty bucks.';
} else {  
  return scuberGreetingForFeet = 'No can do.';
}
}


// switch(feet){
//   case 'This is on me':
//   feet  <= 400
//   break;
//   case 'I will gladly take your thirty bucks.':
//   feet > 2000 
//   break;
//   case 'No can do.':
//   feet > 2500
//   break;
// }
 let city;

function ternaryCheckCity(city){
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

let tip;

function switchOnCharmFromTip(tip){
  switch(tip){
    case tip = 'generous':
    return switchOnCharmFromTip = 'Thank you so much.'
    break;
    case tip = 'not as generous': 
    return switchOnCharmFromTip = 'Thank you.'
      break;
    case tip = 'thanks for everything':
    return switchOnCharmFromTip = "Bye."
      break;
  }
}