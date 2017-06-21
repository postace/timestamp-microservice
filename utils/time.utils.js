const monthsName = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
const ONLY_NUMBER = /^([0-9]*)$/;
/**
 * Parse a date string and return an object contain format and unix time
 */
function getDateObject(dateString) {
  // Check if this dateString only contains number
  let date;
  
  if (ONLY_NUMBER.test(dateString)) {
    date = new Date(Number(dateString) * 1000);
  } else {
    date = new Date(dateString);
  }
  
  let unix = null;
  let natural = null;
  
  let monthName = monthsName[date.getMonth()];
  
  if (date !== 'Invalid Date') {
    unix = date.getTime();
    natural = `${monthName} ${date.getDate()} ${date.getFullYear()}`;
  }
  
  return {unix, natural};
}



module.exports = {
  getDateObject
}



