import {
  Box,
  Collapse,
  FormControlLabel,
  Paper,
  Slide,
  Switch
} from "@mui/material";
import { useRef, useState } from "react";
import { Theme } from "@mui/material/styles";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme: Theme) => theme.palette.common.black,
          stroke: (theme: Theme) => theme.palette.divider,
          strokeWidth: 1
        }}
        points={"0,100 50,00, 100,100"}
      />
    </Box>
  </Paper>
);

export const SimpleCollapse = () => {
  const [checked, setChecked] = useState(false);
  const containerRef = useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <div>
        {/* <Collapse in={checked}>{icon}</Collapse> */}
        {/* <Collapse in={checked} collapsedSize={40}>
          {icon}
        </Collapse> */}
        {/* <Collapse in={checked} orientation={"horizontal"} collapsedSize={40}>
          {icon}
        </Collapse> */}
        <Box ref={containerRef} sx={{ width: 200, height: 180 }}>
          <Slide
            direction="up"
            in={checked}
            mountOnEnter
            unmountOnExit
            container={containerRef.current}
          >
            {icon}
          </Slide>
        </Box>
      </div>
    </>
  );
};
