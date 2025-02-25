import React from "react";
import clsx from "clsx";
import styles from "@site/src/css/TechPill.module.css";

interface TechPillProps {
  name: string;
  color?: string;
}

const TechPill: React.FC<TechPillProps> = ({ name, color }) => {
  return (
    <span className={clsx(styles.techPill)} style={{ backgroundColor: color }}>
      {name}
    </span>
  );
};

export default TechPill;
