import { useState } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ButtonNavigation from "./ButtonNavigation/ButtonNavigation";
const FormStep = ({ page, setPage }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState();
  const getStep = () => {
    switch (page) {
      case 0:
        return (
          <Step1
            formik={formik}
            getFormErrorMessage={getFormErrorMessage}
            isFormFieldValid={isFormFieldValid}
            t={t}
          />
        );
      case 1:
        return (
          <Step2
            formik={formik}
            getFormErrorMessage={getFormErrorMessage}
            isFormFieldValid={isFormFieldValid}
            t={t}
          />
        );
      case 2:
        return (
          <Step3
            formik={formik}
            getFormErrorMessage={getFormErrorMessage}
            isFormFieldValid={isFormFieldValid}
            t={t}
          />
        );
    }
  };
  const formik = useFormik({
    initialValues: {
      prenom: "",
      nom: "",
      organisme: "",
      fonction: "",
      date_naissance: "",
      nationalite: "",
      genre: "",
      pays: "",
      ville: "",
      email: "",
      tel_pro: "",
      tel_mob: "",
      piece_identite: "",
      n_piece_identite: "",
      motivation: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.genre) {
        errors.genre = "Veuillez selectez le genre";
      }
      if (!data.prenom) {
        errors.prenom = "Le champs de Prenom est requis";
      }
      if (!data.nom) {
        errors.nom = "Le champs de Nom est requis";
      }
      if (!data.organisme) {
        errors.organisme = "Le champs d'Organisme est requis";
      }
      if (!data.fonction) {
        errors.fonction = "Le champs de Fonction est requis";
      }
      if (!data.date_naissance) {
        errors.date_naissance = "Le champs de la date de naissance est requis";
      }
      if (!data.nationalite) {
        errors.nationalite = "Le champs de Nationalité est requis";
      }
      if (!data.pays) {
        errors.pays = "Veuillez selectez votre pays";
      }
      if (!data.ville) {
        errors.ville = "Le champs de ville est requis";
      }
      if (!data.email) {
        errors.email = "Le champs de Email est requis";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Adresse e-mail invalide";
      }
      if (!data.tel_pro) {
        errors.tel_pro = "Le champs de telephone professionnel est requis";
      }
      if (!data.tel_mob) {
        errors.tel_mob = "Le champs de telephone mobile est requis";
      }
      if (!data.piece_identite) {
        errors.piece_identite = "**";
      }
      if (!data.n_piece_identite) {
        errors.n_piece_identite =
          "Le champs de Numero de piece d'identite est requis";
      }
      if (!data.motivation) {
        errors.motivation = "Ce champs est requis";
      }

      return errors;
    },
    onSubmit: (data) => {
      if (Object.keys(formik.errors).length === 0) {
        setFormData(data);
        alert(JSON.stringify(data, null, 2));
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
  const isEmpty1 = () => {
    if (
      formik.values.genre !== "" &&
      formik.values.prenom !== "" &&
      formik.values.nom !== "" &&
      formik.values.organisme !== "" &&
      formik.values.fonction !== "" &&
      formik.values.nationalite !== "" &&
      formik.values.date_naissance !== ""
    )
      return true;
    return false;
  };
  const nextPage = () => {
    if (isEmpty1()) {
      setPage(page + 1);
    } else {
      // console.log("first");
    }
  };
  const isEmpty2 = () => {
    if (
      formik.values.pays !== "" &&
      formik.values.ville !== "" &&
      formik.values.email !== "" &&
      formik.values.email.includes("@") &&
      formik.values.tel_pro !== "" &&
      formik.values.tel_mob !== "" &&
      formik.values.piece_identite !== "" &&
      formik.values.n_piece_identite !== ""
    )
      return true;
    return false;
  };
  const nextP = () => {
    if (isEmpty2()) {
      setPage(page + 1);
    } else {
      // console.log("first");
    }
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  // console.log(formik);
  return (
    <div className="col-sm-7 mt-2 p-5">
      <h4 className="">{t("Home:app_req_mssg")}</h4>
      <form onSubmit={formik.handleSubmit} className="p-fluid mt-5">
        <div className="mt-4">
          {getStep()}
          <div className="mt-3">
            <ButtonNavigation
              page={page}
              nextPage={nextPage}
              nextP={nextP}
              prevPage={prevPage}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default FormStep;
