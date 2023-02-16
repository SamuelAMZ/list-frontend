import React from "react";

// components
import Header from "../../../components/Header/Header";

// icons
import { BiEdit, BiRepost } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";

const Expired = () => {
  return (
    <>
      <Header page={"All Ads"} />
      {/* home */}
      <div className="centerer home-container">
        <div className="all-page-backbone">
          {/* heading */}
          <div className="headings-all">
            <h2>All of your expired ads</h2>
            <p>
              This page displays all of your expired ads, you can choose to
              edit, remove from this page
            </p>
          </div>

          <div className="all-ads-container">
            {/* ads */}
            <div className="one-ad">
              {/* img */}
              <img src={require("../../../assets/test.jpg")} alt="" />
              {/* details */}
              <div className="-other-details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, fugit!
                </p>
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow faq-details"
                >
                  <input type="checkbox" />
                  <div className="collapse-title">
                    <p>schedule dates?</p>
                  </div>
                  <div className="collapse-content">
                    <p>2023 jan 11</p>
                  </div>
                </div>
              </div>
              {/* actions */}
              <div className="buttons-action">
                <button className="button-accent action-btn">
                  <BiEdit /> Edit ad
                </button>

                <button className="button-accent action-btn">
                  <BiRepost /> Repost ad
                </button>
                <button className="button-black action-btn">
                  <RiDeleteBin2Line /> Remove ad
                </button>
              </div>
            </div>
            <div className="one-ad">
              {/* img */}
              <img src={require("../../../assets/test.jpg")} alt="" />
              {/* details */}
              <div className="-other-details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, fugit!
                </p>
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow faq-details"
                >
                  <input type="checkbox" />
                  <div className="collapse-title">
                    <p>schedule dates?</p>
                  </div>
                  <div className="collapse-content">
                    <p>2023 jan 11</p>
                  </div>
                </div>
              </div>
              {/* actions */}
              <div className="buttons-action">
                <button className="button-accent action-btn">
                  <BiEdit /> Edit ad
                </button>

                <button className="button-accent action-btn">
                  <BiRepost /> Repost ad
                </button>
                <button className="button-black action-btn">
                  <RiDeleteBin2Line /> Remove ad
                </button>
              </div>
            </div>
            <div className="one-ad">
              {/* img */}
              <img src={require("../../../assets/test.jpg")} alt="" />
              {/* details */}
              <div className="-other-details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, fugit!
                </p>
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow faq-details"
                >
                  <input type="checkbox" />
                  <div className="collapse-title">
                    <p>schedule dates?</p>
                  </div>
                  <div className="collapse-content">
                    <p>2023 jan 11</p>
                  </div>
                </div>
              </div>
              {/* actions */}
              <div className="buttons-action">
                <button className="button-accent action-btn">
                  <BiEdit /> Edit ad
                </button>

                <button className="button-accent action-btn">
                  <BiRepost /> Repost ad
                </button>
                <button className="button-black action-btn">
                  <RiDeleteBin2Line /> Remove ad
                </button>
              </div>
            </div>
            <div className="one-ad">
              {/* img */}
              <img src={require("../../../assets/test.jpg")} alt="" />
              {/* details */}
              <div className="-other-details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, fugit!
                </p>
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow faq-details"
                >
                  <input type="checkbox" />
                  <div className="collapse-title">
                    <p>schedule dates?</p>
                  </div>
                  <div className="collapse-content">
                    <p>2023 jan 11</p>
                  </div>
                </div>
              </div>
              {/* actions */}
              <div className="buttons-action">
                <button className="button-accent action-btn">
                  <BiEdit /> Edit ad
                </button>

                <button className="button-accent action-btn">
                  <BiRepost /> Repost ad
                </button>
                <button className="button-black action-btn">
                  <RiDeleteBin2Line /> Remove ad
                </button>
              </div>
            </div>
            <div className="one-ad">
              {/* img */}
              <img src={require("../../../assets/test.jpg")} alt="" />
              {/* details */}
              <div className="-other-details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, fugit!
                </p>
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow faq-details"
                >
                  <input type="checkbox" />
                  <div className="collapse-title">
                    <p>schedule dates?</p>
                  </div>
                  <div className="collapse-content">
                    <p>2023 jan 11</p>
                  </div>
                </div>
              </div>
              {/* actions */}
              <div className="buttons-action">
                <button className="button-accent action-btn">
                  <BiEdit /> Edit ad
                </button>

                <button className="button-accent action-btn">
                  <BiRepost /> Repost ad
                </button>
                <button className="button-black action-btn">
                  <RiDeleteBin2Line /> Remove ad
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expired;
