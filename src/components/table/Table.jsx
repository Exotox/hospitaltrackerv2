import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


//This is data for the table, that is currently placeholders for the database 


const List = () => {
  const rows = [
    {
      RoomNumber: 1,
      DoctorID: 16498324,
      patientVisitReason: "General Checkup",
      //date: "1 March",
      time: 1200,
      timeellapsed: "5 mins ago",
      status: "Claimed",
      capacity: "2/5",

    },
    {
      RoomNumber: 2,
      DoctorID: 75927425,

      patientVisitReason: "X-Ray",
      //date: "1 March",
      time: 1205,
      timeellapsed: "2 mins ago",
      status: "Claimed",
      capacity: "5/5",
    },
    {
      RoomNumber: 3,
      DoctorID: 29374292,

      patientVisitReason: "Emergency",
      //date: "1 March",
      time: 1159,
      timeellapsed: "1 min ago",
      status: "Claimed",
      capacity: "5/5",
    },
    {
      RoomNumber: 4,
      DoctorID: 0,

      patientVisitReason: "--",
      //date: "1 March",
      time: 0,
      timeellapsed: "--",
      status: "Available",
      capacity: "0/5",
    },
    {
      RoomNumber: 5,
      DoctorID: 0,

      patientVisitReason: "--",
      //date: "1 March",
      time: 0,
      timeellapsed: "--",
      status: "Available",
      capacity: "0/5",
    },
    {
      RoomNumber: 6,
      DoctorID: 0,

      patientVisitReason: "--",
      // date: "1 March",
      time: 0,
      timeellapsed: "2 mins ago",
      status: "Claimed",
      capacity: "0/5",
    },
    {
      RoomNumber: 7,
      DoctorID: 0,

      patientVisitReason: "--",
      //date: "1 March",
      time: 0,
      timeellapsed: "--",
      status: "Available",
      capacity: "0/5",
    },
    {
      RoomNumber: 8,
      DoctorID: 345656352,
      patientVisitReason: "Mental Health",
      //  date: "1 March",
      time: 1159,
      timeellapsed: "3 mins ago",
      status: "Claimed",
      capacity: "3/5",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Clinical Room</TableCell>
            <TableCell className="tableCell">Doctor ID</TableCell>
            <TableCell className="tableCell">Patient Visiting Reason</TableCell>
            {/* <TableCell className="tableCell">Booking Date</TableCell> */}
            <TableCell className="tableCell">Scheduled Time</TableCell>
            <TableCell className="tableCell">Claimed Time</TableCell>
            <TableCell className="tableCell">Capacity</TableCell>

            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.RoomNumber}>
              <TableCell className="tableCell">{row.RoomNumber}</TableCell>
              <TableCell className="tableCell">{row.DoctorID}</TableCell>
              <TableCell className="tableCell">{row.patientVisitReason}</TableCell>
              {/* <TableCell className="tableCell">{row.date}</TableCell> */}
              <TableCell className="tableCell">{row.time}</TableCell>
              <TableCell className="tableCell">{row.timeellapsed}</TableCell>
              <TableCell className="tableCell">{row.capacity}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
};

export default List;
