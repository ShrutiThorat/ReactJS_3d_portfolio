import BallCanvas from "../canvas/Ball";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden w-max rounded-md bg-gray-800 px-3 py-1 text-sm text-white shadow-lg group-hover:block">
        {text}
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <Tooltip text={technology?.name}>
            <div className="w-28 h-28" key={technology?.name}>
              <BallCanvas icon={technology?.icon} />
            </div>
          </Tooltip>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
