import Card from "@mui/material/Card";
import Image from "next/image";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import CardData from "../../database/CardData.json";
import Link from "next/link";

const Postdetails = () => {

  return (
    <div>
      <div className="right_div">
        <div className="main_tab_div">
          <Card>
            <div className="tab_bar">
              <div className="btn">
                <ButtonGroup>
                  <Button className="btn_group">Tweet</Button>
                  <Link href="/">
                    <Button className="btn_group"> <a>Retweet</a> </Button>
                  </Link>
                </ButtonGroup>
              </div>

              <div className="btn_one">
                <button>Tagged By</button>
              </div>

              <div className="btn_one">
                <button>Mention Users</button>
              </div>
            </div>
          </Card>
        </div>
        <div className="heading">
          <h1>Crypto Twitter Profile</h1>
        </div>

        <div className="multi_card">
          {CardData.map((ele) => {
            return (
              <>
                <Card className="card">
                  <div className="head_section">
                    <div className="profile_section">
                      <Image
                        className="card_image"
                        src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
                        width="60px"
                        height="60px"
                        style={{ borderRadius: "50%" }}
                      />

                      <div className="card_profile">
                        <h1 className="details">Iqbal</h1>
                        <h1>
                          <Link href="https://truetn.com/india" target="_blank">
                            <a className="loaction card_location">@india</a>
                          </Link>
                        </h1>
                      </div>
                    </div>

                    <div>
                      <p className="post_date">{ele.postdate}</p>
                    </div>
                  </div>

                  <div className="middle_section">
                    <p>{ele.post}</p>
                  </div>

                  {/* <div>
                          <Image className="img" src={ele.image} width="400px" height="400px"></Image>
                        </div> */}

                  <div className="last_section">
                    <span className="first_span">
                      <FavoriteBorderIcon /> {ele.like}
                    </span>

                    <span>
                      <RepeatIcon /> {ele.retweet}
                    </span>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Postdetails;
