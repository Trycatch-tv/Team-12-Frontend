import { CineList } from "../cartelera/CineList.jsx";
import { Slider } from "../slider/slider.jsx";
import { Box } from "./Box";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
    <Slider />
  </Box>
);
