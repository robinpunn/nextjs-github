import React from "react";

interface IssueProps {
  issues: any[];
}

const Issues: React.FC<IssueProps> = ({ issues }) => {
  function getContrastColor(hexColor: string) {
    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    if (brightness > 128) {
      // Use a dark shade of gray for light backgrounds
      return `rgba(0, 0, 0, 0.8)`;
    } else {
      // Use a light shade of gray for dark backgrounds
      return `rgba(255, 255, 255, 0.7)`;
    }
  }

  return (
    <>
      {issues.map((issue) => (
        <div className="issue" key={issue.id}>
          <h4>{issue.title}</h4>
          <h5>
            <div className="labels">
              {issue.labels.map((label: any) => (
                <span
                  key={label.id}
                  className="label"
                  style={{
                    backgroundColor: `#${label.color}`,
                    color: getContrastColor(label.color),
                  }}
                >
                  {label.name}
                </span>
              ))}
            </div>
          </h5>
          <a href={issue.html_url} target="_blank">
            {issue.html_url.split("/").slice(-2).join("/")}
          </a>
        </div>
      ))}
    </>
  );
};

export default Issues;
