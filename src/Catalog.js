import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Statuses, urls } from "./constants";
import { Cards } from "./Cards";
import { Search } from "./Search";
import { SortForm } from "./SortForm";
import { RegistrationFormLogic } from "./RegistrationFormLogic";
import {Error} from "./Error"

export function Catalog() {
  useEffect(() => {
    getListProd(urls.punk);
  }, []);

  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [statusRequest, setStatusRequset] = useState(Statuses.INITIAL);

  function filterList(searchItem) {
    let res = list.filter((item) => {
      console.log("item", item);
      return (
        item.name.toLowerCase().includes(searchItem) ||
        item.description.toLowerCase().includes(searchItem)
      );
    });
    setFilteredList(res);
  }

  function sortList(value, option) {
    console.log("ORDER", option);
    console.log("value", value);
    console.log("filteredList", filteredList);
    let res = filteredList.slice(0, filteredList.length+1);

    if (option === "fromSmallest") {
      res.sort((a, b) => {
        return a[value] - b[value];
      });
      setFilteredList(res);
    }

    if (option === "fromBiggest") {
      res.sort((a, b) => {
        return b[value] - a[value];
      });
      setFilteredList(res);
    }
    console.log("filteredList2", filteredList);
  }

  async function getListProd(url) {
    let response = await fetch(url); //'https://api.punkapi.com/v2/beers'
    let results = await response.json();

    if (response.ok) {
      setList(results);
      setFilteredList(results);
      setStatusRequset(Statuses.SUCCESSFUL)
    } else {
      setStatusRequset(Statuses.FAILED);
    }
    return results;
  }

  return (
    <div>
    {statusRequest === Statuses.INITIAL && (
      <p style={{ textAlign: "center", padding: 20 }}>Loading...</p>
    )}

     {statusRequest === Statuses.SUCCESSFUL && (
      <div className = "catalog">
      <section className = "searchSort">
      <Search filterList={filterList} />
      <SortForm sortList={sortList} />
      <RegistrationFormLogic />
      </section>
      <aside className = "cards">
      <Cards data={filteredList} />
      </aside>
      </div>
     )}   

     {statusRequest === Statuses.FAILED && (
      <Error error={statusRequest} />
     )}
    </div>
  )
}
