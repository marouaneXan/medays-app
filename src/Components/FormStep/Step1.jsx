import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Dropdown } from "primereact/dropdown";
import {Calendar} from 'primereact/calendar';
import { countries } from "../../data/countries";
const Step1 = ({formik,getFormErrorMessage,isFormFieldValid,t}) => {
  
  return (
    <>
      <div className="d-flex" style={{ width: "280px" }}>
        <div className="col">
          <RadioButton
            value={t("Home:Madam")}
            name="genre"
            onChange={formik.handleChange}
            checked={formik.values.genre === t("Home:Madam")}
          />
          <label htmlFor={t("Home:Madam")} className="label-title" style={{ marginLeft: "8px" }}>
            {t("Home:Madam")}
          </label>
        </div>
        <div className="col">
          <RadioButton
            name="genre"
            value={t("Home:Mister")}
            onChange={formik.handleChange}
            checked={formik.values.genre === t("Home:Mister")}
          />
          <label htmlFor={t("Home:Mister")} className="label-title" style={{ marginLeft: "8px" }}>
            {t("Home:Mister")}
          </label>
        </div>
      </div>
      {getFormErrorMessage("genre")}
      <div className="field mt-3">
        <label
          htmlFor={t("Home:Fname")}
          className={
            "mb-2 label-title" || classNames({ "p-error": isFormFieldValid("prenom") })
          }
        >
          {t("Home:Fname")}
        </label>
        <InputText
          value={formik.values.prenom}
          onChange={formik.handleChange}
          id="prenom"
          className={
            "shadow-none" ||
            classNames({ "p-error": isFormFieldValid("prenom") })
          }
        />
        {getFormErrorMessage("prenom")}
      </div>
      <div className="field mt-2">
        <label
          htmlFor={t("Home:Lname")}
          className={
            "mb-2 label-title" || classNames({ "p-error": isFormFieldValid("nom") })
          }
        >
          {t("Home:Lname")}
        </label>
        <InputText
          value={formik.values.nom}
          onChange={formik.handleChange}
          id="nom"
          className={
            "shadow-none" || classNames({ "p-error": isFormFieldValid("nom") })
          }
        />
        {getFormErrorMessage("nom")}
      </div>
      <div className="field mt-2">
        <label
          htmlFor={t("Home:organisation")}
          className={
            "mb-2 label-title" || classNames({ "p-error": isFormFieldValid("organisme") })
          }
        >
          {t("Home:organisation")}
        </label>
        <InputText
          value={formik.values.organisme}
          onChange={formik.handleChange}
          id="organisme"
          className={
            "shadow-none" ||
            classNames({ "p-error": isFormFieldValid("organisme") })
          }
        />
        {getFormErrorMessage("organisme")}
      </div>
      <div className="field mt-2">
        <label
          htmlFor={t("Home:title")}
          className={
            "mb-2 label-title" || classNames({ "p-error": isFormFieldValid("fonction") })
          }
        >
          {t("Home:title")}
        </label>
        <InputText
          value={formik.values.fonction}
          onChange={formik.handleChange}
          id="fonction"
          className={
            "shadow-none" ||
            classNames({ "p-error": isFormFieldValid("fonction") })
          }
        />
        {getFormErrorMessage("fonction")}
      </div>
      <div className="field mt-2">
        <label
          htmlFor={t("Home:citizenship")}
          className={
            "mb-2 label-title" || classNames({ "p-error": isFormFieldValid("nationalite") })
          }
        >
          {t("Home:citizenship")}
        </label>
        <Dropdown
          value={formik.values.nationalite}
          onChange={formik.handleChange}
          id="nationalite"
          options={countries}
          className={
            "shadow-none" ||
            classNames({ "p-error": isFormFieldValid("nationalite") })
          }
          placeholder="Sélectionnez une ville"
        />
        {getFormErrorMessage("nationalite")}
      </div>
      <div className="field mt-2">
        <label
          htmlFor="date_naissance"
          className={
            "mb-2 label-title" ||
            classNames({ "p-error": isFormFieldValid("date_naissance") })
          }
        >
          {t("Home:nissance")}
        </label>
        <Calendar
          value={formik.values.date_naissance}
          onChange={formik.handleChange}
          id="date_naissance"
          className={classNames({
            "p-error": isFormFieldValid("date_naissance"),
          })}
          placeholder={t("Home:date")}
        />
        {getFormErrorMessage("date_naissance")}
      </div>
    </>
  );
};

export default Step1;
