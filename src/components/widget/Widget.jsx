import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = ({ type, amount, isOccupied, cap }) => {
  let data;

  //temporary
  //const amount = 5;

  //const diff = -1;

  switch (type) {
    case "room1":
      data = {
        title: "Clinical Rm 1",
        //isOccupied: false,
        link: "Capacity: ",
        cap: "5",


        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "yellow",
              backgroundColor: "rgba(255, 255, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "room2":
      data = {
        title: "Clinical Rm 2",
        //isOccupied: false,
        link: "Capacity: ",
        cap: "5",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "yellow",
              backgroundColor: "rgba(255, 255, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "room3":
      data = {
        title: "Clinical Rm 3",
        //isOccupied: true,
        link: "Capacity: ",
        cap: "5",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "yellow",
              backgroundColor: "rgba(255, 255, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "room4":
      data = {
        title: "Clinical Rm 4",
        //isOccupied: true,
        link: "Capacity: ",
        cap: "5",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "yellow",
              backgroundColor: "rgba(255, 255, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "room5":
      data = {
        title: "Clinical Rm 5",
        //isOccupied: false,
        link: "Capacity: ",
        cap: "5",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "yellow",
              backgroundColor: "rgba(255, 255, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "room6":
      data = {
        title: "Clinical Rm 6",
        //isOccupied: false,
        link: "Capacity: ",
        cap: "5",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "yellow",
              backgroundColor: "rgba(255, 255, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "room7":
      data = {
        title: "Clinical Rm 7",
        //isOccupied: false,
        link: "Capacity: ",
        cap: "5",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "yellow",
              backgroundColor: "rgba(255, 255, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "room8":
      data = {
        title: "Clinical Rm 8",
        //isOccupied: false,
        link: "Capacity: ",
        cap: "5",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "yellow",
              backgroundColor: "rgba(255, 255, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      data = {
        title: "Clinical Rm 1",
        //isOccupied: false,
        link: "Capacity: ",
        cap: "5",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "yellow",
              backgroundColor: "rgba(255, 255, 0, 0.2)",
            }}
          />
        ),
      };
    /*
    break;
  
case "earning":
  data = {
    title: "EARNINGS",
    isMoney: true,
    link: "View net earnings",
    icon: (
      <MonetizationOnOutlinedIcon
        className="icon"
        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
      />
    ),
  };
  break;
case "balance":
  data = {
    title: "BALANCE",
    isMoney: true,
    link: "See details",
    icon: (
      <AccountBalanceWalletOutlinedIcon
        className="icon"
        style={{
          backgroundColor: "rgba(128, 0, 128, 0.2)",
          color: "purple",
        }}
      />
    ),
  };
  break;
default:
  break;*/
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        {isOccupied ? <div className="percentage negative"> OCCUPIED</div> : <div className="percentage positive">FREE </div>}

        <span className="link">{data.link}{amount}/{cap}</span>
      </div>
      <div className="right">


        <span className="counter">
          {/* {amount} */}
        </span>

        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
