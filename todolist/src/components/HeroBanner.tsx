import hero from "../assets/hero/hero.png";

function HeroBanner() {
  return (
    <>
      <div className="h-50 w-full overflow-hidden bg-linear-to-t from-indigo-600 to-sky-600">
        <img src={hero} className="h-[100%] w-full object-cover" />
      </div>
    </>
  );
}

export default HeroBanner;
