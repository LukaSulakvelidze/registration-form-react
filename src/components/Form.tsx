import { Form_props } from "../interfaces";
import Banner from "./Banner";
import Input from "./Input";

const Form = ({ formik, notify }: Form_props) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center gap-[16px] mb-[68px] py-[24px] px-[8.6%] rounded-[10px] shadow bg-white xl:gap-[20px] xl:m-0 xl:py-[40px]"
    >
      <Input
        formik={formik.errors.firstname}
        onChange={formik.handleChange}
        value={formik.values.firstname}
        onBlur={formik.handleBlur}
        type="text"
        name="firstname"
        placeHolder="First Name"
      />

      <Input
        formik={formik.errors.lastname}
        onChange={formik.handleChange}
        value={formik.values.lastname}
        onBlur={formik.handleBlur}
        type="text"
        name="lastname"
        placeHolder="Last Name"
      />
      <Input
        formik={formik.errors.email}
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        type="email"
        name="email"
        placeHolder="Email Address"
      />

      <Input
        formik={formik.errors.password}
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        type="password"
        name="password"
        placeHolder="Password"
      />

      <Banner
        banner_onClick={notify}
        banner_cont_className={
          "w-full h-[56px] rounded-[5px] shadow-[0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset] bg-[#38cc8b]"
        }
        children={
          <p className="text-[15px] font-semibold tracking-[1px] text-center text-white">
            CLAIM YOUR FREE TRIAL
          </p>
        }
        banner_type={"submit"}
      />
      <p className="text-[11px] font-medium text-center w-[70%] mt-[-8px] text-[#bab7d4]">
        By clicking the button, you are agreeing to our
        <strong className="text-[#ff7979]">Terms and Services</strong>
      </p>
    </form>
  );
};

export default Form;
