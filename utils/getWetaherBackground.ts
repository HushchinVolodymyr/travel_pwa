export default function getWeatherBackground(condition?: number): {
  videoSrc: string;
  borderColor: string;
} {
  if (!condition) {
    return { videoSrc: '', borderColor: '' };
  }

  const hundred = Math.floor(condition / 100) * 100; // округляем вниз до сотни

  switch (hundred) {
    // OK
    case 800:
      if (condition === 800) {
        return {
          videoSrc: '/weather/sunny.mp4',
          borderColor: 'border-blue-700',
        };
      }
      break;
    // OK
    case 200:
      return {
        videoSrc: '/weather/thunderstorm.mp4',
        borderColor: 'border-black',
      };
    // OK
    case 300:
      return {
        videoSrc: '/weather/drizzle.mp4',
        borderColor: 'border-gray-500',
      };
    // OK
    case 500:
      return { videoSrc: '/weather/rain.mp4', borderColor: 'border-gray-500' };

    case 600:
      return { videoSrc: '/weather/snow.mp4', borderColor: 'border-slate-400' };
    case 700:
      return { videoSrc: '/weather/fog.mp4', borderColor: 'border-blue-700' };
    case 801:
    case 802:
    case 803:
    case 804:
      return {
        videoSrc: '/weather/clouds.mp4',
        borderColor: 'border-blue-700',
      };
    default:
      return {
        videoSrc: '/weather/default.mp4',
        borderColor: 'border-blue-700',
      };
  }

  return { videoSrc: '/weather/default.mp4', borderColor: 'border-blue-700' };
}
