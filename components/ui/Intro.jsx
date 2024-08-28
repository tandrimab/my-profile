import Image from "next/image";

export default function Intro() {
  return (
    <div className="overflow-hidden h-[100vh]">
      <div
        className="h-full w-full animate-bgAnimate content-center text-center bg-repeat-x backdrop-blur-sm"
        style={{ backgroundImage: "url('/assets/background/bg_top2.jpg')" }}
      >
        <div className=" content-center text-center h-max max-w-[1200px] bg-[rgba(0,0,0,0.4)] lg:mx-auto backdrop-blur-md rounded-[25px] wrapper sm:m-4 p-16">
            <Image
                src="/assets/images/profile_pic.jpg"
                width={300}
                height={300}
                className="rounded-full"
            />
          <div className="text-nowrap lg:text-[6rem] sm:text-[4rem]">{"<b>"}Hello, World!{"</b>"}</div>
          <div className="typing lg:text-[6rem] sm:text-[4rem] md:text-[4rem]">
            I'm <span className="text-blueText">Tandrima</span>
          </div>
        </div>
      </div>
    </div>
  );
}
