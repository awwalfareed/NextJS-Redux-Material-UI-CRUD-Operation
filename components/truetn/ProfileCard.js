import Card from "@mui/material/Card";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Link from "next/link"

const ProfileCard = () => {
  return (
    <div>
      <Card>
        <div className="card_div">
          <Image
            className="card_image"
            src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
            width="60px"
            height="60px"
            style={{ borderRadius: "50%" }}
          />

          <div className="profile_name">
            <h1 className="details">Iqbal</h1>
            <Link href="https://truetn.com/india" target="_blank">
              <a className="loaction">@india</a>
            </Link>
          </div>

          <div className="profile_name">
            <p>
              <LocationOnIcon /> Minima
            </p>
            <InsertLinkIcon />
          </div>

          <div className="profile_name">
            <Link href="https://incentive.minima.global/account/regist%E2%80%A6">
              <a>incentive.minima.global/account/regist...</a>
            </Link>
          </div>

          <div className="profile_name details">
            <p className="profile_name">
              Hey! You can earn Rewards for running a node on your phone 😊
              Register via my Invite Link: https://t.co/yZ4YO8ymhD
            </p>
            <p>
              <DateRangeIcon /> Joined on Mar 16, 2007
            </p>
          </div>

          <div className="bottom_section">
            <h2>
              <span className="social_media">Tweets</span>
              <br /> 483
            </h2>

            <h2>
              <span className="social_media">Followers</span>
              <br /> 22k
            </h2>

            <h2>
              <span className="social_media">Following</span>
              <br /> 2k
            </h2>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;