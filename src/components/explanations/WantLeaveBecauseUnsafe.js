import React from "react";
import ExternalLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";
/**
 * Explaining benefits available when someone wants leave because of unsafe working coditions.
 */

/**
 * Option 1
 * @param {*} props
 */
export const NLRAStateOrderOSHA = (props) => {
  return (
    <div>
      <p>
        You have a right to a safe and healthy workplace. This right can be hard
        to enforce. The best option may be to get together with one or more
        other coworkers and talk to your employer about your concerns. When you
        approach your employer together about safety issues at work, the law
        protects you from retaliation. That means it is illegal for your
        employer to fire or discipline you for speaking up as a group.
      </p>
      <p>
        The National Labor Relations Act protects your right to organize with
        your co-workers and demand better work conditions, even if you are not
        in a union. Ask as a group for your employer to make changes. You can
        write a letter with your demands or create a petition. Your demands
        could include, for example, improved safety on the job and better sick
        leave policies. If your employer won’t make changes to keep you safe at
        work, you and your co-workers can tell your employer that you will not
        do any more work until dangerous conditions are fixed. If your employer
        retaliates against you for making a group complaint, you can file an
        unfair labor practices charge with the National Labor Relations Board
        (NLRB). You were engaged in “concerted protected activity” that should
        not have been penalized. The NLRB may step in and try to help resolve
        the situation.
      </p>
      <p>
        You are also protected under the Occupational Safety and Health Act. You
        have the right to refuse to do unsafe work if it would create a real and
        obvious danger to you and your co-workers. You are also protected from
        retaliation under this Act for making a complaint about unsafe
        conditions. The federal Occupational Health and Safety Administration
        (OSHA) has issued OSHA Guidance on Preparing Workplaces for COVID-19
        related to coronavirus for employers recommending that employers take
        steps to prevent exposure to the virus. These steps may include
        requiring social distancing, appropriate protective equipment, hygiene,
        and cleaning supplies. You can file an OSHA complaint online or by
        calling your local OSHA Area Office, but a complaint may not lead to
        things getting fixed quickly.
      </p>
      <p>
        The Pennsylvania Department of Health issued an order requiring worker
        safety measures at life-sustaining businesses. The order requires, among
        other things:
      </p>
      <ul>
        <li>Providing masks for workers</li>
        <li>
          Providing hourly breaks for handwashing and access to handwashing
          supplies
        </li>
        <li>Enforcing social distancing</li>
        <li>Staggering start and stop times for workers</li>
        <li>Conducting meetings and trainings virtually where possible</li>
        <li>Setting up barriers or shields at registers</li>
        <li>Cleaning high-touch surfaces</li>
        <li>
          Performing temperature checks of employees where there have been
          probable or confirmed cases of COVID-19
        </li>
      </ul>
      <p>
        If your workplace is not following this order, you can{" "}
        <ExternalLink href="https://expressforms.pa.gov/apps/pa/doh/COVID-19-Complaint">
          file an online complaint
        </ExternalLink>{" "}
        with the PA Department of Health to report the unsafe conditions.
      </p>
      <p>
        If you haven't already, click to learn about{" "}
        <Link to="/uc-pua-benefits">
          eligibility for unemployment compensation and Pandemic Unemployment
          Assistance (PUA).
        </Link>
      </p>
      <p>
        Another option is to quit and file for Unemployment Compensation (UC)
        benefits. To qualify for benefits, you have to try to work things out
        with your employer first. You should discuss your concerns with your
        employer, preferably in writing. Make sure you keep a copy (and not just
        in your work email, which you could lose access to if you get fired).
      </p>
      <p>
        If you lose health insurance from your job, you may be eligible to get
        free or low-cost health insurance through Medicaid or the Marketplace.
        You will need to apply right away. For more information, please visit
        our{" "}
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/03/Benefit-flyer_final-1.pdf">
          flyer about medicaid and other assistance.
        </ExternalLink>
      </p>
    </div>
  );
};

/**
 * Option 2
 * @param {*} props
 */
export const NonEmployeeAdvice = (props) => {
  return (
    <div>
      <div>
        If you are an independent contractor instead of an employee, fewer
        workplace protection laws apply to you. Your best option to address
        unsafe conditions at work may be joining together with people you work
        with to talk to management, contacting an organizing group, or going to
        the press with your concerns. You do not need to be an employee to make
        a complaint about safety at a business on the{" "}
        <ExternalLink href="https://expressforms.pa.gov/apps/pa/doh/COVID-19-Complaint">
          PA Department of Health’s Covid-10 complaint site
        </ExternalLink>
      </div>
      <p>
        If you haven't already, click to learn about{" "}
        <Link to="/uc-pua-benefits">
          eligibility for unemployment compensation and Pandemic Unemployment
          Assistance (PUA).{" "}
        </Link>
      </p>
    </div>
  );
};
