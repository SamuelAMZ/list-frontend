import React, { useContext, useEffect } from "react";

// components
import Auth from "../../../components/Auth/Auth";
import Header from "../../../components/Header/Header";

// contexts
import UserContext from "../../../contexts/UserContext";

// icons
import { MdScheduleSend, MdSchedule } from "react-icons/md";
import { HiViewGridAdd } from "react-icons/hi";
import { RiRadioButtonLine } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";

// helpers
import postReq from "../../../helpers/postReq";

// react query
import { useQuery } from "react-query";

// import loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  // const { login, changeLogin } = useContext(UserContext);

  // get analytics
  const handleAnalyticsLoading = async (e) => {
    // send req
    return await postReq({ home: "home" }, "/api/homeAnalytics");
  };

  const {
    data: analyticsData,
    isLoading: analyticsLoading,
    isError,
    isSuccess,
  } = useQuery(["analytics"], handleAnalyticsLoading, {
    refetchOnWindowFocus: false,
    // enabled: true,
    enabled: false,
  });

  return (
    <>
      <Auth />
      <Header page={"Home"} />
      {/* home */}
      <div className="centerer home-container">
        {/* stats */}
        {analyticsLoading && (
          <div className="loaderAnalytics">
            <SkeletonTheme baseColor="#8b8b8b35" highlightColor="#f9fafb">
              <Skeleton height={100} count={1} />
              <Skeleton height={100} count={1} />
              <Skeleton height={100} count={1} />
              <Skeleton height={100} count={1} />
            </SkeletonTheme>
          </div>
        )}
        {/* {analyticsData && analyticsData.code === "ok" && ( */}
        <div className="stats-container-jd">
          <div className="stat-jd">
            <HiViewGridAdd />
            <div>
              <p>Total Ads Left</p>
              <p className="desc">
                {analyticsData?.payload[0].searchCount
                  ? analyticsData.payload[0].searchCount
                  : 1}
              </p>
            </div>
          </div>
          <div className="stat-jd">
            <RiRadioButtonLine />
            <div>
              <p>Ads Online</p>
              <p className="desc">
                {analyticsData?.payload[0].urlCrawledCount
                  ? analyticsData.payload[0].urlCrawledCount
                  : "1"}
              </p>
            </div>
          </div>
          <div className="stat-jd">
            <MdScheduleSend />
            <div>
              <p>Ads Scheduled</p>
              <p className="desc">
                {analyticsData?.payload[0].pageVisitedCount
                  ? analyticsData.payload[0].pageVisitedCount
                  : "1"}
              </p>
            </div>
          </div>
          <div className="stat-jd">
            <MdSchedule />
            <div>
              <p>Expired Ads</p>
              <p className="desc">
                {analyticsData?.payload[0].emailSentCount
                  ? analyticsData.payload[0].emailSentCount
                  : "1"}
              </p>
            </div>
          </div>
        </div>
        {/* )} */}

        {/* rest home page */}
        <div className="home-rest">
          <div className="first-card card-elm">
            <div className="welcome-stuffs">
              <img src={require("../../../assets/user.png")} alt="" />
              <p>Welcome to your dashboard user</p>
            </div>
            <div className="simple-steps">
              <h3>Simple Steps</h3>
              <ul>
                <li>
                  <AiOutlineCheckCircle />
                  <p>
                    Step 1, Complete Your Profile In The "Account Detail" Tab.
                  </p>
                </li>
                <li>
                  <AiOutlineCheckCircle />
                  <p>
                    Step 2, Click On "New Ad" And Fill In The Information Of
                    Your Ad.
                  </p>
                </li>
                <li>
                  <AiOutlineCheckCircle />
                  <p>
                    And That's It, Your Ad Is Verified Then Published And Start
                    Receiving Your Bookings.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="second-card card-elm">
            <div className="some-news">
              <h3>Some News With Discreetlist</h3>
              <div className="news-elm">
                <h4>DiscreetOnes improvements</h4>
                <p>
                  DiscreetOnes is now online for all our users who want to have
                  more visibility for their provider business. Please visit the
                  site for more information
                </p>
              </div>
              <div className="news-elm">
                <h4>DiscreetRub improvements</h4>
                <p>
                  Intense work of redesign and functionalities have also been
                  done on discreetrub for the benefit of all our spas. Visit for
                  more information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
