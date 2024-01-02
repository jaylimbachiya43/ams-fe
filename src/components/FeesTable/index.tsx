'use client'
import React, { useState } from 'react';
import style from '../../../../ams-fe/src/components/FeesTable/style.module.css'

const tableData = [
    { name: 'A', date: '2023-10-10', received: 5000, pending: 15000, method: 'Cash', total: '20000', daysPresent: [false, false, false, true, false, true, false, true, true, false, false, false, false, false, true, false,, true, false,false, false,, true, false, true, false, true, false, true] },
    { name: 'B', date: '2023-10-12', received: 5000, pending: 15000, method: 'UPI', total: '20000', daysPresent: [true, true, false, true, true, true, true, true, true, false, false, false, false, false, true, false,, true, false,, true, false,, true, false, true, false, true, false, true] },
    { name: 'C', date: '2023-10-09', received: 5000, pending: 15000, method: 'UPI', total: '20000', daysPresent: [true, true, false, true, true, true, true, true, true, false, false, false, false, false, true, false,, true, false,, true, false,, true, false, true, false, true, false, true] },
    { name: 'D', date: '2023-10-11', received: 5000, pending: 15000, method: 'Credit Card', total: '20000', daysPresent: [true, true, false, true, true, true, true, true, true, false, false, false, false, false, true, false,, true, false,, true, false,, true, false, true, false, true, false, true] },
    { name: 'E', date: '2023-10-11', received: 5000, pending: 15000, method: 'Cash', total: '20000', daysPresent: [true, true, false, true, true, true, true, true, true, false, false, false, false, false, true, false,, true, false,, true, false,, true, false, true, false, true, false, true] },
    { name: 'F', date: '2023-10-13', received: 5000, pending: 15000, method: 'UPI', total: '20000', daysPresent: [true, true, false, true, true, true, true, true, true, false, false, false, false, false, true, false,, true, false,, true, false,, true, false, true, false, true, false, true] },
    { name: 'G', date: '2023-10-18', received: 5000, pending: 15000, method: 'Cash', total: '20000', daysPresent: [true, true, false, true, true, true, true, true, true, false, false, false, false, false, true, false,, true, false,, true, false,, true, false, true, false, true, false, true] },
    { name: 'H', date: '2023-10-15', received: 5000, pending: 15000, method: 'UPI', total: '20000', daysPresent: [true, true, false, true, true, true, true, true, true, false, false, false, false, false, true, false,, true, false,, true, false,, true, false, true, false, true, false, true] },
    { name: 'I', date: '2023-10-20', received: 5000, pending: 15000, method: 'Cheque', total: '20000', daysPresent: [true, true, false, true, true, true, true, true, true, false, false, false, false, false, true, false,, true, false,, true, false,, true, false, true, false, true, false, true] },
    { name: 'J', date: '2023-10-21', received: 5000, pending: 15000, method: 'Credit Card', total: '20000', daysPresent: [true, true, false, true, true, true, true, true, true, false, false, false, false, false, true, false,, true, false,, true, false,, true, false, true, false, true, false, true] },
];

const FeesTable = ({ rowsToShow, searchInput, paymentMethodFilter }) => {
    const [sortOrder, setSortOrder] = useState({ field: 'date', order: 'asc' });
    const [selectedName, setSelectedName] = useState(null);
    const [selectedM, setSelectedM] = useState(null);
  
    const filteredData = tableData
      .filter((row) => row.name.toLowerCase().includes(searchInput.toLowerCase()))
      .filter((row) => paymentMethodFilter === '' || row.method === paymentMethodFilter)
      .sort((a, b) => {
        if (sortOrder.field === 'date') {
          return (sortOrder.order === 'asc' ? 1 : -1) * (new Date(a.date) - new Date(b.date));
        } else if (sortOrder.field === 'name') {
          return (sortOrder.order === 'asc' ? 1 : -1) * a.name.localeCompare(b.name);
        }
      });
  
    const slicedData = filteredData.slice(0, rowsToShow);
  
    const toggleName = (name) => {
        if (selectedName === name) {
          setSelectedName(null);
          setSelectedM(null);
        } else {
          setSelectedName(name);
          setSelectedM('M1');
        }
      };
  
    const toggleM = (m) => {
      setSelectedM(selectedM === m ? null : m);
    };
  
    return (
      <table className="min-w-full">
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Fees Received</th>
            <th>Future Revenue</th>
            <th>Payment Method</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="rounded-md border">
          {slicedData.map((row, index) => (
            <React.Fragment key={index}>
              <tr
                className={`text-center ${index % 2 === 0 ? 'bg-gray-50' : 'bg-transparent'}`}
                onClick={() => toggleName(row.name)}
              >
                <td className={selectedName === row.name ? 'text-slate-400 font-extrabold' : ''}>{row.name}</td>
                <td>{row.date}</td>
                <td>{row.received}</td>
                <td>{row.pending}</td>
                <td>{row.method}</td>
                <td>{row.total}</td>
              </tr>
              {selectedName === row.name && (
                <tr>
                  <td colSpan={6}>
                    <div className={style.box}>
                      <table className={style.subTable}>
                        <thead>
                          <tr>
                            <td onClick={() => toggleM('M1')} className={selectedM === 'M1' ? 'bg-slate-200 rounded-lg' : ''}>
                              M1 ({getM1Ratio(row)})
                            </td>
                            <td onClick={() => toggleM('M2')} className={selectedM === 'M2' ? 'bg-slate-200 rounded-lg' : ''}>
                              M2 ({getM2Ratio(row)})
                            </td>
                            <td onClick={() => toggleM('M3')} className={selectedM === 'M3' ? 'bg-slate-200 rounded-lg' : ''}>
                              M3 ({getM3Ratio(row)})
                            </td>
                            <td onClick={() => toggleM('M4')} className={selectedM === 'M4' ? 'bg-slate-200 rounded-lg' : ''}>
                              M4 ({getM4Ratio(row)})
                            </td>
                          </tr>
                        </thead>
                      </table>
                      {selectedM && (
                        <div className={style.scrollableDays}>
                          {tableData.find((student) => student.name === row.name).daysPresent.map((isPresent, i) => (
                            <div
                              key={i}
                              className={`${style.day} ${isPresent ? style.present : style.absent}`}
                            >
                              {i + 1}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  };
  
  function getM1Ratio(row) {
    const totalDays = row.daysPresent.length;
    const presentDays = row.daysPresent.filter((isPresent) => isPresent).length;
    return `${presentDays}/${totalDays}`;
  }
  
  function getM2Ratio(row) {
    const totalDays = row.daysPresent.length;
    const presentDays = row.daysPresent.filter((isPresent) => isPresent).length;
    return `${presentDays}/${totalDays}`;
  }
  
  function getM3Ratio(row) {
    const totalDays = row.daysPresent.length;
    const presentDays = row.daysPresent.filter((isPresent) => isPresent).length;
    return `${presentDays}/${totalDays}`;
  }
  
  function getM4Ratio(row) {
    const totalDays = row.daysPresent.length;
    const presentDays = row.daysPresent.filter((isPresent) => isPresent).length;
    return `${presentDays}/${totalDays}`;
  }
  
  export default FeesTable;
