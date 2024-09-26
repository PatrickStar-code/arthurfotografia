import Marquee from "@/components/magicui/marquee";

const logos = [
  {
    name: "Microsoft",
    img: "https://picsum.photos/id/1/200/300",
  },
  {
    name: "Apple",
    img: "https://picsum.photos/id/2/200/300",
  },
  {
    name: "Google",
    img: "https://picsum.photos/id/3/200/300",
  },
  {
    name: "Facebook",
    img: "https://picsum.photos/id/4/200/300",
  },
  {
    name: "LinkedIn",
    img: "https://picsum.photos/id/5/200/300",
  },
  {
    name: "Twitter",
    img: "https://picsum.photos/id/6/200/300",
  },
];

const Marquee3D = () => {
  return (
    <div className="relative flex h-full w-96 flex-col items-center justify-center gap-4 overflow-hidden px-20">
      <div className="flex flex-row gap-4 [perspective:300px]">
        <Marquee
          className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {logos.map((data, idx) => (
            <div
              key={idx}
              className="relative flex w-[220px] h-[150px] bg-transparent rounded-lg border-4 border-black shadow-xl mb-4"
              style={{
                clipPath:
                  "polygon(10% 0%, 90% 0%, 100% 15%, 100% 85%, 90% 100%, 10% 100%, 0% 85%, 0% 15%)",
              }}
            >              

              {/* Círculos simulando os buracos de filme */}
              <div className="absolute top-1/2 left-[-12px] w-4 h-4 bg-black border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 right-[-12px] w-4 h-4 bg-black border-2 border-white rounded-full"></div>

              <img
                src={data.img}
                alt={data.name}
                className="w-full h-full object-cover rounded-lg"
              />

              
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Marquee3D;
