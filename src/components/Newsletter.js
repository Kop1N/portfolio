import { useState, useEffect, useRef } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef(null);

  // Load reCAPTCHA v2 Checkbox script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);

    // Define callback function globally
    window.onCaptchaSuccess = () => setCaptchaVerified(true);
  }, []);

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || email.indexOf("@") === -1) return;

    const token = window.grecaptcha.getResponse();
    if (!token) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    onValidated({ EMAIL: email });
    window.grecaptcha.reset(); // reset for next use
    setCaptchaVerified(false);
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to my newsletter</h3>
            {status === 'sending' && <Alert variant="info">Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
             {/* ✅ reCAPTCHA v2 Checkbox */}
                <div
                  className="g-recaptcha"
                  data-sitekey="6Lfu82ErAAAAAEInwn3BfHsIdduSrGIEM77-aJVO"
                  data-callback="onCaptchaSuccess"
                  ref={recaptchaRef}
                  style={{ marginTop: "12px", marginBottom: "12px" }}
                ></div>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />

               

                <button type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
