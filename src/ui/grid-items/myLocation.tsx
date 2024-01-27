import styles from "@/ui/grid-items/grid-item.module.css";

const url = `https://api.openweathermap.org/data/2.5/weather?zip=20886,us&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

async function getData() {
  const res = await fetch(url);

  return res.json();
}

export default async function MyLocation() {
  const { main, clouds, sys, name } = await getData();

  return (
    <div className={`${styles.gridItem} ${styles.myLocation}`}>
      <div className={`${styles.flexContainer}`}>
        <div className={`${styles.gridItem__header}`}>
          <div className="componentIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
          </div>
          <h3>My Location</h3>
        </div>
        <div className={`${styles.colorTheme__content}`}>
          <p>{Math.floor(main.temp)}°</p>
          <p>{name}, MD</p>
        </div>
      </div>
    </div>
  );
}
