"use client";

import React, { useState } from "react";
import { Ddt } from "@/app/todol";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Home() {
  const [todoList, settodoList] = useState(["1"]);
  const [todoi, settodoi] = useState("");
  const [todoii, settodoii] = useState("");
  const [updateIndex, setUpdateIndex] = useState(-1);
  const [filters, setFilter] = useState("");
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const dInput = (event) => {
    settodoi(event.target.value);
  };
  const ddInput = (event) => {
    settodoii(event.target.value);
  };

  function hInput() {
    settodoList((prevList) => [...prevList, todoi]);

    settodoi("");
  }

  function deletes(event) {
    const dataIndex = parseInt(event.target.dataset.index);
    settodoList((prevList) =>
      prevList.filter((item, index) => index !== dataIndex)
    );
  }

  function update(event) {
    const dataIndex = parseInt(event.target.dataset.index);

    if (dataIndex === updateIndex) {
      settodoList((prevList) =>
        prevList.map((item, index) => (index === dataIndex ? todoii : item))
      );
      setUpdateIndex(-1);
    } else {
      setUpdateIndex(dataIndex);
    }
  }

  function todoFilter(e) {
    const inputValue = e.target.value;

    setFilter(todoList.at(inputValue));
    // setFilter(inputValue);
  }

  function selectTodo(e) {
    const inputValue = e.target.value;
    // setFilter(todoList.at(inputValue));

    setFilter(inputValue);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        //   value={filters}
        options={todoList}
        inputValue={filters}
        //   onChange={todoFilter}
        onInputChange={todoFilter}
        sx={{ width: 100 }}
        renderInput={(params) => <TextField {...params} label="ALL" />}
      />
      <div>{filters}</div>
      <div>
        <input type="text" value={todoi} onChange={dInput} />
      </div>
      <div>
        <button
          type={"submit"}
          onClick={hInput}
          className="bg-green-200 w-300 h-300"
        >
          submit
        </button>
      </div>
      <div>
        <input type="text" value={filters} onChange={todoFilter} />
        filter
      </div>
      <div>
        <select value={filters} onChange={selectTodo}>
          <option value="">All</option>
          {todoList.map((todo, index) => (
            <option key={index} value={todo}>
              {todo}
            </option>
          ))}
        </select>
      </div>

      <div>
        <ul>
          {todoList
            .filter((item) => item.includes(filters))
            .map((todo, index) => (
              <li key={index} data-index={index}>
                {index !== updateIndex ? (
                  todo
                ) : (
                  <input type="text" value={todoii} onChange={ddInput} />
                )}

                <button
                  data-index={index}
                  type={"submit"}
                  onClick={deletes}
                  className="bg-green-200 w-300 h-300"
                >
                  delete
                </button>

                <button
                  data-index={index}
                  type={"submit"}
                  onClick={update}
                  className="pl-5 bg-green-200 w-300 h-300"
                >
                  update
                </button>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
