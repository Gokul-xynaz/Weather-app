
export const getBackgroundImage = (condition) => {
    const lower = condition.toLowerCase();
    if (lower.includes("clear")) return "/backgrounds/clearsky.jpg";
    if (lower.includes("cloud")) return "/backgrounds/cloudy.jpg";
    if (lower.includes("rain") || lower.includes("drizzle")) return "/backgrounds/rain.jpg";
    if (lower.includes("thunderstorm")) return "/backgrounds/thunderstorm.jpg";
    if (lower.includes("snow")) return "/backgrounds/snow.jpg";
    if (lower.includes("mist") || lower.includes("fog") || lower.includes("haze")) return "/backgrounds/mist.jpg";
    return "/backgrounds/default.jpg";
  };
  
  export default getBackgroundImage;