import { Card,Box,Paper,RepeatIcon } from "@mui/material"
import Image from "next/image";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ReTweet = () => {
  return (
    <div>
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: 500,
            height: 500,
            },
        }}
        >
            <Paper />
                <h1> <RepeatIcon /> india Retweeted </h1>
                <Card>
                    <div className="head_section">
                        <div>
                            <Image className="card_image" src="#" width="60px" height="60px"></Image>
                            <Link href="/">
                                <a>@Probinex1</a>
                            </Link>
                        </div>

                        <div>
                            <p className="post_date">10 days ago</p>
                        </div>

                        <div className="middle_section">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>

                        <div className="last_section">
                            <span className="first_span">
                            <FavoriteBorderIcon /> 303
                            </span>

                            <span>
                            <RepeatIcon /> 448
                            </span>
                        </div>

                    </div>

                </Card> 
        </Box>
    </div>
  )
}

export default ReTweet