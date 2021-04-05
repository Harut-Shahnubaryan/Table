import React, { useState, useEffect } from 'react';
import "./CustomeTable.css"

function Table(props) {

    const { headers } = props;

    const [data, setdata] = useState(props.data);

    const [toggle, setToggle] = useState(false);


    function renderTableHeader() {

        return headers.map((elem, i) => {
            return (
                <th onClick={() => { clickHandler(elem, i); if(props.onTitleClick) props.onTitleClick(elem,i) }} key={elem.dataIndex}>{elem.title}
                    <span className={toggle ? "arrow-down" : "arrow-up"}></span>
                </th>
            )
        })
    }

    function cellName(elem, i) {
        var name = prompt("CHANGE NAME", elem.name)
        if (name === null) {
            return elem.name
        }

        if (name !== elem.name) {
            data[i].name = name

            setdata([...data])
        }
    }

    function cellRate(elem, i) {
        var rate = parseInt(window.prompt("CHANGE RATE", elem.rate))

        if (/^[0-9.,]+$/.test(rate)) {

        } else {
            console.log('fail');
        }

        if (rate === null) {
            return elem.rate
        }

        if (rate !== elem.rate) {
            data[i].rate = rate
            setdata([...data])
        }
    }


    function removeRow(elem, i) {
        var newData = data;
        newData.splice(i, 1);
        setdata([...data]);
    }



    function clickHandler(order, idx) {

        setToggle(!toggle)

        headers.map((elem, i) => {

            if (toggle) {
                data.sort(function (a, b) {
                    return a.name.localeCompare(b.name)
                });
                setdata([...data])
            }
            else {
                data.sort(function (a, b) {
                    return b.name.localeCompare(a.name);
                });
                setdata([...data])
            }
        })
    }

    function renderTableData() {
        return data.map((elem, i) => {
            const { name, rate } = elem;
            return (
                <tr key={i}>
                    <td onClick={() => {cellName(elem, i); if(props.onNameClick) props.onNameClick(elem,i) }}>{name}
                    </td>
                    <td onClick={() => { cellRate(elem, i); if(props.onRateClick) props.onRateClick(elem,i) }}>{rate}
                    </td>
                    <td onClick={() => { removeRow(elem, i); if(props.onRemoveRow) props.onRemoveRow(elem,i) }} className="remove">
                        <a>X</a>
                    </td>
                </tr>
            )
        })
    }

    function addRow() {
        var obj = {
            name: "",
            rate: 0
        };
        var newData = data;
        newData.push(obj);
        setdata([...data])
    }

    return (
        <div>
            <table className='table'>
                <tbody>
                    {renderTableHeader()}
                    {renderTableData()}
                </tbody>
            </table>
            <button onClick={addRow} className="add-cell-btn" style={props.addCell}>Add Row</button>
        </div>
    )
}

export default Table