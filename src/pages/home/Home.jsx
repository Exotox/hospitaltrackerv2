import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";

//this file stores all the components that is displayed on the home page. This include the widgets, the Sidebar, Navbar and table


//these widgets elements can pass through parameters to change what is displayed on the widget.
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="room1" amount={0} isOccupied={false} cap={5} />
          <Widget type="room2" amount={2} isOccupied={true} cap={10} />
          <Widget type="room3" amount={0} isOccupied={false} cap={5} />
          <Widget type="room4" amount={0} isOccupied={false} cap={5} />

        </div>
        <div className="widgets">
          <Widget type="room5" amount={5} isOccupied={true} cap={5} />
          <Widget type="room6" amount={3} isOccupied={true} cap={5} />
          <Widget type="room7" amount={0} isOccupied={false} cap={5} />
          <Widget type="room8" amount={4} isOccupied={true} cap={5} />

        </div>

        {/* This is the table content, and all the data can be edited from the table component. */}
        <div className="listContainer3">
          <div className="listTitle">ROOM BOOKINGS</div>
          <Table />

        </div>
      </div>
    </div >
  );
};

export default Home;
