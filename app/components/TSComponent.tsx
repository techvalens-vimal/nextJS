import React from "react";

const TSComponent = (props: {
  f_name: string;
  l_name: string;
}): React.JSX.Element => {
  const updatedF_Name = props.f_name + "Extended";
  const updatedL_Name = props.l_name.toLowerCase();
  return (
    <div>
      <h4>
        {updatedF_Name} {updatedL_Name}
      </h4>
    </div>
  );
};

export default TSComponent;
