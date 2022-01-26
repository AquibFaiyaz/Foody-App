import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Ingredients",
    accessor: "ingredients",
    Cell: ({ value }) => {
      return value.map((item) => <li>{item}</li>);
    },
    Filter: ColumnFilter,
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Diet type",
    accessor: "diet",
    Filter: ColumnFilter,
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Preparation time",
    accessor: "prep_time",
    Cell: ({ value }) => {
      return value === -1 ? "Not Available" : value;
    },
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Cooking time",
    accessor: "cook_time",
    Cell: ({ value }) => {
      return value === -1 ? "Not Available" : value;
    },
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Flavor",
    accessor: "flavor_profile",
    Cell: ({ value }) => {
      return value === -1 ? "Not Available" : value;
    },
    Filter: ColumnFilter,
    disableSortBy: true,
  },
  {
    Header: "Course",
    accessor: "course",
    Filter: ColumnFilter,
    disableSortBy: true,
    //disableFilters: true,
  },
  {
    Header: "State",
    accessor: "state",
    Cell: ({ value }) => {
      return value === -1 ? "Not Available" : value;
    },
    Filter: ColumnFilter,
    disableSortBy: true,
  },
  {
    Header: "Region",
    accessor: "region",
    Cell: ({ value }) => {
      return value === -1 ? "Not Available" : value;
    },
    Filter: ColumnFilter,
    disableFilters: true,
    //disableSortBy: true,
  },
];
