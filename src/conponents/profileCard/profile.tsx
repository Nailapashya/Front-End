// import { FC } from "react";
// import { IProfile } from "../../types/app";
// import { Avatar, Box, Typography, Button, Bio } from "@mui/material";
// import { DEFAULT_AVA } from "../../utils/constan/defaultAva";
// import SuggestedComponent from "./suggestedComponent";

// interface IProps {
//   profile: IProfile;
// }

// const ProfileCard: FC<IProps> = ({ profile }) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         gap: 1,
//         paddingX: 2,
//         borderBottom: "1px solid rgba(255, 255, 255, 0.6)",
//         py: 1,
//       }}
//     >
//       <Box>
//         <Avatar alt="ava" src={profile.avatar ?? DEFAULT_AVA}/>
//         <Button/>
//         <Typography></Typography>
//         <Bio>{profile.bio}</Bio>
//       </Box>

//       <Box>
//         <Typography>Suggested for you</Typography>
//         <SuggestedComponent />
//       </Box>
//     </Box>
//   );
// };

// export default profileCard;
