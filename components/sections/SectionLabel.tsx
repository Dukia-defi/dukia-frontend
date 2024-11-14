import React from "react";

interface ISectionLabel {
  title: string;
}

export const SectionLabel = (props: ISectionLabel) => {
  return (
    <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-700 via-purple-300 to-purple-700 bg-clip-text text-transparent">
      {props.title}
    </h3>
  );
};
