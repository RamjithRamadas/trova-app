import React, { useState } from "react";
import "./RequestSection.css";
import Avatar from "@material-ui/core/Avatar";
import HorizontalLabelPositionBelowStepper from "../../pages/HorizontalLabelPositionBelowStepper";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { request } from "../../pages/Data";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataState } from "../../store/actions/getData.action";

const RequestSection = () => {
  const [dataStore, setDataStore] = useState(request);
  const dispatch = useDispatch();

  const func = (k) => {
    let tempArray = dataStore.slice();
    let tempStore = {
      serviceId: dataStore[k].serviceID,
      serviceName: dataStore[k].serviceName,
      servicePrice: dataStore[k].servicePrice,
      status: "Active",
      reqDateOne: dataStore[k].reqDateOne,
      reqDateTwo: dataStore[k].reqDateTwo,
      reqTimeOne: dataStore[k].reqTimeOne,
      reqTimeTwo: dataStore[k].reqTimeTwo,
      reqLocation: dataStore[k].reqLocation,
      acceptDate: dataStore[k].acceptDate,
      acceptLocation: dataStore[k].acceptLocation,
    };
    tempArray.splice(k, 1, tempStore);

    dispatch(fetchDataState(tempArray));

    setDataStore(tempArray);
  };

  return (
    <div>
      {dataStore.map((data, k) => {
        return (
          <div>
            <div className="request-container">
              {/* Request Section First Row */}
              <div className="first-session">
                <div className="first-sessionLeft">
                  <h4>{data.status} Request</h4>
                  <p>10.22 am, 12/01/2019</p>
                </div>
                <div className="first-sessionRight">
                  <HorizontalLabelPositionBelowStepper />
                </div>
              </div>
              {/* Request Section Second Row */}
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
                    <Avatar
                      alt="Ray Pressley"
                      src="/images/avatar_shakehand.png"
                    />
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
                <div className="request-section">
                  <div className="request-containerTitle">
                    <h5>This customer is available at:</h5>
                  </div>

                  {/* Date Section */}

                  <div className="request-timeLoc">
                    <div className="request-timeDate">
                      <AccessTimeIcon />
                      <div className="request-date">
                        <h5>{data.reqDateOne}</h5>
                        <h5>{data.reqDateTwo}</h5>
                      </div>
                    </div>
                    <div className="request-time">
                      <h5>{data.reqTimeOne}</h5>
                      <h5>{data.reqTimeTwo}</h5>
                    </div>
                  </div>

                  <div className="request-location">
                    <LocationOnIcon />
                    <h5>{data.reqLocation}</h5>
                  </div>
                </div>
              </div>
              {/* Footer Session */}
              <div className="last-session">
                <Button
                  variant="outlined"
                  size="medium"
                  style={{ color: "#008AB8", border: " 1px solid #008AB8" }}
                  className="left-button"
                >
                  Reschedule
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className="right-button"
                  onClick={() => func(k)}
                >
                  Accept Request
                </Button>
                <MoreHorizIcon style={{ color: "#008AB8" }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RequestSection;
