import SelectDemo from "../components/SelectBox";
import { Button } from "../components/ui/button";

const Navnbar = () => {
  return (
    <>
      <nav className="flex justify-around mt-5">
        <h4>Tailwind css</h4>

        <div className="flex justify-between w-96 text-center	">
          <SelectDemo />
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex justify-between w-44">
          <Button variant="outline">log in</Button>
          <Button>sign up</Button>
        </div>
      </nav>
    </>
  );
};

export default Navnbar;
