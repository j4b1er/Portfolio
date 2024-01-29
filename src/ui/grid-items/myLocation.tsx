import styles from "@/ui/grid-items/grid-item.module.css";

const url = `https://api.openweathermap.org/data/2.5/weather?zip=20886,us&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

const weatherConditions = [
  {
    iconday: "01d",
    iconnight: "01n",
    sunmoon: true,
    pos: "",
  },
  {
    iconday: "02d",
    iconnight: "02n",
    sunmoon: true,
    pos: "-100px",
  },
  {
    iconday: "03d",
    iconnight: "03n",
    sunmoon: true,
    pos: "-40px",
  },
  {
    iconday: "04d",
    iconnight: "04n",
    sunmoon: false,
    pos: "-10px",
  },
  {
    iconday: "09d",
    iconnight: "09n",
    sunmoon: false,
    pos: "-10px",
  },
  {
    iconday: "10d",
    iconnight: "10n",
    sunmoon: true,
    pos: "-40px",
  },
  {
    iconday: "11d",
    iconnight: "11n",
    sunmoon: false,
    pos: "-10px",
  },
  {
    iconday: "13d",
    iconnight: "13n",
    sunmoon: false,
    pos: "-10px",
  },
  {
    iconday: "50d",
    iconnight: "50n",
    sunmoon: false,
    pos: "-10px",
  },
];

async function getWeatherData() {
  const res = await fetch(url, { next: { revalidate: 5 } });
  return res.json();
}

export default async function MyLocation() {
  const { weather, main, wind, clouds, sys, name } = await getWeatherData();
  const dayNight = weather[0].icon.split("")[2] === "d" ? "day" : "night";
  // const dayNight = "night";
  const { sunmoon, pos } = weatherConditions.filter(
    (condition) =>
      condition.iconday === weather[0].icon ||
      condition.iconnight === weather[0].icon
  )[0];

  return (
    <div
      className={`${styles.gridItem} ${styles.myLocation}`}
      data-time={dayNight}>
      <div className={`${styles.flexContainer}`}>
        <div className={`${styles.gridItem__header}`}>
          <div className="componentIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
          </div>
          <h3>My Location Weather</h3>
        </div>

        <div className={styles.myLocation__tempCity}>
          <div className={styles.myLocation__tempCity___temp}>
            {Math.round(main.temp)}°
          </div>
          <div className={styles.myLocation__tempCity___city}>{name}</div>
        </div>

        <div className={styles.myLocation__extraInfo}>
          <div className={styles.myLocation__extraInfo___details}>
            <p>{Math.round(main.feels_like)}°</p>
            <p>Feels like</p>
          </div>
          {/* <div className={styles.myLocation__extraInfo___details}>
            <p>{Math.round(main.humidity)}%</p>
            <p>Humidity</p>
          </div> */}
          <div className={styles.myLocation__extraInfo___details}>
            <p>{Math.round(wind.speed)} MPH</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
      {sunmoon && <div className={styles.myLocation__MoonSun}></div>}
      <div className={styles.myLocation__LeftCloud} style={{ left: pos }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                className={styles.myLocation__LeftCloud___topGradient}
                offset="60%"
              />
              <stop
                className={styles.myLocation__LeftCloud___bottomGradient}
                offset="100%"
              />
            </linearGradient>
          </defs>
          <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
        </svg>
      </div>
      <div className={styles.myLocation__RightCloud} style={{ right: pos }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
        </svg>
      </div>
    </div>
  );
}
