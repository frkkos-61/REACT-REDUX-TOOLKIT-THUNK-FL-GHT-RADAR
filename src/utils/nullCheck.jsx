import { MdOutlineQuestionMark } from "react-icons/md";
import { style } from "./../../node_modules/@splidejs/splide/src/js/utils/dom/style/style";

const nullCheck = (value, color) => {
  return (
    value || (
      <MdOutlineQuestionMark style={{ color: color }} className="question" />
    )
  );
};

export default nullCheck;
