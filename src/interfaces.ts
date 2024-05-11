export interface inputData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
export interface Banner_props {
  banner_cont_className: string;
  banner_type: "button" | "submit";
  children: JSX.Element;
  banner_onClick?: () => void;
}

export interface Form_props {
  formik: any;
  notify: () => void;
}

export interface Input_props {
  formik: string;
  onChange: () => void;
  value: string;
  onBlur: () => void;
  type: string;
  name: string;
  placeHolder: string;
}
