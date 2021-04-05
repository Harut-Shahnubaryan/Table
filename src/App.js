import './App.css';

import React from "react";
import Table from "./CustomTable/CustomeTable"

const data = 
    [
          {
              name: 'React',
              rate: 120
          },
          {
              name: 'Vue',
              rate: 130
          },
      ]

const headers = [
    {
        dataIndex: 'name',
        title: 'Name',
        width: 120,
        sorter: false,
    },
    {
        dataIndex: 'rate',
        title: 'Rating',
        width: 120,
        sorter: true,
    },

    ]

export default function App() {
  return (
    <div>
      <Table
      headers = {headers}
      data={data}
      onNameClick={(elem)=>{console.log(elem)}}
      onRateClick={(elem)=>{console.log(elem)}}
      onRemoveRow={(elem)=>{console.log(elem)}}
      onTitleClick={(elem)=>{console.log(elem)}}
      />
    </div>
  );
}

