import React from "react";
import Link from "@material-ui/core/Link";
export const ContactCLS = () => {
  return (
    <div>
      <h4>Reaching out to Community Legal Services of Philadelphia</h4>
      <p>
        Call us: <Link href="tel:215-981-3700">215-981-3700</Link>
      </p>
      <p>
        {" "}
        Or look for private counsel through the{" "}
        <Link href="https://lris.philadelphiabar.org/">
          Philadelphia Bar Association's Referral Service
        </Link>{" "}
      </p>
    </div>
  );
};
