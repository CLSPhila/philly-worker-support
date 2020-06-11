import React from "react";
import { INTERVIEW_SLUG as leaveBenefitsUrl } from "../interviews/LeaveBenefitsQuestions";
import { INTERVIEW_SLUG as ucBenefitsUrl } from "../interviews/UCandPUAQuestions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { InterviewCard } from "../extras/InterviewCard";
import ExternalLink from "@material-ui/core/Link";

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
      <h1> What help do you qualify for?</h1>
      <h1> Take our quiz!</h1>
      <p>
        COVID-19 has created challenges and struggles for so many of us. Many of
        us have lost our jobs or are worried we won’t be able to stay employed.
        We worry about getting sick. We have loved ones we need to care for.
        It’s scary and uncertain.
      </p>
      <p> But you are not alone!</p>
      <p>
        For workers in Philadelphia, there are programs that can help you get
        income, health insurance, and other ways to support yourself and your
        family.
      </p>
      <p>
        But the rules for these programs are complicated. If you need sick
        leave, family leave, or unemployment, you may not know how to get help,
        even if you qualify.
      </p>
      <p>
        The employment law experts at Community Legal Services of Philadelphia
        are free lawyers that fight for workers’ rights.
      </p>
      <p>
        To help you figure out what help you qualify for and what your rights
        are, we have created quizzes so you can know what applies to you.
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
        situation, visit our{" "}
        <ExternalLink href="/referrals">Find Legal Help</ExternalLink> page.
      </p>
    </div>
  );
};
