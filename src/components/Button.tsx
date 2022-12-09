import { FC } from "react";
interface Props {
  color: string;
  rounding: string;
  width?: string;
}

const Button: FC<Props> = ({ color, rounding, width }) => {
  const style: any = {
    backgroundColor: color,
    borderRadius: rounding,
    width: width,
  };
  return (
    <button
      style={style}
      className="py-2  text-center hover:text-white hover:opacity-[80%]"
    >
      Add To Cart
    </button>
  );
};

export default Button;
