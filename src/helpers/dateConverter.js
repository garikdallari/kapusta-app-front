import moment from 'moment';
export const convertDate=(date, format, split)=>{
const newConvertDate= moment(date).format(format).split(split);
const [year, month, day]=newConvertDate;
return {day,month,year}}
