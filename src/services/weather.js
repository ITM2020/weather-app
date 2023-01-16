export const getCurrentWeather = async (latitude, longitude) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_OW_DEV}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OW_KEY}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error)
    return error
  }
};