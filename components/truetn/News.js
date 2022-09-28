// import { Divider } from "@mui/material";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Image from "next/image";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import Carousel from "react-material-ui-carousel";


// const SlideData = [
//   "https://truetns3.fra1.digitaloceanspaces.com/truetn/RRR-beat-bahubali.jpg",
//   "https://truetns3.fra1.digitaloceanspaces.com/truetn/5-reason-why-do-politicians-use.jpg",
//   "https://truetns3.fra1.digitaloceanspaces.com/truetn/countries-where-twitter-is-banned.png",
//   "https://truetns3.fra1.digitaloceanspaces.com/truetn/2_child_policy_in_up.jpg.png",
//   "https://truetns3.fra1.digitaloceanspaces.com/truetn/top-5-reason-why-bts-is-so-popular.jpg",
//   "https://truetns3.fra1.digitaloceanspaces.com/truetn/BTS_profile.jpg",
//   "https://truetns3.fra1.digitaloceanspaces.com/truetn/why%20we%20stand%20with%20amir%20khan%20trending%20on%20twitter.png",
// ];

// const News = () => {
//   return (
//     <>


//       <div className="news_section">
//         <div className="news_content">
//           <div className="heading">
//             <h1>
//               <span className="line">|</span>NEWS
//             </h1>
//           </div>
//         </div>

//         <div className="news_main_div">
//           <div className="carasol_div">
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
//                 <div>
//                   <Carousel
//                     className="carasousel"
//                     autoPlay={true}
//                     animation="slide"
//                     indicators={false}
//                     navButtonsAlwaysVisible={true}
//                     cycleNavigation={true}
//                     navButtonsProps={{
//                       style: {
//                         backgroundColor: "#16213E",
//                         color: "#FFFFFF",
//                         borderRadius: "10px",
//                         height: "50px",
//                       },
//                     }}
//                   >
//                     {SlideData.map((imag, i) => {
//                       return (
//                         <>
//                           <img className="image" src={imag} alt="Banner" />
//                         </>
//                       );
//                     })}
//                   </Carousel>
//                 </div>
//               </Paper>
//             </Box>
//           </div>

//           <div className="card_div_second">
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
//               <Paper className="paper">
//                 <div className="right_div_heading">
//                   <h1>Latest News</h1>
//                 </div>

//                 <Paper className="Trending_hashtags">
//                   <div className="right_paper_div">
//                     <div className="first_div">
//                       <button className="paper_btn">Twitter</button>
//                       <p className="paper_hashtag">
//                         Why TwitterBJPseDarGya is Trending On Twitter In India
//                         |Twitter Trend
//                       </p>
//                     </div>
//                     <div className="second_div">
//                       <Image
//                         src="https://truetns3.fra1.digitaloceanspaces.com/truetn/respect-national-flag.jpg"
//                         width="200"
//                         height="150"
//                         style={{
//                           borderRadius:"10px"
//                         }}
//                       ></Image>
//                     </div>
//                   </div>
//                 </Paper>

//                 <Paper className="Trending_hashtags">
//                   <div className="right_paper_div">
//                     <div className="first_div">
//                       <button className="paper_btn">Twitter</button>
//                       <p className="paper_hashtag">
//                         Popular Twitter Trending Hashtags Of The Day OIn India |
//                         TrueTN
//                       </p>
//                     </div>
//                     <div className="second_div">
//                       <Image
//                         src="https://truetns3.fra1.digitaloceanspaces.com/truetn/why-bjp-twitter-se-dar-gaya.jpg"
//                         width="200"
//                         height="150"
//                         style={{
//                           borderRadius:"10px"
//                         }}
//                       ></Image>
//                     </div>
//                   </div>
//                 </Paper>

//                 <Paper className="Trending_hashtags">
//                   <div className="right_paper_div">
//                     <div className="first_div">
//                       <button className="paper_btn">Twitter</button>
//                       <p className="paper_hashtag">
//                         Twittert Trending Hashtag In India With Reason | TrueTN
//                       </p>
//                     </div>
//                     <div className="second_div">
//                       <Image
//                         src="https://truetns3.fra1.digitaloceanspaces.com/truetn/twitter-trending-hashtags.jpg"
//                         width="200"
//                         height="150"
//                         style={{
//                           borderRadius:"10px"
//                         }}
//                       ></Image>
//                     </div>
//                   </div>
//                 </Paper>

//                 <div className="View_all">
//                   <button>View All</button>
//                 </div>
//               </Paper>
//             </Box>
//           </div>
//         </div>

//         <div className="recent_div">
//           <Box
//             sx={{
//               display: "flex",
//               flexWrap: "wrap",
//               "& > :not(style)": {
//                 m: 1,
//                 width: "86vw",
//                 height: "auto",
//                 margin: "auto",
//                 backgroundColor: "#F9F9F9",
//               },
//             }}
//           >
//             <Paper>
//               <div className="recent_heading">
//                 <h1>Recent News in India</h1>
//                 <button className="recent_heading_btn">MORE>></button>
//               </div>
//               <Divider style={{ width: "83.5vw", margin: "auto" }} />

//               <div className="recent_content">
//                 <div className="card_one">
//                   <Card sx={{ maxWidth: 275 }}>
//                     <CardMedia
//                       component="img"
//                       height="140"
//                       image="https://truetns3.fra1.digitaloceanspaces.com/truetn/respect-national-flag.jpg"
//                       alt="green iguana"
//                     />
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         margin: "10px",
//                       }}
//                     >
//                       <button className="paper_btn">Twitter</button>
//                       <h6>India</h6>
//                     </div>

//                     <div style={{ margin: "10px 10px 30px 10px" }}>
//                       <p className="paper_hashtag">
//                         Why TwitterBJPseDarGya is Trending On Twitter In India
//                         |Twitter Trend
//                       </p>
//                     </div>
//                   </Card>
//                 </div>

//                 <div className="card_second">
//                   <div className="inner_paper">
//                     <Paper className="Trending_hashtags">
//                       <div className="right_paper_div">
//                         <div className="first_div">
//                           <button className="paper_btn">Twitter</button>
//                           <p className="paper_hashtag">
//                             Why TwitterBJPseDarGya is Trending On Twitter In
//                             India |Twitter Trend
//                           </p>
//                         </div>
//                         <div className="second_div">
//                           <Image
//                             src="https://truetns3.fra1.digitaloceanspaces.com/truetn/respect-national-flag.jpg"
//                             width="300"
//                             height="220"
//                           ></Image>
//                         </div>
//                       </div>
//                     </Paper>

//                     <Paper className="Trending_hashtags">
//                       <div className="right_paper_div">
//                         <div className="first_div">
//                           <button className="paper_btn">Twitter</button>
//                           <p className="paper_hashtag">
//                             Popular Twitter Trending Hashtags Of The Day OIn
//                             India | TrueTN
//                           </p>
//                         </div>
//                         <div className="second_div">
//                           <Image
//                             src="https://truetns3.fra1.digitaloceanspaces.com/truetn/why-bjp-twitter-se-dar-gaya.jpg"
//                             width="300"
//                             height="220"
//                           ></Image>
//                         </div>
//                       </div>
//                     </Paper>
//                   </div>

//                   <div className="inner_paper">
//                     <Paper className="Trending_hashtags">
//                       <div className="right_paper_div">
//                         <div className="first_div">
//                           <button className="paper_btn">Twitter</button>
//                           <p className="paper_hashtag">
//                             Twittert Trending Hashtag In India With Reason |
//                             TrueTN
//                           </p>
//                         </div>
//                         <div className="second_div">
//                           <Image
//                             src="https://truetns3.fra1.digitaloceanspaces.com/truetn/twitter-trending-hashtags.jpg"
//                             width="300"
//                             height="220"
//                           ></Image>
//                         </div>
//                       </div>
//                     </Paper>

//                     <Paper className="Trending_hashtags">
//                       <div className="right_paper_div">
//                         <div className="first_div">
//                           <button className="paper_btn">Twitter</button>
//                           <p className="paper_hashtag">
//                             Twittert Trending Hashtag In India With Reason |
//                             TrueTN
//                           </p>
//                         </div>
//                         <div className="second_div">
//                           <Image
//                             src="https://truetns3.fra1.digitaloceanspaces.com/truetn/top-10-twitter-trending.jpg"
//                             width="300"
//                             height="220"
//                           ></Image>
//                         </div>
//                       </div>
//                     </Paper>
//                   </div>
//                 </div>

//                 <div className="card_one">
//                   <Card sx={{ maxWidth: 275 }}>
//                     <CardMedia
//                       component="img"
//                       height="140"
//                       image="https://truetns3.fra1.digitaloceanspaces.com/truetn/respect-national-flag.jpg"
//                       alt="green iguana"
//                     />
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         margin: "10px",
//                       }}
//                     >
//                       <button className="paper_btn">Twitter</button>
//                       <h6>India</h6>
//                     </div>

//                     <div style={{ margin: "10px 10px 30px 10px" }}>
//                       <p className="paper_hashtag">
//                         Why TwitterBJPseDarGya is Trending On Twitter In India
//                         |Twitter Trend
//                       </p>
//                     </div>
//                   </Card>
//                 </div>
//               </div>
//             </Paper>
//           </Box>
//         </div>
//       </div>
//     </>
//   );
// };

// export default News;
