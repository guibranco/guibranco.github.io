import { Flag } from "./Flag";
import mercosurFlag from "../../assets/mercosur.svg";

const WorkPermit = () => {
  return (
    <div className="text-center">
      <ul className="inline-flex flex-col gap-4 mx-auto">
        <li className="flex items-center justify-center gap-2">
          <Flag country="Portuguese passport" code="pt" /> -{" "}
          <Flag country="European Union" code="eu" />
        </li>
        <li className="flex items-center justify-center gap-2">
          <Flag country="Brazilian passport" code="br" /> -{" "}
          <span className="inline-flex items-center">
            Mercosur <img src={mercosurFlag} alt="Mercosur flag" className="w-4 h-4 ml-2" />
          </span>
        </li>
      </ul>
      <p className="text-sm text-gray-300 mt-4">* No sponsorship required</p>
    </div>
  );
};

export default WorkPermit;
