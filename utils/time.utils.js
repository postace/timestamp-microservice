const monthsName = ['January', ''];

/**
 * Parse a date string and return an object contain format and unix time
 */
function getDateObject(dateString) {
  
  let date = new Date(dateString);
  let unix;
  let natural;
  
  if (date !== 'Invalid Date') {
    unix = date.getTime();
    natural = `${date.getMonth() + 1} ${date.getDate()} ${date.getFullYear()}`;
  }
  
  return {unix, natural};
}



module.exports = {
  getDateObject
}



