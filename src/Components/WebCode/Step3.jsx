import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Dropdown } from "primereact/dropdown";
const Step3 = ({ formik, getFormErrorMessage, isFormFieldValid, t }) => {
  const horaireOptions = ["Matin", "Après-midi", "Soir"];
  return (
    <>
      <p style={{ fontWeight: "bold", fontSize: "14px" }}>
        {t("Home:arrival_flight")}
      </p>
      <div className="field mt-2">
        <label
          htmlFor="email"
          className={
            "mb-2 label-title" || classNames({ "p-error": isFormFieldValid("email") })
          }
        >
          {t("Home:arrival_date")}
        </label>
        <InputText
          value={formik.values.date_arrivee}
          onChange={formik.handleChange}
          id="date_arrivee"
          className={
            "shadow-none" ||
            classNames({ "p-error": isFormFieldValid("date_arrivee") })
          }
        />
        {getFormErrorMessage("date_arrivee")}
      </div>
      <div className="field mt-2">
        <label
          htmlFor="horaire"
          className={
            "mb-2 label-title" || classNames({ "p-error": isFormFieldValid("pays") })
          }
        >
          {t("Home:schedule")}
        </label>
        <Dropdown
          value={formik.values.horaire_arrivee}
          onChange={formik.handleChange}
          id="horaire_arrivee"
          options={horaireOptions}
          className={
            "shadow-none" ||
            classNames({ "p-error": isFormFieldValid("horaire_arrivee") })
          }
          placeholder={horaireOptions[0]}
        />
        {getFormErrorMessage("horaire_arrivee")}
      </div>
      <div className="field mt-2">
        <label
          htmlFor="aeroport_provenance"
          className={
            "mb-2 label-title" ||
            classNames({
              "p-error": isFormFieldValid("aeroport_provenance"),
            })
          }
        >
          {t("Home:airport_origin")}
        </label>
        <InputText
          value={formik.values.aeroport_provenance}
          onChange={formik.handleChange}
          id="aeroport_provenance"
          className={
            "shadow-none" ||
            classNames({
              "p-error": isFormFieldValid("aeroport_provenance"),
            })
          }
        />
        {getFormErrorMessage("aeroport_provenance")}
      </div>
      <p className="mt-3" style={{ fontWeight: "bold", fontSize: "14px" }}>
        {t("Home:depart_flight")}
      </p>
      <div className="field mt-2">
        <label
          htmlFor="date_depart"
          className={
            "mb-2 label-title" || classNames({ "p-error": isFormFieldValid("date_depart") })
          }
        >
          {t("Home:date_depart")}
        </label>
        <InputText
          value={formik.values.date_depart}
          onChange={formik.handleChange}
          id="date_depart"
          className={
            "shadow-none" ||
            classNames({ "p-error": isFormFieldValid("date_depart") })
          }
        />
        {getFormErrorMessage("date_depart")}
      </div>
      <div className="field mt-2">
        <label
          htmlFor="horaire_depart"
          className={
            "mb-2 label-title" || classNames({ "p-error": isFormFieldValid("pays") })
          }
        >
          {t("Home:schedule")}
        </label>
        <Dropdown
          value={formik.values.horaire_depart}
          onChange={formik.handleChange}
          id="horaire_depart"
          options={horaireOptions}
          className={
            "shadow-none" ||
            classNames({ "p-error": isFormFieldValid("horaire_depart") })
          }
          placeholder={horaireOptions[0]}
        />
        {getFormErrorMessage("horaire_depart")}
      </div>
      <div className="field mt-2">
        <label
          htmlFor="aeroport_provenance"
          className={
            "mb-2 label-title" ||
            classNames({
              "p-error": isFormFieldValid("aeroport_provenance"),
            })
          }
        >
          {t("Home:destination")}
        </label>
        <InputText
          value={formik.values.aeroport_destination}
          onChange={formik.handleChange}
          id="aeroport_destination"
          className={
            "shadow-none" ||
            classNames({
              "p-error": isFormFieldValid("aeroport_destination"),
            })
          }
        />
        {getFormErrorMessage("aeroport_destination")}
      </div>
    </>
  );
};

export default Step3;
