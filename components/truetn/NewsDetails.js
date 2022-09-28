// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import { pink } from "@mui/material/colors";
// import GoogleIcon from "@mui/icons-material/Google";
// import Image from "next/image";
// import { Divider } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';

// const Hashtags = [
//     {
//         sl:"1.Trending",
//         Htag:"#worldsFirst200MPCamera",
//         tweet:"22K Tweets"
//     },

//     {
//         sl:"2.Trending",
//         Htag:"#MotorolaEdge30Fusiongiveaway",
//         tweet:"20K Tweets"
//     },

//     {
//         sl:"3.Trending",
//         Htag:"#SwitchToSave",
//         tweet:"Under 10K"
//     },

//     {
//         sl:"4.Trending",
//         Htag:"#iQOOZ6Lite5GSaleTomorrow",
//         tweet:"Under 10K"
//     },

//     {
//         sl:"5.Trending",
//         Htag:"#mindminesummit2022",
//         tweet:"Under 10K"
//     },

//     {
//         sl:"6.Trending",
//         Htag:"TEJASSWI STARRING AS SHARUTI",
//         tweet:"46K Tweets"
//     },

//     {
//         sl:"7.Trending",
//         Htag:"C.pOLED",
//         tweet:"Under 10K"
//     },

//     {
//         sl:"8.Trending",
//         Htag:"MERE KHAYALON MALIKA TEASER",
//         tweet:"74K Tweets"
//     },

//     {
//         sl:"9.Trending",
//         Htag:"CBI Mute InSSRCase",
//         tweet:"61K Tweets"
//     },

//     {
//         sl:"10.Trending",
//         Htag:"Gujarat",
//         tweet:"74K Tweets"
//     },

//     {
//         sl:"11.Trending",
//         Htag:"Foxconn",
//         tweet:"61K Tweets"
//     },

//     {
//         sl:"12.Trending",
//         Htag:"DHOL BAJAA OUT TOMORROW",
//         tweet:"50K Tweets"
//     },

//     {
//         sl:"13.Trending",
//         Htag:"Mahesh Bhupathi & Leander Paes",
//         tweet:"Under 10K"
//     },

//     {
//         sl:"14.Trending",
//         Htag:"Mukesh Ambani",        tweet:"Under 10K"
//     },

//     {
//         sl:"15.Trending",
//         Htag:"Hare Krishna",
//         tweet:"Under 10K"
//     },

//     {
//         sl:"16.Trending",
//         Htag:"Nike",
//         tweet:"Under 10K"
//     },

//     {
//         sl:"17.Trending",
//         Htag:"Azerbaijan",
//         tweet:"57K Tweets"

//     },

//     {
//         sl:"18.Trending",
//         Htag:"Armenia",
//         tweet:"89K Tweets"
//     },

//     {
//         sl:"19.Trending",
//         Htag:"Saul",
//         tweet:"111K Tweets"
//     },

//     {
//         sl:"20.Trending",
//         Htag:"आम आदमी",
//         tweet:"38K Tweets"
//     },

//     {
//         sl:"21.Trending",
//         Htag:"Jersey",
//         tweet:"71K Tweets"
//     },

//     {
//         sl:"22.Trending",
//         Htag:"seokjin",
//         tweet:"452K Tweets"
//     },

//     {
//         sl:"23.Trending",
//         Htag:"Scientific Discoveries",
//         tweet:"99K Tweets"
//     },

//     {
//         sl:"24.Trending",
//         Htag:"Rishis of Bharat",
//         tweet:"311K Tweets"
//     },

//     {
//         sl:"25.Trending",
//         Htag:"IOS 16",
//         tweet:"1M Tweets"
//     },

//     {
//         sl:"26.Trending",
//         Htag:"jeno",
//         tweet:"100K Tweets"
//     },

//     {
//         sl:"27.Trending",
//         Htag:"Land Of Knowledge",
//         tweet:"21K Tweets"
//     },

//     {
//         sl:"28.Trending",
//         Htag:"श्री हनुमान",
//         tweet:"Under 10K"
//     },

//     {
//         sl:"29.Trending",
//         Htag:"#AmbaniisBlessedBySrinathji",
//         tweet:"21k Tweets"
//     },

//     {
//         sl:"30.Trending",
//         Htag:"#realmeNarzo50IPrime",
//         tweet:"Under 10K"
//     }
// ]

// const NewsDetails = () => {
//   return (
//     <>

//       <div className="newsdetails_main_div" style={{marginTop:"50px"}}>
//         <div className="newsdetails_left_div">
//           <Box
//             sx={{
//               display: "flex",
//               flexWrap: "wrap",
//               "& > :not(style)": {
//                 m: 1,
//                 width: "100%",
//                 height: "auto",
//               },
//             }}
//           >
//             <Paper>
//               <div className="left_div_inner_content">
//                 <div>Heading Path</div>

//                 <div>
//                   <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
//                     Why RespectNationalFlag Is Trending On Twitter In India
//                     |Twitter Trend
//                   </h1>
//                 </div>

//                 <div className="newsdeatils_social_media">
//                   <div>
//                     <h1 style={{fontSize:"20px", fontWeight:"bold"}}>
//                       By <span style={{color:"#3DB2FF"}}>trueTN Desk</span>
//                     </h1>
//                     <p>November 5, 2021 7:28 PM</p>
//                   </div>

//                   <div>
//                     <p>05 Comments</p>
//                     <span>
//                       {" "}
//                       <FacebookIcon color="primary" />{" "}
//                       <TwitterIcon color="primary" /> <InstagramIcon />{" "}
//                       <PinterestIcon sx={{ color: pink[500] }} />{" "}
//                       <GoogleIcon sx={{ color: pink[500] }} />{" "}
//                     </span>
//                   </div>
//                 </div>

//                 <div style={{marginTop:"20px"}}>
//                   <Image
//                     src="https://truetns3.fra1.digitaloceanspaces.com/truetn/respect-national-flag.jpg"
//                     width="740"
//                     height="500"
//                   ></Image>
//                   <p style={{marginTop:"20px"}}>
//                     It's a trending hashtag on Twitter today because Indians are
//                     spreading awareness on Twitter to stop disrespect of
//                     national flags .
//                   </p>
//                   {/* Image Here */}
//                 </div>

//                 <div className="newsdetails_heading_list">
//                   <h1>Act considered as Insult of the national flag-</h1>
//                   <ul>
//                     <li>Use the flag as a toy.</li>
//                     <li>Painted on face.</li>
//                     <li> flag by falling down on the ground. </li>
//                     <li>Use a plastic flag.</li>
//                     <li>Printed flags T-shirts. </li>
//                     <li>Printed flag Mask.</li>
//                   </ul>
//                 </div>

//                 <div className="newsdetails_pragraph">
//                   <p>
//                     <li>
//                       People are demanding legal action on websites where they
//                       use the national flag on masks, shopping bags, clothes,
//                       hair accessories, keychain, and plastic flags in the
//                       selling list.
//                     </li>

//                     <li>
//                       The insult of the national flag is an insult to the
//                       revolutionaries who sacrificed their life just to make the
//                       tiranga Independently fly in the air.
//                     </li>

//                     <li>
//                       It's a harsh reality and punishable offense too that
//                       people buy plastic tiranga on national festival occasions
//                       and once after the use they threw tiranga on the ground
//                       which firstly made an increment in plastic and disrespect
//                       to the flag.
//                     </li>

//                     <li>
//                       This disrespect of the flag shows the manner and way of
//                       treatment to the national flag of the country.
//                     </li>

//                     <li>
//                       We commonly see the respect of the national flag waving
//                       proudly in the sky during national and cultural events.
//                       But we often see when the event is over we see the flag
//                       strewn all over the place and ground.
//                     </li>

//                     <li>
//                       National flag is not just a flag , it's a country's
//                       identity and pride. Flag should be given the same respect
//                       as you gave to the country, it's the reflection of the
//                       country.
//                     </li>

//                     <li>
//                       The way you give respect to the flag is a tribute you are
//                       giving to the country.
//                     </li>

//                     <li>
//                       This disrespect must be stopped or stop the plastic.
//                     </li>
//                   </p>

//                   <h1>
//                     <li>INDIA's 75th INDEPENDENCE DAY</li>
//                   </h1>

//                   <p>
//                     <li>
//                       India and the Indian people are all set to welcome the
//                       75th independence day on 15th of August.
//                     </li>

//                     <li>
//                       This day marks the end of British rule in our country. The
//                       British ruled India for almost 200 years.
//                     </li>

//                     <li>
//                       15th of August is a blessing for India and the Indian
//                       government. We are able to celebrate this day in terms of
//                       various freedom fighters' lives. It's not an important
//                       day, it's a return of various sacrifices made by leaders.
//                     </li>

//                     <li>
//                       Independence day is significant to the freedom fighters
//                       who fought various years for the freedom of the nation.
//                     </li>

//                     <li>
//                       This day is recognized as a victory, national pride and
//                       honour to them.
//                     </li>

//                     <li>
//                       The Prime Minister of India hosts the flag and addresses
//                       the country from the red fort every year.
//                     </li>
//                   </p>
//                 </div>
//               </div>
//             </Paper>
//           </Box>

//           <div className="newsdetails_second_page">
//             <Box
//               sx={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 "& > :not(style)": {
//                   m: 1,
//                   width: "100%",
//                   height: "auto",
//                 },
//               }}
//             >
//               <Paper>
//                 <div className="newsdetails_second_page_main_div">
//                   <div className="second_recent_heading">
//                     <h1>Related Posts</h1>
//                     <button>MORE>></button>
//                   </div>
//                   <Divider />

//                   <div className="bootom_recent_div">
//                     <div>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexWrap: "wrap",
//                           "& > :not(style)": {
//                             m: 1,
//                             width: "100%",
//                             height: "auto",
//                           },
//                         }}
//                       >
//                         <Paper>
//                           <div className="recent_inner_paper">
//                             <div style={{padding:"10px"}}>
//                               <button className="paper_btn">Twitter</button>
//                               <p className="paper_hashtag">
//                                 Whay RespectNationalFlag Is Trending On In India
//                                 | Twitter Trend
//                               </p>
//                             </div>

//                             <div>
//                               <Image
//                                 src="https://truetns3.fra1.digitaloceanspaces.com/truetn/respect-national-flag.jpg"
//                                 width="150px"
//                                 height="120px"
//                               ></Image>
//                             </div>
//                           </div>
//                         </Paper>
//                       </Box>
//                     </div>

//                     <div>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexWrap: "wrap",
//                           "& > :not(style)": {
//                             m: 1,
//                             width: "100%",
//                             height: "auto",
//                           },
//                         }}
//                       >
//                         <Paper>
//                           <div className="recent_inner_paper">
//                             <div style={{padding:"10px"}}>
//                               <button className="paper_btn">Twitter</button>
//                               <p className="paper_hashtag">
//                                 Why TwitterBJPseDarGaya Is Trending On Twitter
//                                 In India | Twitter Trend
//                               </p>
//                             </div>

//                             <div>
//                               <Image
//                                 src="https://truetns3.fra1.digitaloceanspaces.com/truetn/why-bjp-twitter-se-dar-gaya.jpg"
//                                 width="150px"
//                                 height="120px"
//                               ></Image>
//                             </div>
//                           </div>
//                         </Paper>
//                       </Box>
//                     </div>

//                     <div>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexWrap: "wrap",
//                           "& > :not(style)": {
//                             m: 1,
//                             width: "100%",
//                             height: "auto",
//                           },
//                         }}
//                       >
//                         <Paper>
//                           <div className="recent_inner_paper">
//                             <div style={{padding:"10px"}}>
//                               <button className="paper_btn">Twitter</button>
//                               <p className="paper_hashtag">
//                                 Popular Twitter Trending Hashtags Of Day In
//                                 India | TrueTN
//                               </p>
//                             </div>

//                             <div>
//                               <Image
//                                 src="https://truetns3.fra1.digitaloceanspaces.com/truetn/twitter-trending-hashtags.jpg"
//                                 width="150px"
//                                 height="120px"
//                               ></Image>
//                             </div>
//                           </div>
//                         </Paper>
//                       </Box>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="View_all"><button>View All</button></div>
//               </Paper>
//             </Box>
//           </div>
//         </div>

//         <div className="newsdetails_right_div">
//           <Box
//             sx={{
//               display: "flex",
//               flexWrap: "wrap",
//               "& > :not(style)": {
//                 m: 1,
//                 width: "100%",
//                 height: "auto",
//               },
//             }}
//           >
//             <div className="side_heading">
//                 <p>Twitter Trends In India</p>
//             </div>
//             <Paper style={{borderRadius: "15px"}}>

//                 <div className="newsdetails_recent_heading">
//                     <button>Trending #</button>
//                     <button>Popular #</button>
//                 </div>

//                 <div className="newsdetails_input">
//                     <div className="newsdetails_inner_input">
//                         <input type="search" placeholder="India" className="newsdetails_inputbar" /> <span className="srch"> <SearchIcon /> </span>
//                     </div>
//                 </div>


//                 <div>

//                     {
//                         Hashtags.map((ele) => {
//                             return(
//                                 <Box
//                                 sx={{
//                                     display: 'flex',
//                                     flexWrap: 'wrap',
//                                     '& > :not(style)': {
//                                     m: 1,
//                                     width: "100%",
//                                     height: "auto",
//                                     },
//                                 }}
//                                 >
//                                 <Paper className="side_hasgtags">
//                                     <div className="side_recent_div">
//                                         <div className="number_of_hashtag">
//                                             <p>{ele.sl}</p>
//                                             <h1>{ele.Htag}</h1>
//                                         </div>
            
//                                         <div className="number_of_hashtag">
//                                             <p>{ele.tweet}</p>
//                                         </div>
//                                     </div>
//                                 </Paper>
//                                 </Box>
//                             )
//                         })
//                     }

//                 </div>

//             </Paper>
//           </Box>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewsDetails;
