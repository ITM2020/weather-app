const getCurrentWeather = async (latitude, longitude) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_OW_DEV}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OW_KEY}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error)
    return error
  }
};

const getHourlyWeather = async (latitude, longitude) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_OW_PRO}lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OW_KEY}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error)
    return error
  }
};

const getThreeHrWeather = async (latitude, longitude) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_OW_DEV}/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OW_KEY}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error)
    return error
  }
};

const getDailyWeather = async (latitude, longitude) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_OW_DEV}/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OW_KEY}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error)
    return error
  }
};

export {
  getCurrentWeather,
  getHourlyWeather,
  getThreeHrWeather,
  getDailyWeather
};