const monthes = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  export const getMonthName = monthNumber => {
    let monthName = '';
    monthes.forEach((name, i) => {
      if ((i+1) === Number(monthNumber)) monthName = name;
    });
    return monthName;
  };

  export const addNullToNumber = number => {
    if (number<10) {
      return "0"+number;
    } else  return number;
  };
  