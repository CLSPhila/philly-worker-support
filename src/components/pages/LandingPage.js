import React from "react";
import { Link } from "react-router-dom";
import { INTERVIEW_SLUG as leaveBenefitsUrl } from "../interviews/LeaveBenefitsQuestions";
import { INTERVIEW_SLUG as ucBenefitsUrl } from "../interviews/UCandPUAQuestions";
import { DemoWarning } from "../extras/DemoWarning";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { InterviewCard } from "../extras/InterviewCard";

const useStyles = makeStyles((theme) => ({
  root: {
    " & > p": {
      marginTop: theme.spacing(1.3),
      fontSize: "1.3rem",
      lineHeight: "2rem",
    },
  },
}));

export const LandingPage = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <h2> (DEMO) Supporting workers during the Covid-19 pandemic</h2>
      <p>
        We are living through challenging times. Many of us have lost
        employment, or are concerned about staying employed. We worry about
        getting sick. We have loved ones we need to care for.
      </p>

      <p>
        For workers in Philadelphia, there are a variety of local, state, and
        federal programs that can help provide income and other benefits during
        this emergency. Navigating sick leave, family leave, and unemployment
        compensation is confusing. Who has time to untangle all the different
        eligibility rules and program benefits?
      </p>
      <p>
        The employment law experts at Community Legal Services of Philadelphia
        do.
      </p>
      <p>
        We have prepared this site to help you understand your rights as a
        worker in Philadelphia.
      </p>
      <p>
        We hope the information we present helps you and your family feel
        <b> safe and stable </b> during the crisis.
      </p>
      <Typography variant="h5">
        Learn about how to find the right services for your family by trying the
        quizzes below.
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} xm={6} xl={6}>
          <InterviewCard
            interviewTitle="Sick Leave Eligibility"
            description="Eligibility for Federal and Philadelphia Sick leave, as well as FMLA"
            url={"/questions/" + leaveBenefitsUrl}
          />
        </Grid>
        <Grid item xs={12} xm={6} xl={6}>
          <InterviewCard
            interviewTitle="Unemployment and Pandemic Benefit Eligibility"
            description="Eligibility for Unemployment Compensation and Pandemic Unemployment Assistance"
            url={"/questions/" + ucBenefitsUrl}
          />
        </Grid>
      </Grid>
      <p>
        This site is merely providing you with general information we hope is
        helpful. Using this site does not mean that we are your lawyers. If
        you'd like to speak with a lawyer to get personal advice about your own
        situation, visit our lawyer referrals page.
      </p>
    </div>
  );
};
