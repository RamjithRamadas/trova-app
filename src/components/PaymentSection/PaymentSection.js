import React from "react";
import "./PaymentSection.css";
import Avatar from "@material-ui/core/Avatar";
import HorizontalLabelPositionBelowStepper from "../../pages/HorizontalLabelPositionBelowStepper";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useSelector } from "react-redux";

function PaymentSection() {
  let cArray = useSelector((state) => state.data.dataState);

  const aService = cArray.filter((click) => click.status === "Active");
  console.log(aService);

  return (
    <div>
      {aService.map((data, ky) => {
        return (
          <div>
            <div className="payment-container">
              {/* Payment Section First Row */}
              <div className="first-session">
                <div className="first-sessionLeft">
                  <h4>Pending Payment</h4>
                  <p>10.22 am, 12/01/2019</p>
                </div>
                <div className="first-sessionRight">
                  <HorizontalLabelPositionBelowStepper />
                </div>
              </div>
              {/* Payment Section Second Row */}
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
                <div className="payment-containerInfo">
                  <div className="payment-containerTitle">
                    <h5>Service is complete, please confirm payment amount:</h5>
                  </div>

                  {/* Date Section */}

                  <div className="payment-details">
                    <div className="payment-invoice">
                      <div className="payment-session">
                        <h4>Invoice item:</h4>
                        <div className="payment-sessionLeft">
                          <h5>Session Price</h5>
                        </div>
                        <div className="payment-sessionPrice">
                          <h5>${data.servicePrice}</h5>
                        </div>
                      </div>
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
                    Start a Chat
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    className="right-button"
                  >
                    Resent Invoice
                  </Button>
                  <MoreHorizIcon style={{ color: "#008AB8" }} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default PaymentSection;
