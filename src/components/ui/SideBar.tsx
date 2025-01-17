import React from "react";
import CheckBox from "../form/CheckBox";

interface SideBarProps {
  items: string[];
  selected?: string;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SideBar = ({ items, selected, onClick }: SideBarProps) => {
  const itemsList = items.map((item, index) => {
    return (
      <CheckBox
        key={index}
        id={item}
        label={item}
        type="checkbox"
        onChange={onClick}
      />
    );
  });

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2 className="text-3xl font-bold">Teams</h2>
      </div>
      <div className="sidebar__header">
        <h2 className="text-xl font-bold">{selected}</h2>
      </div>

      <div className="sidebar__body">{itemsList}</div>
    </div>
  );
};

export default SideBar;
