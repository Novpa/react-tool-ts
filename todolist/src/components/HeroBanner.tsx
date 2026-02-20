import light from "../assets/hero/hero.png";
import dark from "../assets/hero/dark.jpg";

type HeroBannerProps = {
  isDarkTheme: boolean;
};
function HeroBanner({ isDarkTheme }: HeroBannerProps) {
  return (
    <>
      <div className="h-50 w-full overflow-hidden bg-linear-to-t from-indigo-600 to-sky-600 md:h-60">
        <img
          src={isDarkTheme ? dark : light}
          className="h-full w-full object-cover"
        />
      </div>
    </>
  );
}

export default HeroBanner;
