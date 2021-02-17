import React, { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "./components/NavBar";
import TabsHome from "./components/TabsHome";

import { arrayToTree } from "./helpers/arrayToTree";

const TabsApp = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("http://localhost:1337/categories");
      console.log("Rezz", results.data);
      let tree = arrayToTree(results.data);
      console.log("Celo Drvo", tree[0]);
      localStorage.setItem("categories", JSON.stringify(tree[0]));
      setCategories(tree[0]);
      //setCategories(tree[0].children);
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <TabsHome />
    </>
  );
};

export default TabsApp;
