import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import CardContainer from "./components/CardContainer/CardContainer";
import styles from "./App.module.css";
import { JSON_DATA } from "./JSON_DATA";

function App() {
  const GROUPS = {
    JUNIOR: "junior",
    SENIOR: "senior",
  };

  const [selectedGroup, setSelectedGroup] = useState(GROUPS.JUNIOR);

  const [juniorData, setJuniorData] = useState([]);
  const [seniorData, setSeniorData] = useState([]);

  useEffect(() => {
    setJuniorData([]);
    setSeniorData([]);
    for (const key in JSON_DATA) {
      JSON_DATA[key].map((item) => {
        if (item.min_age < 10) setJuniorData((prev) => [...prev, item]);
        if (item.max_age <= 15) setSeniorData((prev) => [...prev, item]);
      });
    }
  }, []);

  return (
    <>
      <section className={styles["group-radio-wrapper"]}>
        <div onClick={() => setSelectedGroup(GROUPS.JUNIOR)} className={`${styles["group-radio-btn"]} ${selectedGroup === GROUPS.JUNIOR && styles["active"]}`}>
          <p>Junior</p>
          <span>(Age 6-10)</span>
        </div>

        <div onClick={() => setSelectedGroup(GROUPS.SENIOR)} className={`${styles["group-radio-btn"]} ${selectedGroup === GROUPS.SENIOR && styles["active"]}`}>
          <p>Senior</p>
          <span>(Age 10-15)</span>
        </div>
      </section>

      <CardContainer cardData={selectedGroup === GROUPS.JUNIOR ? juniorData : selectedGroup === GROUPS.SENIOR ? seniorData : []} />
    </>
  );
}

export default App;
