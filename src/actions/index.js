export const UPDATE_ANSWER = "UPDATE_ANSWER";
export const GO_BACK = "GO_BACK";

export function updateAnswer(id, answer) {
  return {
    type: "UPDATE_ANSWER",
    payload: {
      id: id,
      answer: answer,
    },
  };
}

export function goBack() {
  return {
    type: GO_BACK,
  };
}
