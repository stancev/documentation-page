import React, { useState } from "react";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";

import { newOptions } from "./options";

const SideBarAppHook = () => {
  const [open, setOpen] = useState(false);

  //   you can also use this function on any of your event to open/close the sidebar
  const handleSidebarToggle = (isOpen) => {
    setOpen(isOpen);
    console.log("Otvara se - zatvara se");
  };

  const handleClick = (itemOptions) => {
    /* 
        do something with the item you clicked.
        you can also send custom properties of your choice
        in the options array you'll be getting those here
        whenever you click that item
    */
    console.log("KLikce se na item");
  };
  return (
    <>
      <MultilevelSidebar
        open={open}
        onToggle={handleSidebarToggle}
        options={newOptions}
        header="React-MultiLevel-Sidebar"
        onItemClick={handleClick}
      />
      {/* using in our button to open the sidebar */}
      <button onClick={() => handleSidebarToggle(true)}>open</button>
    </>
  );
};

export default SideBarAppHook;
