import React, { useMemo } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import { ROW_CLICKED } from "../Redux/Actions";
import { COLUMNS } from "./columns";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const BasicTable = ({ data, handleRowClick }) => {
  let navigate = useNavigate();
  const columns = useMemo(() => COLUMNS, []);
  const tableData = useMemo(() => data, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data: tableData,
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize } = state;

  return (
    <>
      <table className="recipe-table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}

                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <IoMdArrowDropdownCircle />
                      ) : (
                        <IoMdArrowDropupCircle />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
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
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-wrap">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 15, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </>
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
