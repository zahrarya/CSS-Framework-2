import { Button } from "./ui/button";

const FirstSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center mt-8 mx-4 lg:mx-16">
      <div className="w-full lg:w-2/4 flex flex-col mt-10 lg:mt-20 lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Scalable Apps with Frameworks
        </h1>
        <p className="text-md sm:text-lg mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          voluptate et neque earum iste hic consequatur nulla deserunt
          architecto numquam!
        </p>
        <div className="flex lg:justify-start">
          <Button className="mr-4">Download for Free</Button>
          <Button variant="outline">Github Repo</Button>
        </div>
      </div>

      <div className="w-full lg:w-2/4 flex justify-center">
        <img
          src="../../help/images/hero-source.svg"
          alt="Hero Image"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default FirstSection;
