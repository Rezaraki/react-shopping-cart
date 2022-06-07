const Input = ({ label, name, formik, type = "text" }) => {
  return (
    <div className=" ">
      <label className="block" htmlFor={name}>
        {label}
      </label>
      <input
        className=" w-full  "
        id={name}
        type={type}
        {...formik.getFieldProps(name)}
        name={name}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="">
          <p className="text-red-900">{formik.errors[name]}</p>{" "}
        </div>
      )}
    </div>
  );
};

export default Input;
