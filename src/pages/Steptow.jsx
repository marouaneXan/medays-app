import { useState } from "react";
import Form from "../Components/FormStep/FormStep"
import WebCode from "../Components/WebCode/WebCode";
import { useTranslation } from "react-i18next";
import BannerHelp from "../Components/BannerHelp/BannerHelp";
const Steptow = () => {
  const [page, setPage] = useState(0);
  const { t } = useTranslation();
  return (
    <>
      <div className="row">
        {!localStorage.getItem('code_personnel') && <Form page={page} setPage={setPage}/>}
        {localStorage.getItem('code_personnel') && <WebCode page={page} setPage={setPage} />}
        <div className="col">
          <BannerHelp page={page} t={t}/>
        </div>
      </div>
    </>
  );
};

export default Steptow;
