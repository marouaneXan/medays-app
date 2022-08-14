import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Dropdown } from "primereact/dropdown";
import { countries } from "../../data/countries";
const Step2 = ({formik,getFormErrorMessage,isFormFieldValid,t}) => {
  return (
    <>
            <div className="field mt-2">
              <label
                htmlFor="pays"
                className={
                  "mb-2 label-title" || classNames({ "p-error": isFormFieldValid("pays") })
                }
              >
                {t('Home:coutry_res')}
              </label>
              <Dropdown
                value={formik.values.pays}
                onChange={formik.handleChange}
                id="pays"
                options={countries}
                className={
                  "shadow-none" ||
                  classNames({ "p-error": isFormFieldValid("pays") })
                }
                placeholder="Sélectionnez un pays"
              />
              {getFormErrorMessage("pays")}
            </div>
            <div className="field mt-2">
              <label
                htmlFor="ville"
                className={
                  "mb-2 label-title" || classNames({ "p-error": isFormFieldValid("ville") })
                }
              >
                {t('Home:city')}
              </label>
              <InputText
                value={formik.values.ville}
                onChange={formik.handleChange}
                id="ville"
                className={
                  "shadow-none" ||
                  classNames({ "p-error": isFormFieldValid("ville") })
                }
              />
              {getFormErrorMessage("ville")}
            </div>
            <div className="field mt-2">
              <label
                htmlFor="email"
                className={
                  "mb-2" || classNames({ "p-error": isFormFieldValid("email") })
                }
              >
                Email
              </label>
              <InputText
                value={formik.values.email}
                onChange={formik.handleChange}
                id="email"
                className={
                  "shadow-none" ||
                  classNames({ "p-error": isFormFieldValid("email") })
                }
              />
              {getFormErrorMessage("email")}
            </div>
            <div className="field mt-2">
              <label
                htmlFor="tel_pro"
                className={
                  "mb-2 label-title" ||
                  classNames({ "p-error": isFormFieldValid("tel_pro") })
                }
              >
                {t('Home:pro_phone')}
              </label>
              <InputText
                value={formik.values.tel_pro}
                onChange={formik.handleChange}
                id="tel_pro"
                className={
                  "shadow-none" ||
                  classNames({ "p-error": isFormFieldValid("tel_pro") })
                }
              />
              {getFormErrorMessage("tel_pro")}
            </div>
            <div className="field mt-2">
              <label
                htmlFor="tele_mob"
                className={
                  "mb-2 label-title" ||
                  classNames({ "p-error": isFormFieldValid("tele_mob") })
                }
              >
                {t('Home:mob_phone')}
              </label>
              <InputText
                name="tel_mob"
                value={formik.values.tel_mob}
                onChange={formik.handleChange}
                id="tele_mob"
                className={
                  "shadow-none" ||
                  classNames({ "p-error": isFormFieldValid("tele_mob") })
                }
              />
              {getFormErrorMessage("tele_mob")}
            </div>
            <div
              className="d-flex flex-column mt-3 mb-3"
              style={{ width: "300px" }}
            >
              <div className="col">
                <p style={{ fontWeight: "bold", fontSize: "15px" }}>
                  {t('Home:id')}{getFormErrorMessage("piece_identite")}
                </p>
              </div>
              <div className="col">
                <RadioButton
                  value="cin"
                  name="piece_identite"
                  onChange={formik.handleChange}
                  checked={formik.values.piece_identite === "cin"}
                />
                <label htmlFor="cin" className="label-title" style={{ marginLeft: "8px" }}>
                  {t('Home:cin')}
                </label>
              </div>
              <div className="col">
                <RadioButton
                  name="piece_identite"
                  value="passeport"
                  onChange={formik.handleChange}
                  checked={formik.values.piece_identite === "passeport"}
                />
                <label className="label-title" htmlFor="passeport" style={{ marginLeft: "8px" }}>
                  Passeport
                </label>
              </div>
            </div>
            <div className="field mt-2">
              <label
                htmlFor="n_piece_identite"
                className={
                  "mb-2 label-title" ||
                  classNames({
                    "p-error": isFormFieldValid("n_piece_identite"),
                  })
                }
              >
                {t('Home:id_num')}
              </label>
              <InputText
                name="n_piece_identite"
                value={formik.values.n_piece_identite}
                onChange={formik.handleChange}
                id="n_piece_identite"
                className={
                  "shadow-none" ||
                  classNames({
                    "p-error": isFormFieldValid("n_piece_identite"),
                  })
                }
              />
              {getFormErrorMessage("n_piece_identite")}
            </div>
          </>
  )
}

export default Step2