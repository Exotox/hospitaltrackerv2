// This are all the imports for the statistics pageXOffset, mostly imports for the icons

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./stats.scss";
import Datatable from "../../components/datatable/Datatable";
import Chart from "../../components/chart/Chart";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


//this page displays components such as, the chart, datatable and the feature display. 

//very customisable and easy to understand. 
const Stats = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="widgets">
          <Chart aspect={5} title={"Statistics"} />
        </div>
        <div className="listContainer2">
          <Datatable />
        </div>

        <div className="listContainer">

          <div className="featured">
            <div className="top">
              <h1 className="title">Clinical Space Utilization</h1>
              <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
              <div className="featuredChart">
                <CircularProgressbar value={80} text={"80%"} strokeWidth={20} />
              </div>
              <p className="title">This Months Average Utilization</p>
              <p className="amount">80%</p>
              <p className="desc">
                This month there has been an increase in clinical space utilization and a decrease on patient wait times. 50% of the clinical rooms are in optimal condition.
              </p>
              <div className="summary">
                <div className="item">
                  <div className="itemTitle">Target</div>
                  <div className="itemResult total">
                    <EmojiEventsIcon fontSize="medium" />
                    <div className="resultAmount">100%</div>
                  </div>
                </div>
                <div className="item">
                  <div className="itemTitle">Last Week</div>
                  <div className="itemResult positive">
                    <KeyboardArrowUpOutlinedIcon fontSize="large" />
                    <div className="resultAmount">30%</div>
                  </div>
                </div>
                <div className="item">
                  <div className="itemTitle">Last Month</div>
                  <div className="itemResult positive">
                    <KeyboardArrowUpOutlinedIcon fontSize="large" />
                    <div className="resultAmount">50%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div >
  );
};

export default Stats;
