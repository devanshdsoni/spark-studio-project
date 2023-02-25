import React from "react";
import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

const CardContainer = ({ cardData }) => {
  return (
    <div className={styles["container"]}>
      {cardData?.map((item) => {
        return <Card key={item._id} data={item} />;
      })}
    </div>
  );
};

export default CardContainer;
