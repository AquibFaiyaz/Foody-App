import React, { useMemo } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTable } from "react-table";
import { ROW_CLICKED } from "../Redux/Actions";
import { COLUMNS } from "./columns";

const BasicTable = ({ data, handleRowClick }) => {
  let navigate = useNavigate();
  const columns = useMemo(() => COLUMNS, []);
  const tableData = useMemo(() => data, []);

  const tableInstance = useTable({
    columns,
    data: tableData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table className="recipe-table" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr
              onClick={() => {
                let rowData = row.values;
                handleRowClick(rowData);
                navigate("/details");
              }}
              {...row.getRowProps()}
            >
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

//Redux

const mapStateToProps = (state) => {
  let { data } = state.tableReducer;
  return { data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRowClick: (data) => {
      dispatch({ type: ROW_CLICKED, payload: { data } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicTable);
