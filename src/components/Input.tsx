import Exclamation_icon from "../assets/Exclamation_icon.png";
import { Input_props } from "../interfaces";

const Input = ({
  formik,
  onChange,
  value,
  onBlur,
  type,
  name,
  placeHolder,
}: Input_props) => {
  return (
    <div className="flex flex-col gap-[15px] w-full">
      <input
        style={{
          background:
            formik && `url(${Exclamation_icon}) no-repeat right 27px top 16px`,
        }}
        className={`text-[14px] font-semibold h-[56px] rounded-[5px] pl-[19px] tracking-[.25px] outline-[#5e54a4] border-[1px] border-solid ${
          !formik ? "border-[#dedede]" : "border-[#ff7979]"
        }  {text-[#3d3b48] placeholder:text-[#3d3b48]`}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        type={type}
        name={name}
        placeholder={placeHolder}
      />
      {formik && (
        <p className="self-end text-[11px] font-medium text-right italic mt-[-10px] mr-10% text-[#ff7979] ">
          {formik}
        </p>
      )}
    </div>
  );
};

export default Input;
