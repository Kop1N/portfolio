import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

// Replace this with your actual Mailchimp form URL
const mailchimpUrl = "https://app.us2.list-manage.com/subscribe/post?u=0c7fba6e518ef7ab62e884f4c&id=689cea14f4";

export const MailchimpForm = () => {
  return (
    <MailchimpSubscribe
      url={mailchimpUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};
