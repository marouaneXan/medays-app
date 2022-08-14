import React from "react";
import { Button } from "primereact/button";
const ButtonNavigation = ({page,nextPage,nextP,prevPage}) => {
  return (
    <>
      {page === 0 && (
        <Button
          label="SUIVANT"
          onClick={nextPage}
          className="p-button-help p-button-rounded shadow-none"
        />
      )}
      {page === 1 && (
        <div className="d-flex">
          <Button
            label="PRECEDANT"
            onClick={prevPage}
            className="p-button-secondary p-button-rounded shadow-none"
          />
          <Button
            label="SUIVANT"
            onClick={nextP}
            className=" p-button-help p-button-rounded shadow-none"
            style={{ marginLeft: "4px" }}
          />
        </div>
      )}
      {page === 2 && (
        <div className="d-flex">
          <Button
            label="PRECEDANT"
            onClick={prevPage}
            className="p-button-secondary p-button-rounded shadow-none"
          />
          <Button
            label="SUBMIT"
            className="p-button-help p-button-rounded shadow-none"
            type="submit"
            style={{ marginLeft: "4px" }}
          />
        </div>
      )}
    </>
  );
};

export default ButtonNavigation;
