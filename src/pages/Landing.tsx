import Banner from "../components/Banner";
import { useFormik } from "formik";
import { validation } from "../yup_validation/validatoinSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../components/Form";
import { inputData } from "../interfaces";
import { useState } from "react";

const Landing = () => {
  const [userData, setUserData] = useState<inputData[]>([]);
  const inputData: inputData = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: inputData,
    onSubmit: (values) => {
      setUserData((prev) => [...prev, values]);
      console.log(userData);
    },
    validationSchema: validation,
  });

  const notify = () => {
    if (Object.keys(formik.errors).length || !formik.values.firstname) {
      toast.error("Fail", {
        position: "top-left",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Success", {
        position: "top-left",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="flex flex-col gap-[64px] w-[90%] mt-[88px] lg:mt-[121px] lg:w-[691px] xl:w-[1110px] xl:justify-center xl:flex-row xl:gap-[45px] xl:mb-[121px]">
      <ToastContainer />
      <div className="xl:mt-[169px]">
        <h1 className="text-[28px] font-bold leading-9 text-center text-white xl:text-[50px] xl:leading-[55px] xl:text-start xl:w-[525px]">
          Learn to code by watching others
        </h1>
        <h2 className="font-medium leading-[26px] text-center m-[0] mt-[16px] text-white xl:text-start xl:mt-[12px]">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </h2>
      </div>

      <div className="flex flex-col gap-[24px] xl:w-[540px]">
        <Banner
          banner_cont_className={
            "flex items-center justify-center w-full h-[88px] rounded-[10px] shadow-[ 0px 8px 0px 0px rgba(0, 0, 0, 0.15)] bg-[#5e54a4] xl:w-[540px] xl:h-[60px] "
          }
          children={
            <p className="text-[15px] font-normal leading-7 text-center w-[52%] text-white xl:w-[316px] ">
              <strong>Try it free 7 days </strong> then $20/mo. thereafter
            </p>
          }
          banner_type={"button"}
        />

        <Form formik={formik} notify={notify} />
      </div>
    </div>
  );
};

export default Landing;
