import React, { useRef, useState } from "react";

// router
import { useNavigate, useLocation } from "react-router-dom";

// text editor
import { Editor } from "@tinymce/tinymce-react";

// date and time picker
import DateTimePicker from "react-datetime-picker";

// components
import Header from "../../../components/Header/Header";

// icons
import { IoIosArrowBack } from "react-icons/io";

const New = () => {
  const editorRef = useRef(null);
  const navigate = useNavigate();

  // states
  const [isSchedule, setIsSchedule] = useState(false);
  const [numberOfDays, setNumberOfDays] = useState(1);
  // schedule states
  const [schedulesValue1, setSchedulesValue1] = useState(null);
  const [schedulesValue2, setSchedulesValue2] = useState(null);
  const [schedulesValue3, setSchedulesValue3] = useState(null);
  const [schedulesValue4, setSchedulesValue4] = useState(null);
  const [schedulesValue5, setSchedulesValue5] = useState(null);
  const [schedulesValue6, setSchedulesValue6] = useState(null);
  const [schedulesValue7, setSchedulesValue7] = useState(null);

  // handle form
  const handleForm = (e) => {
    e.preventDefault();

    // log
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
    console.log({
      schedulesValue1,
      schedulesValue2,
      schedulesValue3,
      schedulesValue4,
      schedulesValue5,
      schedulesValue6,
      schedulesValue7,
    });
  };

  return (
    <>
      <Header page={"New Ad"} />
      {/* new */}
      <div className="centerer newad-container">
        <div className="newad-elements">
          {/* back */}
          <button className="btn btn-link" onClick={() => navigate(-1)}>
            <IoIosArrowBack /> Back
          </button>
          {/* form */}
          <div className="heading">
            <h2>Post a new ad</h2>
          </div>

          <form className="data-form" onSubmit={handleForm}>
            {/* title */}
            <div className="form-elm">
              <label htmlFor="keyword">Ad Title</label>
              <input
                id="title"
                type="text"
                placeholder="Your ad name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* description */}
            <div className="form-elm">
              <label htmlFor="keyword">Descrption</label>
              <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue=""
                init={{
                  height: 200,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar: "undo redo | formatselect | " + "bold",
                  content_style:
                    "body { font-family:Poppins,sans-serif; font-size:18px; font-weigth:600 }",
                }}
              />
            </div>

            {/* categories */}
            <div className="form-elm">
              <label htmlFor="categories">Categories</label>
              <select id="categories" className="select select-bordered w-full">
                <option value="bodyrubs">Body Rubs</option>
                <option value="domandfetish">Dom & Fetish</option>
                <option value="escorttourbookings">Escort Tour Bookings</option>
                <option value="femaleescort">Female Escort</option>
                <option value="maleescort">Male Escort</option>
                <option value="nowhiring">Now Hiring</option>
                <option value="onlineservices">Online Services</option>
                <option value="transgenderescort">Transgender Escort</option>
              </select>
            </div>

            {/* schedules */}
            <div className="form-elm">
              <label htmlFor="schedule">Schedule?</label>
              <select
                id="schedule"
                className="select select-bordered w-full"
                value={isSchedule}
                onChange={(e) => setIsSchedule(e.target.value)}
              >
                <option value="">No</option>
                <option value={true}>Yes</option>
              </select>
            </div>
            {isSchedule && (
              <>
                {numberOfDays >= 1 && (
                  <div className="form-elm">
                    <label>Day1</label>
                    <DateTimePicker
                      className="list-data input input-bordered w-full"
                      format="dd-MM-y h:mm a"
                      minDate={new Date()}
                      onChange={setSchedulesValue1}
                      value={schedulesValue1}
                    />
                  </div>
                )}
                {numberOfDays >= 2 && (
                  <div className="form-elm">
                    <label>Day2</label>
                    <DateTimePicker
                      className="list-data input input-bordered w-full"
                      minDate={new Date()}
                      onChange={setSchedulesValue2}
                      value={schedulesValue2}
                    />
                  </div>
                )}
                {numberOfDays >= 3 && (
                  <div className="form-elm">
                    <label>Day3</label>
                    <DateTimePicker
                      className="list-data input input-bordered w-full"
                      minDate={new Date()}
                      onChange={setSchedulesValue3}
                      value={schedulesValue3}
                    />
                  </div>
                )}
                {numberOfDays >= 4 && (
                  <div className="form-elm">
                    <label>Day4</label>
                    <DateTimePicker
                      className="list-data input input-bordered w-full"
                      minDate={new Date()}
                      onChange={setSchedulesValue4}
                      value={schedulesValue4}
                    />
                  </div>
                )}
                {numberOfDays >= 5 && (
                  <div className="form-elm">
                    <label>Day5</label>
                    <DateTimePicker
                      className="list-data input input-bordered w-full"
                      minDate={new Date()}
                      onChange={setSchedulesValue5}
                      value={schedulesValue5}
                    />
                  </div>
                )}
                {numberOfDays >= 6 && (
                  <div className="form-elm">
                    <label>Day6</label>
                    <DateTimePicker
                      className="list-data input input-bordered w-full"
                      minDate={new Date()}
                      onChange={setSchedulesValue6}
                      value={schedulesValue6}
                    />
                  </div>
                )}
                {numberOfDays >= 7 && (
                  <div className="form-elm">
                    <label>Day7</label>
                    <DateTimePicker
                      className="list-data input input-bordered w-full"
                      minDate={new Date()}
                      onChange={setSchedulesValue7}
                      value={schedulesValue7}
                    />
                  </div>
                )}

                {/* add new btn */}
                {numberOfDays <= 6 && (
                  <label
                    className="btn btn-primary btn-outline"
                    onClick={() => setNumberOfDays(Number(numberOfDays) + 1)}
                  >
                    Add a new date
                  </label>
                )}
              </>
            )}

            {/* cover images */}
            <div className="form-elm">
              <label htmlFor="cover-image">Cover image</label>
              <input
                id="cover-image"
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>

            {/* images */}
            <div className="form-elm">
              <label htmlFor="ad-images">Ad images</label>
              <input
                id="ad-images"
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>

            {/* province */}
            <div className="form-elm">
              <label htmlFor="provinces">Provinces</label>
              <select id="provinces" className="select select-bordered w-full">
                <option value="ab">Alberta</option>
                <option value="bc">British Colombia</option>
                <option value="ma">Manitoba</option>
                <option value="nwt">N.W.T</option>
                <option value="nb">New Brunswick</option>
                <option value="nf">New Foundland</option>
                <option value="ns">Nova Scotia</option>
                <option value="nu">Nunavut</option>
                <option value="on">Ontario</option>
                <option value="pei">P.E.I</option>
                <option value="qu">Quebec</option>
                <option value="sa">Saskachewan</option>
                <option value="yu">Yukon</option>
              </select>
            </div>

            {/* note */}
            <p className="note">
              NOTES: Contact informations are filled in automatically to allow
              you to go faster in posting ads. Go to your "Account -{">"}
              Recurring Info" to update or add to it.
            </p>

            <button className="btn btn-primary sbm-btn">Post Ad</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default New;
