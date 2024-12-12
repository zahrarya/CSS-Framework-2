import { Button } from "./ui/button";

const SecondSection = () => {
  return (
    <section className="px-10 sm:px-20 md:px-36 lg:px-48 xl:px-60 ">
      <p className="text-center mb-10">Works with your technologies</p>
      <div className="flex justify-evenly mb-16">
        <img
          src="../../help/images/js.png"
          alt="js"
          className="hover:scale-125 transition-all"
        />
        <img
          src="../../help/images/ts.png"
          alt="js"
          className="hover:scale-125 transition-all"
        />
        <img
          src="../../help/images/react.png"
          alt="js"
          className="hover:scale-125 transition-all"
        />
        <img
          src="../../help/images/redux.png"
          alt="js"
          className="hover:scale-125 transition-all"
        />
        <img
          src="../../help/images/tailwind.png"
          alt="js"
          className="hover:scale-125 transition-all"
        />
        <img
          src="../../help/images/nextjs.png"
          alt="js"
          className="hover:scale-125 transition-all"
        />
      </div>
      <div className="bg-black text-white rounded-2xl text-center p-10 sm:px-20 md:px-36 lg:px-48 xl:px-60 ">
        <h5 className="mb-8 md:text-3xl lg:text-3xl xl:text-5xl ">
          Build faster websites
        </h5>
        <p className="mb-8">
          Pull content from anywhere and serve it fast with Astro's next-gen
          island architecture
        </p>
        <Button variant="outline" className="text-black">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default SecondSection;
