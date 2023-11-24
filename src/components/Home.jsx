export default function Home() {
  return (
    <div
      id="home"
      className={`bg-home-base w-full h-[100vh] bg-home bg-no-repeat bg-cover center-layout relative`}
    >
      <h1 className="text-[10.5rem] font-black text-white">IMMOBILIER</h1>
      <div className={`bg-home-masked w-full h-[100vh] bg-home bg-no-repeat bg-cover absolute center-layout`}>
        <h1 className="text-[10.5rem] font-black text-transparent stroke-home">IMMOBILIER</h1>
      </div>
      <div className="w-full h-[100vh] bg-gradient-to-t from-[rgba(0,0,0,.20)] to-transparent absolute"></div>
    </div>
  );
}
