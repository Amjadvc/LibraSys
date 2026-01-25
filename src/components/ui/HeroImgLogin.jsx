function HeroImgLogin() {
  return (
    <div className="heroImg relative h-[25vh] w-full overflow-hidden md:h-screen md:w-1/2">
      <img
        src="/hero-login.jpg"
        alt="hero login"
        className="h-full w-full object-cover md:object-fill"
      />

      <div className="overlay absolute inset-0 bg-[#ffffff24]" />

      <div className="wav pointer-events-none absolute top-[0px] z-[60] h-[100%] w-full bg-[url('/wave-m.svg')] bg-cover bg-bottom bg-no-repeat sm:top-[70px] md:right-[-144px] md:top-0 md:h-full md:bg-[url('/wave-haikei.svg')] md:bg-right" />
    </div>
  );
}

export default HeroImgLogin;
