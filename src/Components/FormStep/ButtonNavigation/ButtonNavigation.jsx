import React from "react";
import { Button } from "primereact/button";
const ButtonNavigation = ({page,nextPage,nextP,prevPage}) => {
  return (
    <>
      {page === 0 && (
        <Button
        type="submit"
          label="SUIVANT"
          onClick={nextPage}
          className="p-button-help p-button-rounded shadow-none label-title"
        />
      )}
      {page === 1 && (
        <div className="d-flex">
          <Button
            label="PRECEDANT"
            onClick={prevPage}
            className="p-button-secondary p-button-rounded shadow-none label-title"
          />
          <Button
          type="submit"
            label="SUIVANT"
            onClick={nextP}
            className=" p-button-help p-button-rounded shadow-none label-title"
            style={{ marginLeft: "4px" }}
          />
        </div>
      )}
      {page === 2 && (
        <div className="d-flex">
          <Button
            label="PRECEDANT"
            onClick={prevPage}
            className="p-button-secondary p-button-rounded shadow-none label-title"
          />
          <Button
            label="SUBMIT"
            className="p-button-help p-button-rounded shadow-none label-title"
            type="submit"
            style={{ marginLeft: "4px" }}
          />
        </div>
      )}
    </>
  );
};

export default ButtonNavigation;
