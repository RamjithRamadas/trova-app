import React from "react";
import "./ServiceSection.css";
import Avatar from "@material-ui/core/Avatar";
import HorizontalLabelPositionBelowStepper from "../../pages/HorizontalLabelPositionBelowStepper";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useSelector } from "react-redux";

function ServiceSection() {
  let clickedArray = useSelector((state) => state.data.dataState);

  const activeService = clickedArray.filter(
    (click) => click.status === "Active"
  );
  console.log(activeService);

  return (
    <div>
      {activeService.map((data, ky) => {
        return (
          <div>
            <div className="service-container">
              {/* Service Section First Row */}
              <div className="first-session">
                <div className="first-sessionLeft">
                  <h4>Upcoming Service</h4>
                  <p>10.22 am, 12/01/2019</p>
                </div>
                <div className="first-sessionRight">
                  <HorizontalLabelPositionBelowStepper />
                </div>
              </div>
              {/* Service Section Second Row */}
              <div className="second-session">
                <div className="second-sessionLeft">
                  <div className="second-sessionLeftAvatar">
                    <Avatar
                      alt="Ray Presseley"
                      src="/images/avatar_raypressley.png"
                    />
                  </div>
                  <div className="second-sessionLeftInfo">
                    <h4>Ray Presseley</h4>
                    <p>San Francisco</p>
                  </div>
                </div>
                <div className="second-sessionRight">
                  <div className="second-sessionRightAvatar">
                    <Avatar alt="Image" src="/images/avatar_shakehand.png" />
                  </div>
                  <div className="second-sessionRightInfo">
                    <h4>
                      You two had 12<br></br>deals before.
                    </h4>
                  </div>
                </div>
              </div>
              {/* Details Session */}
              <div className="third-session">
                <div className="service-containerInfo">
                  <div className="service-containerTitle">
                    <h5>
                      Check in here or scan customer’s QR Code to check in when
                      the service is about to start
                    </h5>
                  </div>

                  {/* Date & Location */}

                  <div className="service-timeLoc">
                    <div className="service-timeDate">
                      <div className="service-date">
                        <AccessTimeIcon />
                        <h5>{data.acceptDate}</h5>
                      </div>
                    </div>
                    <div className="service-location">
                      <LocationOnIcon />
                      <h5>{data.acceptLocation}</h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Session */}
              <div className="last-session">
                <Button
                  variant="contained"
                  size="medium"
                  style={{ color: "#008AB8", border: " 1px solid #008AB8" }}
                  className="left-button"
                >
                  Check In
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className="right-button"
                >
                  Generate Invoice
                </Button>
                <MoreHorizIcon style={{ color: "#008AB8" }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ServiceSection;
