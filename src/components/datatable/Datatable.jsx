import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource"; // this is referencing the datatablesource file that was suppose to work with the database, except, this isnt a json file. I didn't think it would be too different/difficult to change
import { Link } from "react-router-dom"; //this is the import for the routing. it helps with linking the pages.
import { useState } from "react";


//this file is just a component that is to be used by the pages to refence to.


//Here, I am able to change the names of the cells/columns and modify the style with the classnames + css
const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 280,
      renderCell: (params) => {
        return (

          <div className="cellAction">
            <Link to="" style={{ textDecoration: "none" }}>
              <div className="viewButton">View Report</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete Data
            </div>
          </div >
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">Monthly Clinical Space Report
        <Link to="" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
