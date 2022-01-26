const convertName = key => {
  switch (key.toLowerCase()) {
    case 'utility_bills':
      return 'bills';
      break;
    case 'extra_income':
        return 'extra';
        break;
        case 'home_stuff': 
        return 'home stuff';
        break; 
    default:
      return key;
      break;
  }}

export default convertName;
