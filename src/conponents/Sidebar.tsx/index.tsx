import { Box, Typography } from "@mui/material";
import MenuItem from "./MenuItem";

const Sidebar = () => {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: 5,
            gap: 2,
         }}
      >
         <Box>
            <Typography sx={{width: "220px", height: "49.66px", top: "40px", left: "40px", gap: "8px", color: "#04a51e", fontSize: "30px"}}>CIRCLE</Typography>
         </Box>

         <Box>
            <MenuItem />
         </Box>

         <Box sx={{ backgroundColor: "#04a51e", borderRadius: 10, width: "100px", paddingLeft: 5, paddingRight: 5, paddingButtom: 2, paddingTop: 1, gap: "5px"}}>Button Create</Box>
         
         <Box sx={{ marginTop: "auto" }}>Logout</Box>
      </Box>
   );
};

export default Sidebar;
