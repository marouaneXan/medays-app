import React from "react";
import { Card } from "primereact/card";
const BannerHelp = ({page,t}) => {
  const code_perso=localStorage.getItem('code_personnel')
  return (
    <Card className="p-5 mt-5 shadow">
      <h6 className="text-center">
        {(page === 0 || page === 1) && t("Home:personal_info_title")}
        { page===2 && !code_perso &&
            <>{t('Home:motive')}</>}
        {page === 2 && code_perso && <>{t('Home:aircraft_title')}</>}
        {page === 3 && code_perso && <>{t('Home:stay')}</>}
      </h6>
      <p className="text-center mt-3">
        {(page === 0 || page === 1 || page === 3) && t("Home:fill_req_mssg")}
        {page===2 && !code_perso && (
               <>{t('Home:reason')}</>
              )}
        {page === 2 && code_perso && (
          <>
            {t('Home:inform')}
          </>
        )}
      </p>
      <h6 className="text-center" id="title_help">
        {t("Home:Amadeus")}
      </h6>
      <p className="text-center mt-3">{t("Home:for_more")}</p>
      <a
        href="mailto:inscriptions@amadeusonline.org"
        target="_blank"
        className="info_link"
      >
        inscriptions@amadeusonline.org
      </a>
      <a href="http://www.medays.org" target="_blank" className="info_link">
        www.medays.org
      </a>
    </Card>
  );
};

export default BannerHelp;
