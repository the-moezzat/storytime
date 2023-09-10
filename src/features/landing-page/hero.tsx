import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <header className=" relative z-10 mx-auto w-full max-w-[1480px] overflow-hidden bg-[#171625] px-4 py-32 max-md:py-24">
      <div className="z-10 mx-auto w-10/12 text-center max-lg:w-11/12">
        <h1
          className={
            " mb-8 text-5xl font-bold leading-tight text-[#D1D0D3] max-lg:text-3xl max-md:mb-4 max-md:text-2xl"
          }
        >
          <span className="relative inline">
            Spark Imagination with{" "}
            <img
              src="/spark.svg"
              alt="spark"
              className="absolute -left-7 -top-2 h-8 w-8 max-md:h-6 max-md:w-6"
            />
          </span>
          <span className="bg-gradient-to-r from-[#FF9D6C] to-[#BB4E75] bg-clip-text text-[transparent]">
            AI-Powered
          </span>{" "}
          Storybook Adventures!
        </h1>

        <p className="mb-12 text-lg text-[#B2B1B6] max-lg:text-base max-md:mb-8 max-sm:text-sm">
          Welcome to our world of AI-powered storybooks for kids! Let AI and
          imagination blend seamlessly as we craft unique adventures tailored to
          your child's interests. Explore captivating stories that make reading
          an exciting and immersive experience. Join us on this extraordinary
          adventure where every page is a gateway to wonder. Start creating
          memories today
        </p>
        <Button
          size={"lg"}
          className=" h-12 w-44 rounded-lg bg-gradient-to-r from-blue-5 to-blue-4 p-4 shadow-lg"
        >
          Get started
        </Button>
      </div>

      <img
        src="/chat.svg"
        alt="chat"
        className="absolute right-20 top-20 -z-10 h-14 w-14 max-lg:h-10 max-lg:w-10 max-md:right-10 max-md:top-10 max-sm:right-5 max-sm:w-8 "
      />
      <img
        src="/face.svg"
        alt="chat"
        className="absolute bottom-40 left-20 -z-10 h-14 w-14 max-lg:h-10 max-lg:w-10 max-md:bottom-20 max-md:left-10 max-sm:left-5 max-sm:w-8 "
      />
      <div className="absolute left-10 top-14 -z-10 h-80 w-80 rounded-full bg-gradient-to-r from-[#FF6FD8] to-[#3813C2] blur-[120px]"></div>
      <div className="absolute -bottom-28 -right-10 -z-10 h-60 w-60 rounded-full bg-gradient-to-r from-[#CA54DC] to-[#028340] blur-[120px]"></div>
    </header>
  );
}
