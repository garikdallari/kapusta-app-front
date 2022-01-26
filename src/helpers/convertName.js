const convertName = key => {
  const keyX=key.toLowerCase();
  switch ( keyX) {
    case 'utility_bills':
      return 'bills';
    case 'extra_income':
      return 'extra';
    case 'home_stuff':
      return 'home stuff';
    default:
      return key;
  }
};

export default convertName;
