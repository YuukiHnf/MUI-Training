import { Slider, styled } from "@mui/material";

const CustomizedSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`;

export const StyledSlider = () => {
  return (
    <>
      <CustomizedSlider defaultValue={30} /> <Slider />
    </>
  );
};
