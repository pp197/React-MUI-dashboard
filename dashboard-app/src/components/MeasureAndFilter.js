import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export const MeasureAndFilter = () => {
  return (
    <div>
      <div style={{ width: "100%", fontSize: "11px" }}>
        <span
          style={{
            padding: "9px",
            backgroundColor: "white",
            margin: "7px",
            borderRadius: "5px",
            display: "flex",
          }}
        >
          Adjustable Measures Filters{" "}
          <FilterAltIcon
            style={{ width: "17px", height: "17px", color: "#3700b3" }}
          />
        </span>
        <div
          style={{
            padding: "9px",
            backgroundColor: "white",
            margin: "-4px 7px 7px 7px",
            borderRadius: "5px",
          }}
        >
          <p>EDRP From :</p>
          <p
            style={{
              backgroundColor: "#3700b3",
              color: "white",
              padding: "4px",
              borderRadius: "5px",
            }}
          >
            1.00
          </p>
          <p>EDRP To :</p>
          <p
            style={{
              backgroundColor: "#3700b3",
              color: "white",
              padding: "4px",
              borderRadius: "5px",
            }}
          >
            1.00
          </p>

          <p>VAR :</p>
          <p style={{ textDecoration: "underline" }}>1.00 %</p>

          <p>Price Elasticity Expected:</p>
          <p
            style={{
              backgroundColor: "#3700b3",
              color: "white",
              padding: "4px",
              borderRadius: "5px",
            }}
          >
            1.00
          </p>

          <FormControl>
            <p>Modal Price Elasticity Curve:</p>

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="high"
              name="radio-buttons-group"
            >
              <FormControlLabel value="high" control={<Radio />} label="High" />
              <FormControlLabel
                sx={{
                  fontSize: "13px",
                }}
                value="medium"
                control={<Radio />}
                label="Medium"
              />
              <FormControlLabel value="low" control={<Radio />} label="Low" />
              <FormControlLabel
                value="no-curve"
                control={<Radio />}
                label="No Curve"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
