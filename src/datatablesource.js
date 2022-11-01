

//This page is used for the statistics data table to reference the data from
//The intention of this file was to revieve the data from the database->to the express and from express
//to the react app (this page). At the momment it has place holder values.



//this is to associate the column names with there respected variable names; and change the width of the columns

export const userColumns = [
  { field: "id", headerName: "Room #", width: 90, },
  {
    field: "visitCount", headerName: "Appointment Count", width: 230,
  },
  { field: "patientCount", headerName: "Total Patient Count", width: 230, },

  { field: "doctorCount", headerName: "Doctor Count", width: 200, },
  {
    field: "status", headerName: "Room State", width: 160, renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },

];

//temporary data that was suppose to be used with the database
export const userRows = [
  {
    id: 1, //this is the ROOM number
    visitCount: 54, // this is the number of appointments the room has recieved 
    status: "Good", // the maintanace status of the room
    patientCount: 174, //patient count for the room
    doctorCount: 3, //number of doctors who use the room
  },
  {
    id: 2,
    visitCount: 74,
    patientCount: 234,
    status: "Good",
    doctorCount: 4,
  },
  {
    id: 3,
    visitCount: 24,
    patientCount: 325,
    status: "Good",
    doctorCount: 2,
  },
  {
    id: 4,
    visitCount: 43,
    patientCount: 746,
    status: "Maintainance",
    doctorCount: 3,
  },
  {
    id: 5,
    visitCount: 63,
    patientCount: 604,
    status: "Maintainance",
    doctorCount: 5,
  },
  {
    id: 6,
    visitCount: 47,
    patientCount: 167,
    status: "Good",
    doctorCount: 7,
  },
  {
    id: 7,
    visitCount: 63,
    patientCount: 972,
    status: "Attention",
    doctorCount: 8,
  },
  {
    id: 8,
    visitCount: 32,
    patientCount: 594,
    status: "Maintainance",
    doctorCount: 3,
  },

];
