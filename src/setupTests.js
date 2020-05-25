// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
/**
 * Test helper to quickly set modified answers to an interview's answers.
 *
 * answers looks like :
 * {
 *  questionId: {id: questionId, answer: null}
 * }
 *
 * newAnswers looks like :
 * {
 *  questionId: newAnswer
 * }
 *
 * @param {*} answers
 * @param {*} newAnswers
 */
const updateAnswers = (answers, newAnswers) => {
  console.log("---answers are---");
  console.log(answers);
  console.log("---trying to update answers with ---");
  var reshapedNewAnswers = {};
  for (const [questionId, newAnswer] of Object.entries(newAnswers)) {
    reshapedNewAnswers[questionId] = { id: questionId, answer: newAnswer };
  }
  const updatedAnswers = { ...answers, ...reshapedNewAnswers };
  console.log(updatedAnswers);
  return updatedAnswers;
};

global.updateState = (state, newAnswers = null, newHistory = null) => {
  const { answers, interviewHistory } = state;
  const updatedAnswers = newAnswers
    ? updateAnswers(answers, newAnswers)
    : answers;
  const updatedHistory = newHistory || interviewHistory;
  return {
    answers: updatedAnswers,
    interviewHistory: updatedHistory,
  };
};
