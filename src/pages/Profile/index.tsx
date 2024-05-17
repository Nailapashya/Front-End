// import { Box } from "@mui/material";
// import { useEffect, useState } from "react";
// import ProfileCard from "../../conponents/profileCard/profile";
// import { getProfile } from "../../lib/api/call/profile";
// import { IProfile } from "../../types/app";
// import { getProfiles } from "../../lib/api/call/profile";


// const Profile = () => {
//     const [profile, setProfile] = useState<IProfile[]>([]);

//     const fetchProfile = async () => {
//         try {
//             const { data } = await getProfile();

//             console.log(data)
//             setProfile(data.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         fetchProfile();
//      }, []);

//      return (
//         <Box>
//            {profile &&
//               profile.map((item) => <ProfileCard key={item.bio} profile={item} />)}
//         </Box>
//      );
    
//  };
 
//  export default Profile;
 