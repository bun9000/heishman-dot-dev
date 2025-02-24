import React from "react";

interface JobTitleProps {
  position: string;
  company: string;
  datesFrom: string;
  datesTo: string;
}

const JobTitle: React.FC<JobTitleProps> = ({ position, company, datesFrom, datesTo }) => {
  return (
    <h3>
      <span className="inline-highlight">{position}</span>&nbsp;
      <span className="inline-subtext">
        &nbsp; {company} ⫻  {datesFrom} to {datesTo}
      </span>
    </h3>
  );
};

export default JobTitle;
