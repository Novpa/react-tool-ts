import hero from "../assets/hero/hero.png";

function HeroBanner() {
  return (
    <>
      <div className="h-50 w-full overflow-hidden bg-linear-to-t from-indigo-600 to-sky-600 md:h-60">
        <img src={hero} className="h-full w-full object-cover" />
      </div>
    </>
  );
}

export default HeroBanner;
