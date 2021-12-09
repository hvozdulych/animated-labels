export const getRandomInt = (maxValue, minValue = 0) =>
  Math.floor(Math.random() * (maxValue - minValue) + minValue)

export const getRandomValueFromArray = arr => {
  const randomInt = getRandomInt(arr.length)

  return arr[randomInt]
}
