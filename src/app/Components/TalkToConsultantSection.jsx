import React from "react";

const TalkToConsultantSection = () => {
  return (
    <div className="home_inqurys_forms">
      <div className="content1366">
        <div className="home_inqurys_forms_inner">
          {/* LEFT: FORM */}
          <div className="inqirys_left_box">
            <div className="inquirys_form_info">
              <h6>Get in touch</h6>
              <h3 className="hed-same-htree image-animation">Talk to Consultant</h3>
              <p className="textp image-animation">
                Let’s Build the Next Big Thing Together
              </p>

              <div className="inquirys_contacto">
                <form
                  action="#"
                  method="post"
                  className="wpcf7-form"
                  aria-label="Contact form"
                  encType="multipart/form-data"
                  noValidate
                >
                  <ul>
                    <li className="onecolmns">
                      <p>
                        <span className="wpcf7-form-control-wrap">
                          <input
                            size={40}
                            maxLength={400}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required cstm_form_field"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Full Name"
                            type="text"
                            name="your-name"
                          />
                        </span>
                      </p>
                    </li>

                    <li className="twocolmns1">
                      <p>
                        <span className="wpcf7-form-control-wrap">
                          <input
                            size={40}
                            maxLength={400}
                            className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email cstm_form_field"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Email"
                            type="email"
                            name="your-email"
                          />
                        </span>
                      </p>
                    </li>

                    <li className="twocolmns2">
                      <p>
                        <span className="wpcf7-form-control-wrap">
                          <input
                            size={40}
                            maxLength={400}
                            className="wpcf7-form-control wpcf7-text cstm_form_field"
                            aria-invalid="false"
                            placeholder="Phone"
                            type="text"
                            name="phonen"
                          />
                        </span>
                      </p>
                    </li>

                    <li className="twocolmns1">
                      <p>
                        <span className="wpcf7-form-control-wrap">
                          <select
                            className="wpcf7-form-control wpcf7-select cstm_form_field"
                            aria-invalid="false"
                            name="mens"
                          >
                            <option value="Web Development">Web Development</option>
                            <option value="Creating a Mobile App">
                              Creating a Mobile App
                            </option>
                            <option value="Digital Marketing Services">
                              Digital Marketing Services
                            </option>
                            <option value="Enhancing an Existing Product">
                              Enhancing an Existing Product
                            </option>
                            <option value="Partnership Opportunities">
                              Partnership Opportunities
                            </option>
                            <option value="Enterprise Software Solutions">
                              Enterprise Software Solutions
                            </option>
                            <option value="Others">Others</option>
                          </select>
                        </span>
                      </p>
                    </li>

                    <li className="twocolmns2">
                      <p>
                        <span className="wpcf7-form-control-wrap">
                          <input
                            size={40}
                            className="wpcf7-form-control wpcf7-file"
                            accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav"
                            aria-invalid="false"
                            type="file"
                            name="attatsbx"
                          />
                        </span>
                      </p>
                    </li>

                    <li className="onecolmns onecmns-mesg">
                      <p>
                        <span className="wpcf7-form-control-wrap">
                          <textarea
                            cols={40}
                            rows={10}
                            maxLength={2000}
                            className="wpcf7-form-control wpcf7-textarea cstm_form_field"
                            aria-invalid="false"
                            placeholder="Message"
                            name="mesg"
                          />
                        </span>
                      </p>
                    </li>

                    <li className="onecolmns">
                      <p>
                        <input
                          className="wpcf7-form-control wpcf7-submit has-spinner cstm_form_btn"
                          type="submit"
                          value="Submit"
                        />
                      </p>
                    </li>
                  </ul>

                  <div className="wpcf7-response-output" aria-hidden="true" />
                </form>

                <div className="clear" />
              </div>

              {/* Social Icons */}
              <div className="footer_icon_sol Talkbox">
                <ul className="icon_sol_foot">
                  <li>
                    <a
                      title="facebook"
                      target="_blank"
                      className="icon_sol"
                      href="https://www.facebook.com/NEXTBIGTECHNOLOGY"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      title="linkedin"
                      target="_blank"
                      className="icon_sol"
                      href="https://www.linkedin.com/company/next-big-technology"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a
                      title="twitter"
                      target="_blank"
                      className="icon_sol"
                      href="https://twitter.com/nextbigtec"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      title="instagram"
                      target="_blank"
                      className="icon_sol"
                      href="https://www.instagram.com/next_big_technology/"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      title="pinterest"
                      target="_blank"
                      className="icon_sol"
                      href="https://in.pinterest.com/nextbigtechnology/"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: OFFICES */}
          <div className="inqirys_right_box">
            <div className="inqirys_office_box">
              <h6 className="borline">Office</h6>
              <h2 className="hed-same-cls image-animation">
                Our <span>Offices</span>
              </h2>

              <ul>
                {/* USA */}
                <li>
                  <div className="ofc_icon">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://nextbigtechnology.com/wp-content/uploads/2018/06/usa.jpg.webp"
                      />
                      <img
                        src="https://nextbigtechnology.com/wp-content/uploads/2018/06/usa.jpg"
                        alt="usa"
                      />
                    </picture>
                    <h4>USA</h4>
                  </div>

                  <div className="office-addy-hover">
                    <p>
                      2710 Pace West Dr, Tucson
                      <br />
                      AZ 85730
                    </p>
                    <div className="officeony">
                      <a
                        title="google"
                        href="https://www.google.com/maps?cid=15242851899204032980&hl=en"
                      >
                        <i className="fa-solid fa-location-dot" />
                      </a>
                      <a title="phone" href="tel:+13054826524">
                        <i className="fa-solid fa-phone-volume" />
                      </a>
                      <a title="mailto" href="mailto:sales@nextbigtechnology.com">
                        <i className="fa-solid fa-envelope" />
                      </a>
                    </div>
                  </div>
                </li>

                {/* Australia */}
                <li>
                  <div className="ofc_icon">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://nextbigtechnology.com/wp-content/uploads/2018/06/aus.jpg.webp"
                      />
                      <img
                        src="https://nextbigtechnology.com/wp-content/uploads/2018/06/aus.jpg"
                        alt="australia"
                      />
                    </picture>
                    <h4>Australia</h4>
                  </div>

                  <div className="office-addy-hover">
                    <p>
                      21 benalia Cres Marayong
                      <br />
                      2148
                    </p>
                    <div className="officeony">
                      <a
                        title="google"
                        href="https://www.google.com/maps?cid=9067827086810544403&hl=en"
                      >
                        <i className="fa-solid fa-location-dot" />
                      </a>
                      <a title="phone" href="tel:+61478053599">
                        <i className="fa-solid fa-phone-volume" />
                      </a>
                      <a title="mailto" href="mailto:sales@nextbigtechnology.com">
                        <i className="fa-solid fa-envelope" />
                      </a>
                    </div>
                  </div>
                </li>

                {/* UK */}
                <li>
                  <div className="ofc_icon">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://nextbigtechnology.com/wp-content/uploads/2018/06/uk.jpg.webp"
                      />
                      <img
                        src="https://nextbigtechnology.com/wp-content/uploads/2018/06/uk.jpg"
                        alt="uk"
                      />
                    </picture>
                    <h4>UK</h4>
                  </div>

                  <div className="office-addy-hover">
                    <p>
                      18 Tuesday Market Place,
                      <br />
                      King's Lynn, Norfolk, PE30 IJW
                    </p>
                    <div className="officeony">
                      <a
                        title="google"
                        href="https://www.google.com/maps?cid=2593320336625711800&hl=en"
                      >
                        <i className="fa-solid fa-location-dot" />
                      </a>
                      <a title="phone" href="tel:+4401553600090">
                        <i className="fa-solid fa-phone-volume" />
                      </a>
                      <a title="mailto" href="mailto:sales@nextbigtechnology.com">
                        <i className="fa-solid fa-envelope" />
                      </a>
                    </div>
                  </div>
                </li>

                {/* India */}
                <li>
                  <div className="ofc_icon">
                    <img
                      width={31}
                      height={21}
                      src="https://nextbigtechnology.com/wp-content/uploads/2021/08/Indiay.jpg"
                      alt="india"
                    />
                    <h4>India</h4>
                  </div>

                  <div className="office-addy-hover">
                    <p>
                      Sikar Road, Jaipur,
                      <br />
                      Rajasthan
                    </p>
                    <div className="officeony">
                      <a
                        title="google"
                        href="https://www.google.com/maps?cid=9924186631767729239&hl=en"
                      >
                        <i className="fa-solid fa-location-dot" />
                      </a>
                      <a title="phone" href="tel:+919950726570">
                        <i className="fa-solid fa-phone-volume" />
                      </a>
                      <a title="mailto" href="mailto:sales@nextbigtechnology.com">
                        <i className="fa-solid fa-envelope" />
                      </a>
                    </div>
                  </div>
                </li>

                {/* Sweden */}
                <li>
                  <div className="ofc_icon">
                    <img
                      width={31}
                      height={19}
                      src="https://nextbigtechnology.com/wp-content/uploads/2023/05/Sweden.png"
                      alt="Sweden"
                    />
                    <h4>Sweden</h4>
                  </div>

                  <div className="office-addy-hover">
                    <p>
                      SKÄRHOLMSTORGET 1, 127 48
                      <br />
                      Skärholmen
                    </p>
                    <div className="officeony">
                      <a title="google" href="#">
                        <i className="fa-solid fa-location-dot" />
                      </a>
                      <a title="phone" href="tel:+46707946194">
                        <i className="fa-solid fa-phone-volume" />
                      </a>
                      <a title="mailto" href="mailto:sales@nextbigtechnology.com">
                        <i className="fa-solid fa-envelope" />
                      </a>
                    </div>
                  </div>
                </li>

                {/* Canada */}
                <li>
                  <div className="ofc_icon">
                    <img
                      width={30}
                      height={20}
                      src="https://nextbigtechnology.com/wp-content/uploads/2025/02/Canadas.png"
                      alt="Canada"
                    />
                    <h4>Canada</h4>
                  </div>

                  <div className="office-addy-hover">
                    <p>
                      70 Forest Manor Road,
                      <br />
                      Toronto, Ontario M2J 0A9
                    </p>
                    <div className="officeony">
                      <a title="google" href="#">
                        <i className="fa-solid fa-location-dot" />
                      </a>
                      <a title="phone" href="tel:+14168068825">
                        <i className="fa-solid fa-phone-volume" />
                      </a>
                      <a title="mailto" href="mailto:sales@nextbigtechnology.com">
                        <i className="fa-solid fa-envelope" />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </div>
  );
};

export default TalkToConsultantSection;
