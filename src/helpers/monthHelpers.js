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

  export const addNullToMonth = month => {
    if (month<10) {
      return "0"+month;
    } else  return month;
  };
  