import { useState } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ButtonNavigation from "./ButtonNavigation/ButtonNavigation";
const FormStep = ({ page, setPage }) => {
  const [formData, setFormData] = useState();
  const { t } = useTranslation();
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
      case 3:
        return <Step4
          formik={formik}
          getFormErrorMessage={getFormErrorMessage}
          isFormFieldValid={isFormFieldValid}
          t={t}
        />;
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
      n_piece_identite: "1234",
      date_arrivee: "",
      horaire_arrivee: "",
      aeroport_provenance: "",
      date_depart: "",
      horaire_depart: "",
      aeroport_destination: "",
      date_arrivee_sejour: "",
      date_depart_sejour: "",
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
      if (!data.date_arrivee) {
        errors.date_arrivee = "Ce champs est requis";
      }
      if (!data.horaire_arrivee) {
        errors.horaire_arrivee = "Ce champs est requis";
      }
      if (!data.date_depart) {
        errors.date_depart = "Ce champs est requis";
      }
      if (!data.horaire_depart) {
        errors.horaire_depart = "Ce champs est requis";
      }
      if (!data.aeroport_provenance) {
        errors.aeroport_provenance = "Ce champs est requis";
      }
      if (!data.aeroport_destination) {
        errors.aeroport_destination = "Ce champs est requis";
      }
      if (!data.date_arrivee_sejour) {
        errors.date_arrivee_sejour = "Ce champs est requis";
      }
      if (!data.date_depart_sejour) {
        errors.date_depart_sejour = "Ce champs est requis";
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
  console.log(Object.keys(formik.errors).length);
  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };
  const isErrorStep1 = () => {
    if (
      formik.errors.genre !== "" &&
      formik.errors.prenom !== "" &&
      formik.errors.nom !== "" &&
      formik.errors.organisme !== "" &&
      formik.errors.fonction !== "" &&
      formik.errors.nationalite !== "" &&
      formik.errors.date_naissance !== ""
    )
      return true;
    return false;
  };
  const isErrorStep2 = () => {
    if (
      formik.errors.pays !== "" &&
      formik.errors.ville !== "" &&
      formik.errors.email !== "" &&
      formik.values.email.includes('@') &&
      formik.errors.tel_pro !== "" &&
      formik.errors.tel_mob !== "" &&
      formik.errors.piece_identite !== "" &&
      formik.errors.n_piece_identite !== ""
    )
      return true;
    return false;
  };
  const isErrorStep3 = () => {
    if (
      formik.errors.date_arrivee !== "" &&
      formik.errors.horaire_arrivee !== "" &&
      formik.errors.aeroport_provenance !== "" &&
      formik.errors.date_depart !== "" &&
      formik.errors.horaire_depart !== "" &&
      formik.errors.aeroport_destination !== ""
    )
      return true;
    return false;
  };
  console.log(formik);
  const nextPage = () => {
    if (
      formik.values.genre !== "" &&
      formik.values.prenom !== "" &&
      formik.values.nom !== "" &&
      formik.values.organisme !== "" &&
      formik.values.fonction !== "" &&
      formik.values.nationalite !== "" &&
      formik.values.date_naissance !== "" &&
      isErrorStep1()
    ) {
      setPage(page + 1);
    } else {
      console.log("first");
    }
  };
  const next = () => {
    if (
      formik.values.date_arrivee !== "" &&
      formik.values.horaire_arrivee !== "" &&
      formik.values.aeroport_provenance !== "" &&
      formik.values.date_depart !== "" &&
      formik.values.horaire_depart !== "" &&
      formik.values.aeroport_destination !== "" &&
      isErrorStep3()
    ) {
      setPage(page + 1);
    } else {
      console.log("first");
    }
  };
  const nextP = () => {
    if (
      formik.values.pays !== "" &&
      formik.values.ville !== "" &&
      formik.values.email !== "" &&
      formik.values.tel_pro !== "" &&
      formik.values.tel_mob !== "" &&
      formik.values.piece_identite !== "" &&
      formik.values.n_piece_identite !== "" &&
      isErrorStep2()
    ) {
      setPage(page + 1);
    } else {
      console.log("first");
    }
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  return (
    <div className="col-sm-7 mt-2 p-5">
      {(page === 0 || page === 1) && <h4>{t("Home:app_req_mssg")}</h4>}
      {page === 2 && <h4>BILLET D'AVION</h4>}
      {page === 3 && <h4>VOTRE SÉJOUR</h4>}
      <form onSubmit={formik.handleSubmit} className="p-fluid mt-5">
        {getStep()}
        <div className="mt-3">
          <ButtonNavigation page={page} nextPage={nextPage} nextP={nextP} prevPage={prevPage} next={next}/>
        </div>
      </form>
    </div>
  );
};
export default FormStep;
