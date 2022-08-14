import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
const Step4 = ({ formik, getFormErrorMessage, isFormFieldValid, t }) => {
  return (
    <>
      <p>
        {t('Home:let_us_know')}
      </p>
      <div className="field mt-2">
        <label
          htmlFor="date_arrivee_sejour"
          className={
            "mb-2" ||
            classNames({
              "p-error": isFormFieldValid("date_arrivee_sejour"),
            })
          }
        >
          {t('Home:arrival_date')}
        </label>
        <InputText
          value={formik.values.date_arrivee_sejour}
          onChange={formik.handleChange}
          id="date_arrivee_sejour"
          className={
            "shadow-none" ||
            classNames({
              "p-error": isFormFieldValid("date_arrivee_sejour"),
            })
          }
        />
        {getFormErrorMessage("date_arrivee_sejour")}
      </div>
      <div className="field mt-2">
        <label
          htmlFor="date_depart_sejour"
          className={
            "mb-2" ||
            classNames({
              "p-error": isFormFieldValid("date_depart_sejour"),
            })
          }
        >
          {t('Home:date_depart')}
        </label>
        <InputText
          value={formik.values.date_depart_sejour}
          onChange={formik.handleChange}
          id="date_depart_sejour"
          className={
            "shadow-none" ||
            classNames({
              "p-error": isFormFieldValid("date_depart_sejour"),
            })
          }
        />
        {getFormErrorMessage("date_depart_sejour")}
      </div>
      <p className="mt-4" style={{ fontWeight: "bold", fontSize: "12px" }}>
        {t('Home:note1')} <br />
        {t('Home:note2')}
      </p>
    </>
  );
};

export default Step4;
