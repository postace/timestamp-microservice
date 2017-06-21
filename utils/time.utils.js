const monthsName = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Parse a date string and return an object contain format and unix time
 */
function getDateObject(dateString) {
  // Check if this dateString only contains number
  let date = new Date(dateString);
  let unix;
  let natural;
  
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



