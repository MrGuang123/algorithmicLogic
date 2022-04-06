// https://bigfrontend.dev/zh/problem/the-angle-between-hour-hand-and-minute-hand-of-a-clock

function angle(time) {
  let [hour, minute] = time.split(':');

  const anglePerMinute = 360 / 60
  const minuteAngle = 360 - minute * anglePerMinute

  const hourOffset = +hour % 12
  const anglePerHour = 360 / 12
  const hourAngle = 360 - hourOffset * anglePerHour - (minute / 60 * 30)

  const differAngle = Math.abs(hourAngle - minuteAngle)
  const resultAngle = differAngle > 180 ? 360 - differAngle : differAngle

  return Math.ceil(resultAngle)
}