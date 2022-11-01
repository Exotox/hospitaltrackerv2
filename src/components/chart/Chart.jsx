//This is the component to create the Chart for the statistis page


import "./chart.scss"; //to import the css style
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; // these are the imports required to get the chart looking dope.


//this is the data that was supposed to reference the database.

//at the moment it uses temp values
const data = [
  { name: "Mon", Total: 0 },
  { name: "Tues", Total: 100 },
  { name: "Wed", Total: 200 },
  { name: "Thur", Total: 300 },
  { name: "Fri", Total: 200 },
  { name: "Sat", Total: 200 },
  { name: "Sun", Total: 200 },
];


//this is the code to customise the chart. ranging from the size, naming, colour and style
const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
