import "./navbar.scss"; // this imports the css file for style
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";


//this file is for the navigation bar, this displays the serach bar, pretty straight forward.
//this nav bar uses icons imported from the MUI website. and, its FREE!
const Navbar = () => {

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://www.yatharthhospitals.com/uploads/doctor/yatharth_26598424.png" //this is the little a picture I found on google images
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div >
    </div>
  );
};

export default Navbar;
