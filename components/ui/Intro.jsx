export default function Intro() {
  return (
    <div className="overflow-hidden h-[100vh]">
      <div
        className="h-full w-full animate-bgAnimate content-center text-center bg-repeat-x backdrop-blur-sm"
        style={{ backgroundImage: "url('/assets/background/bg_top2.jpg')" }}
      >
        <div className="text-[100px] content-center text-center h-[700px] max-w-[1200px] bg-[rgba(0,0,0,0.4)] mx-auto p-12 backdrop-blur-md rounded-[25px]">
          <p>Hello, World!</p>
          <p>I'm Tandrima</p>
        </div>
      </div>
    </div>
  );
}
