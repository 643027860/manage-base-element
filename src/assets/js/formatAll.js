// 根据选择的语言版本，返回对应的文本数据
function formatLanguage (primaryLangID, English, Chinese) {
  return primaryLangID ? English : Chinese
}
// 获取年,月,日,时,分,秒,type为1时返回对象，为2是返回年-月-日 时:分:秒
function formatTime (dateTime, type = 1) {
  var year = dateTime.getFullYear()
  var month = dateTime.getMonth()
  var month1 = dateTime.getMonth() + 1
  var date = dateTime.getDate()
  var hour = dateTime.getHours()
  var minutes = dateTime.getMinutes()
  var second = dateTime.getSeconds()
  var day = dateTime.getDay()

  month = month > 9 ? month : '0' + month
  month1 = month1 > 9 ? month1 : '0' + month1
  date = date > 9 ? date : '0' + date
  hour = hour > 9 ? hour : '0' + hour
  minutes = minutes > 9 ? minutes : '0' + minutes
  second = second > 9 ? second : '0' + second

  if (type === 1) {
    return {year, month, month1, date, day, hour, minutes, second}
  } else if (type === 2) {
    return year + '-' + month1 + '-' + date + ' ' + hour + '-' + minutes + '-' + second
  }
}
export default {formatTime, formatLanguage}
