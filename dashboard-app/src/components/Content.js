import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Divider, createTheme } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CollectionsIcon from "@mui/icons-material/Collections";
import { LineChart, Line, XAxis, YAxis, Label } from "recharts";

function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("1", 0),
  createData("2", 300),
  createData("3", 600),
  createData("4", 800),
  createData("5", 1500),
  createData("6", 700),
  createData("7", 2400),
  createData("7", 2400),
  createData("8", 3333),
  createData("9", 2400),
  createData("10", 2300),
  createData("11", 2200),
  createData("12", 2100),
  createData("13", 2000),
  createData("14", 3333),
  createData("15", 300),
  createData("16", 2400),
  createData("17", 3333),
  createData("18", 1500),
  createData("19", 2400),
  createData("20", 2400),
  createData("21", 3333),
  createData("22", 1500),
  createData("23", 3333),
];

export const Content = () => {
  const theme = createTheme();

  return (
    <div>
      <h3 style={{ fontWeight: "500" }}>Elasticity Pricing Tag</h3>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          backgroundColor: "#3700b3",
          color: "white",
          borderRadius: "6px",
          padding: "13px",
          alignItems: "center",
          gap: "2px",
          fontSize: "11px",
        }}
      >
        <li style={{ display: "contents" }}>
          <span>
            {" "}
            <FilterAltIcon sx={{ width: "27px", height: "27px" }} />
          </span>
          <span>Product-Filter</span>
          <ArrowDropDownIcon />
        </li>
        {" | "}
        <Divider orientation="vertical" />
        <li
          style={{ display: "contents", backgroundColor: "#4a19ba !important" }}
        >
          {" "}
          <span>Category(KCA)</span>
          <ArrowDropDownIcon />
        </li>
        {" | "}
        <Divider orientation="vertical" />
        <li style={{ display: "contents" }}>
          {" "}
          <span>Segment(KCA)</span>
          <ArrowDropDownIcon />
        </li>
        {" | "}
        <Divider orientation="vertical" />
        <li style={{ display: "contents" }}>
          {" "}
          <span>Brand(KCA)</span>
          <ArrowDropDownIcon />
        </li>
        {" | "}
        <Divider orientation="vertical" />
        <li style={{ display: "contents" }}>
          {" "}
          <span>Sub Brand(KCA)</span>
          <ArrowDropDownIcon />
        </li>
        {" | "}
        <Divider orientation="vertical" />
        <li style={{ display: "contents" }}>
          {" "}
          <span>Pack Size(KCA)</span>
          <ArrowDropDownIcon />
        </li>
        {" | "}
        <Divider orientation="vertical" />
        <li style={{ display: "contents" }}>
          {" "}
          <span>Permutation Computation</span>
          <ArrowDropDownIcon />
        </li>
        {" | "}
        <Divider orientation="vertical" />
        <li style={{ display: "contents" }}>
          <span style={{ textDecoration: "underline" }}>22/02/2023 </span>
          <EditCalendarIcon />
        </li>
      </ul>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "#3700b3",
            color: "white",
            width: "150px",
            borderRadius: "6px",
          }}
        >
          <h4
            style={{
              display: "flex",
              margin: "0px",
              padding: "8px",
              fontWeight: "400",
            }}
          >
            Products <ArrowDropUpIcon />
          </h4>
          <ul
            style={{
              listStyle: "none",
              margin: "0px",
              paddingLeft: "6px",
              width: "95%",
              fontSize: "12px",
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((d, index) => (
              <li
                style={{
                  padding: "7px",
                  backgroundColor: index === 1 ? "#4a19ba" : "white",
                  color: index === 1 ? "white" : "#3700b3",
                  borderRadius: "8px",
                  marginBottom: "4px",
                  border: index === 1 ? " 1px solid white" : "",
                  fontSize: "11px",
                }}
              >
                <span> HUGGIES MATS MATS REGULAR NA </span>
                <span>+</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{ width: "114%", textAlign: "center", margin: "10px" }}>
            <h4
              style={{
                backgroundColor: "white",
                padding: "11px",
                borderRadius: "7px",
                color: "#3700b3",
              }}
            >
              Units Variation Expected -{" "}
              <span style={{ fontSize: "smaller" }}>
                DEPEND CONV-PANTS(PULL UPS)
              </span>
              <span
                style={{
                  position: "relative",
                  display: "inlineFlex",
                  left: "18%",
                  gap: "7px",
                }}
              >
                <GpsFixedIcon />
                <CameraAltIcon sx={{ color: "#d98c00" }} />
                <CollectionsIcon />
              </span>
            </h4>
          </div>

          <div>
            <LineChart
              width={700}
              height={350}
              data={data}
              margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24,
              }}
            >
              <XAxis
                dataKey="time"
                stroke={theme.palette.text.secondary}
                style={theme.typography.body2}
              />
              <YAxis
                stroke={theme.palette.text.secondary}
                style={theme.typography.body2}
              >
                <Label
                  angle={270}
                  position="left"
                  style={{
                    textAnchor: "middle",
                    fill: theme.palette.text.primary,
                    ...theme.typography.body1,
                  }}
                >
                  Price Effect
                </Label>
              </YAxis>
              <Line
                isAnimationActive={false}
                type="monotone"
                dataKey="amount"
                stroke={theme.palette.primary.main}
                dot={false}
              />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};
