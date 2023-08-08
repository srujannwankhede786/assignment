import React from 'react';
import './Body.css';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';
import { FcCurrencyExchange, FcDatabase, FcNegativeDynamic } from "react-icons/fc";
import Table from './Table';
import Table2 from './Table2';
const Triplet = () => {
  return (
    <div className="d-flex justify-content-center mx-auto mt-3" role="group" aria-label="Basic checkbox toggle button group">
      <div className="left-rounded-button">
        <div className='row content'>
          <div className="float-start col-6 px-4">
            <FcCurrencyExchange size={100} />
          </div>
          <div className='float-end col-6 px-4' style={{textAlign: 'center'}}>
            <p className='px-1 mx-auto col-12 light-text'>Collections till date</p>
            <h3 className='px-1 mx-auto col-12'>$5.34cr</h3>
            <span style={{'fontSize': 10}}>10% in last 30 days</span>
          </div>
        </div>
      </div>
      <div className="center-rounded-button">
        <div className='row content'>
          <div className="float-start col-6 px-4">
            <FcDatabase size={100} />
          </div>
          <div className='float-end col-6 px-4' style={{textAlign: 'center'}}>
            <p className='px-1 mx-auto col-12 light-text'>Balance</p>
            <h3 className='px-1 mx-auto col-12'>$2.4L</h3>
            <span style={{'fontSize': 10}}></span>
          </div>
        </div>
      </div>
      <div className="right-rounded-button">
        <div className='row content'>
          <div className="float-start col-6 px-4">
            <FcNegativeDynamic size={100} />
          </div>
          <div className='float-end col-6 px-4' style={{textAlign: 'center'}}>
            <p className='px-1 mx-auto col-12 light-text'>Defaulters</p>
            <h3 className='px-1 mx-auto col-12'>11</h3><p className='light-text'>/1.049 Students</p>
            <span style={{'fontSize': 8}}>11% in last 30 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}


const Quadra = () => {
  return (
    <div className="d-flex justify-content-center mx-auto mt-3">
      <div className="full-round-button mx-2">
        <div className='row content2'>
          <p className='px-2 mx-auto col-12 light-text'>Students</p>
          <h3 className='px-2 mx-auto col-12'>1,049</h3>
        </div>
      </div>

      <div className="full-round-button mx-2">
        <div className='row content2'>
          <p className='px-2 mx-auto col-12 light-text'>Sections</p>
          <div className='px-2 mx-auto col-12'>
          <h3>18 <span style={{'fontSize': 10}}>in 12 classes</span></h3>
          </div>
          
        </div>
      </div>

      <div className="full-round-button mx-2 ">
        <div className='row content2'>
          <p className='px-2 mx-auto col-12 light-text'>Collection this month</p>
          <h3 className='px-2 mx-auto col-12'>$90.56L</h3>
        </div>
      </div>

      <div className="full-round-button mx-2">
        <div className='row content2'>
          <p className='px-2 mx-auto col-12 light-text'>File Collected till date</p>
          <h3 className='px-2 mx-auto col-12'>$11.20L</h3>
        </div>
      </div>
    </div>
  );
}

const data = [
  { month: 'jan', percentage: 100 },
  { month: 'feb', percentage: 100 },
  { month: 'mar', percentage: 100 },
  { month: 'apr', percentage: 95 },
  { month: 'may', percentage: 75 },
  { month: 'june', percentage: 65 },
  { month: 'july', percentage: 45 },
  { month: 'aug', percentage: 35 },
  { month: 'sept', percentage: 25 },
  { month: 'oct', percentage: 10 },
  { month: 'nov', percentage: 5 },
  { month: 'dec', percentage: 0 }, // Changed 'dev' to 'dec'
];

const CustomBarChart = () => {
  return (
    <div className="chart-container">
      <BarChart width={400} height={250} data={data}>
        <Bar dataKey="percentage" fill="url(#colorGradient)" barSize={20} />
        <CartesianGrid stroke="3 3" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 10 }} />
        <YAxis hide />
        <Tooltip
          cursor={{ fill: 'none' }}
          position={{ y: -30 }}
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="custom-tooltip">
                  <p className="tooltip-label">{`Month: ${label}`}</p>
                  <p className="tooltip-value">{`Percentage: ${payload[0].value}`}</p>
                </div>
              );
            }
            return null;
          }}
        />
      </BarChart>
      <style jsx="true">{`
        .chart-container {
          position: relative;
        }
        .recharts-bar-rectangle {
          transition: filter 0.3s;
        }
        .recharts-bar-rectangle:hover {
          filter: drop-shadow(0 0 10px rgba(0, 0, 255, 0.8));
        }
        .custom-tooltip {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 8px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-size: 12px;
        }
        .tooltip-label {
          margin: 0;
          font-weight: bold;
        }
        .tooltip-value {
          margin: 0;
        }
        /* Define the gradient */
        #colorGradient {
          fill: url(#colorGradient);
        }
      `}</style>
      {/* Define the gradient */}
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00aaff" />
            <stop offset="100%" stopColor="#0055aa" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const dataPie = [
  { name: 'onlice', students: 63 },
  { name: 'cash', students: 25 },
  { name: 'cheque', students: 11 }
];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Chart = () => {
  return (
    <PieChart width={300} height={250}>
      <Pie
        data={dataPie}
        dataKey="students"
        outerRadius={60}
        fill="#8884d8"
        label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
          const RADIAN = Math.PI / 180;
          const radius = 25 + innerRadius + (outerRadius - innerRadius);
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill={COLORS[index % COLORS.length]}
              textAnchor={x > cx ? 'start' : 'end'}
              dominantBaseline="central"
            >
              {`${(percent * 100).toFixed(0)}%`}
            </text>
          );
        }}
      >
        {dataPie.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  );
};

const Graph = () => {
  return (
    <div className="d-flex justify-content-center mx-auto mt-3">
      <div className="full-round-button mx-2">
        <div className="full-round-button mx-2">
          <div className="d-flex align-items-start flex-column mb-3">
          <h3 className='px-auto pt-3 mx-auto col-12'>Overview</h3>
            <p className='px-auto mx-auto col-12 light-text'>Monthly Collection</p>
            <div className="px-5"><CustomBarChart /></div>
          </div>
        </div>
      </div>

      <div className="full-round-button mx-2">
        <div className='d-flex align-items-start flex-column mb-3'>
          <h3 className='px-auto pt-3 mx-auto col-12'>Payment Mode</h3>
          <p className='px-auto mx-auto col-12 light-text'>Split betwee Onlince, Cash and Cheque for collections till date</p>
          
          <div className="px-5 pb-4"><Chart/></div>
        </div>
      </div>
    </div>
  );
}

const Sheet = () => {
  return (
    <div className="d-flex justify-content-center mx-auto mt-3">
      <div className="full-round-button mx-2">
        <div className="d-flex align-items-start flex-column mb-3">
        <h3 className='px-auto pt-3 col-12'>Admins</h3>
          <div>
            <Table/>
          </div>
        </div>
      </div>

      <div className="full-round-button mx-2">
        <div className="d-flex align-items-start flex-column mb-3">
        <h3 className='px-auto pt-3 col-12'>Disbursals</h3>
          <div >
            <Table2/>
          </div>
        </div>
      </div>
    </div>
  );
}


const Body = ({isOpen}) => {
  return (
    <div className="text-bg-light p-3 container-quadra" >
      <div className='mt-3'>
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="mb-0" style={{'paddingLeft':isOpen?('3%'):('13%'), transition: 'padding-left 0.3s ease-in-out'}}>DAV public school</h3>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <Triplet />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <Quadra />
        </div>
        
        <div className="d-flex align-items-center justify-content-between">
          <Graph />
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <Sheet />
        </div>
      </div>
    </div>
  );
};

export default Body