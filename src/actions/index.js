export function updateAnswer(id, answer) {
  return {
    type: "UPDATE_ANSWER",
    payload: {
      id: id,
      answer: answer,
    },
  };
}
