import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  FaPaperPlane,
  FaPhone,
  FaMapMarker,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaMedium,
} from 'react-icons/fa';

function BottomAbout() {
  const [state, handleSubmit] = useForm('mgedkwky');
  if (state.succeeded) {
    return <p className="center">Thanks for chatting</p>;
  }
  return (
    <div id="bottom" className="Bottom">
      <div className="free">
        <div className="txthead">I take on freelance opportunities</div>
        <div className="txt">
          Have an exciting project or idea ?
          <div className="contsmes">Contact Me:</div>
        </div>
        <section id="contact">
          <div class="contact-wrapper" onSubmit={handleSubmit}>
            <form id="contact-form" className="form-horizontal">
              <div class="form-group">
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="NAME"
                    name="name"
                  />
                  <ValidationError
                    prefix="name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-12">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="EMAIL"
                    name="email"
                    value=""
                    required
                  />
                  <ValidationError
                    prefix="email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <textarea
                class="form-control"
                rows="10"
                placeholder="MESSAGE"
                name="message"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                class="btn btn-primary send-button"
                id="submit"
                type="submit"
                disabled={state.submitting}
                value="SEND"
              >
                <div class="alt-send-button">
                  <FaPaperPlane />
                  <span class="send-text">SEND</span>
                </div>
              </button>
            </form>

            <div class="direct-contact-container">
              <ul class="contact-list">
                <li class="list-item">
                  <FaMapMarker />
                  <span class="contact-text place">Nairobi</span>
                </li>

                <li class="list-item">
                  <FaPhone />
                  <span class="contact-text phone">
                    <a href="tel:+254711123120" title="Give me a call">
                      +254711123120
                    </a>
                  </span>
                </li>

                <li class="list-item">
                  <FaEnvelope />
                  <span class="contact-text gmail">
                    <a
                      href="mailto:amuturi01@gmail.com"
                      title="Send me an email"
                    >
                      amuturi01@gmail.com
                    </a>
                  </span>
                </li>
              </ul>

              <hr />
              <ul class="social-media-list">
                <li>
                  <a
                    href="https://github.com/a0x001"
                    target="_blank"
                    class="contact-icon"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" class="contact-icon">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/a0x001"
                    target="_blank"
                    class="contact-icon"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" class="contact-icon">
                    <FaMedium />
                  </a>
                </li>
              </ul>
              <hr />

              <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BottomAbout;
