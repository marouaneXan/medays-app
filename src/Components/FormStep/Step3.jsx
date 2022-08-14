import React from "react";
import { classNames } from "primereact/utils";
import { InputTextarea } from "primereact/inputtextarea";
import { t } from "i18next";

const Step3 = ({formik, getFormErrorMessage, isFormFieldValid }) => {
  return (
    <>
      {/* <p style={{ fontWeight: "bold", fontSize: "14px" }}>
            Votre motivation pour le forum MEDays 2019
            </p> */}
      <div className="field mt-2">
        <label
          style={{ fontWeight: "bold", fontSize: "14px" }}
          htmlFor="motivation"
          className={
            "mb-4 label-title" || classNames({ "p-error": isFormFieldValid("motivation") })
          }
        >
          {t('Home:oppenion')}
        </label>
        <InputTextarea
          rows={5}
          cols={30}
          autoResize
          value={formik.values.motivation}
          onChange={formik.handleChange}
          id="motivation"
          className={
            "shadow-none" ||
            classNames({ "p-error": isFormFieldValid("motivation") })
          }
        />
        {getFormErrorMessage("motivation")}
      </div>
    </>
  );
};

export default Step3;
