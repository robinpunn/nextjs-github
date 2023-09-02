import React from "react";

interface IssueProps {
  issues: any[];
}

const Issues: React.FC<IssueProps> = ({ issues }) => {
  return (
    <>
      {issues.map((issue) => (
        <div className="issue" key={issue.id}>
          <h4>{issue.title}</h4>
          <h5>
            Labels: {issue.labels.map((label: any) => label.name).join(", ")}
          </h5>
          <a href={issue.html_url}>{issue.html_url}</a>
        </div>
      ))}
    </>
  );
};

export default Issues;
