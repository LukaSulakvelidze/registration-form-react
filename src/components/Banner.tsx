import { Banner_props } from "../interfaces";

const Banner = ({
  banner_onClick,
  banner_cont_className,
  banner_type,
  children,
}: Banner_props) => {
  return (
    <button
      onClick={banner_onClick}
      className={banner_cont_className}
      type={banner_type}
    >
      {children}
    </button>
  );
};

export default Banner;
