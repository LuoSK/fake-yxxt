(function() {
  function formate(str) {
    return (str + '').padStart(2, '0')
  }
  const time = new Date()
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const day = time.getDate()
  var monthDays = new Date(year, month, 0).getDate() // 当前月天数
  var startString = `${year}-${formate(month)}-01 08:00:00`
  var endString = `${year}-${formate(month)}-${formate(monthDays)} 23:00:00`
  const startTime = new Date(startString)
  const applyTime = new Date(startTime.setDate(0)) // 申请时间（默认为开始时间的前一天）
  const applyYear = applyTime.getFullYear()
  const applyMonth = applyTime.getMonth() + 1
  const applyDate = applyTime.getDate()
  const applyString = `${applyYear}-${formate(applyMonth)}-${formate(applyDate)} 11:01:48`
  document.getElementById('s').innerText = startString
  document.getElementById('e').innerText = endString
  document.getElementById('a').innerText = applyString
  const t = document.getElementById('t')
  t && (t.innerText = `${startString} - ${endString} + （720小时）`)
})()