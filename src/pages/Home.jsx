import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useTranslation } from "react-i18next";
import { classNames } from "primereact/utils";
import { useFormik } from "formik";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const Home = () => {
  const [err,setErr]=useState(null)
  const redirect=useNavigate()
  const [formData,setFormData]=useState()
  const formik = useFormik({
    initialValues: {
      code_perso: "",
    },
    validate: (data) => {
      const error={};
      if (!data.code_perso) {
        error.code_perso = "Ce champs est requis";
      }
      return error;
    },
    onSubmit: (data) => {
      if(formik.values.code_perso==="foBvmyMIuU"){
        setFormData(data);
        localStorage.setItem('code_personnel',formik.values.code_perso)
        redirect('steptow')
      }else{
        setErr('Le code personnel est incorrect')
      }
    },
  });
  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };
  const { t } = useTranslation();
  return (
    <>
      <div className="row mb-5">
        <div className="col">
          <Card
            className="p-5 mt-5 shadow bg-light"
            style={{ height: "420px" }}
          >
            {/* <p className="text-center mt-3 text-sm-center">
              {t('Home:leftDescription1_mssg')} <br /> MEDays2019.
            </p>
            <p className="text-center">
              {t('Home:leftDescription2_mssg')} <br /> {t('Home:votreProfile_mssg')}.
            </p> */}
            <div className="d-flex flex-column align-items-center ">
              <div
                className="text-center text-sm-center p-3"
                style={{ width: "80%" }}
              >
                {t("Home:leftDescription1_mssg")}
              </div>
              <div
                className="text-center text-sm-center p-3"
                style={{ width: "80%" }}
              >
                {t("Home:leftDescription2_mssg")}
              </div>
            </div>

            <div className="d-flex flex-column align-items-center">
              <Link to={"/steptow"} style={{ textDecoration: "none" }}>
                <Button
                  style={{ width: "300px" }}
                  label={t("Home:Particip_btn")}
                  className="p-button-secondary p-button-rounded shadow-none"
                />
              </Link>
              <Link
                to={"/steptow"}
                className="mt-2"
                style={{ textDecoration: "none" }}
              >
                <Button
                  style={{ width: "300px" }}
                  label={t("Home:press_btn")}
                  className="btn-dark p-button-rounded shadow-none"
                />
              </Link>
            </div>
          </Card>
        </div>
        <div className="col-sm-1 d-sm-flex align-items-sm-center justify-content-sm-center">
          <h5
            className="text-center mt-5"
            style={{ fontWeight: "bold", fontFamily: "roboto" }}
          >
            OU
          </h5>
        </div>
        <div className="col">
          <Card
            className="p-5 mt-5 bg-light shadow"
            style={{ height: "420px" }}
          >
            <p className=" mt-3 text-center">
              {t("Home:rightDescription_mssg")} <br />{" "}
              {t("Home:rightDiscr2_mssg")}
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column w-100 field mt-2">
                  <label
                    htmlFor="code_perso"
                    className={
                      "mb-2" ||
                      classNames({ "p-error": isFormFieldValid("prenom") })
                    }
                    style={{ fontWeight: "bold" }}
                  >
                    {t("Home:personalCode_txt")}
                  </label>
                  <InputText
                  value={formik.values.prenom}
                  onChange={formik.handleChange}
                    name="code_perso"
                    id="code_perso"
                    className={
                      "shadow-none w-100" ||
                      classNames({ "p-error": isFormFieldValid("code_perso") })
                    }
                  />
                  {getFormErrorMessage("code_perso")}
                  {err &&<small className="p-error">{err}</small>}
                </div>
                  <Button
                    label={t("Home:next_btn")}
                    className="p-button-secondary w-100 p-button-rounded shadow-none mt-3"
                    type="submit"
                  />
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
