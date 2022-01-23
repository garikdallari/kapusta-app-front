const convertName = key => {
  if (key === 'utility_bills') {
    return 'bills';
  } else if (key === 'extra_income') {
    return 'extra';
  } else {
    return key;
  }
};

export default convertName;
