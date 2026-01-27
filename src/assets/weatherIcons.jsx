import sunnyIcon from '../assets/images/icon-sunny.webp';
import stormIcon from '../assets/images/icon-storm.webp';
import rainIcon from '../assets/images/icon-rain.webp';
import overcastIcon from '../assets/images/icon-overcast.webp';
import snowIcon from '../assets/images/icon-snow.webp';
import partlyCloudyIcon from '../assets/images/icon-partly-cloudy.webp';  
import fogIcon from '../assets/images/icon-fog.webp';
import drizzleIcon from '../assets/images/icon-drizzle.webp';

export const weatherCodeMap = {
  0: sunnyIcon,
  1: partlyCloudyIcon,
  2: partlyCloudyIcon,
  3: overcastIcon,
  45: fogIcon,
  48: fogIcon,
  51: drizzleIcon,
  53: drizzleIcon,
  55: drizzleIcon,
  56: drizzleIcon,
  57: drizzleIcon,
  61: rainIcon,
  63: rainIcon,
  65: rainIcon,
  66: rainIcon,
  67: rainIcon,
  71: snowIcon,
  73: snowIcon,
  75: snowIcon,
  77: snowIcon,
  80: rainIcon,
  81: rainIcon,
  82: rainIcon,
  85: snowIcon,
  86: snowIcon,
  95: stormIcon,
  96: stormIcon,
  99: stormIcon
};
