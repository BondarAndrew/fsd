import { submitFeedback } from './feedbackModule';

function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = {
    name,
    email,
    message,
  };

  submitFeedback(formData);
}

let feedbackData = {};

export function submitFeedback(formData) {
  feedbackData = formData;
  document.getElementById('feedbackForm').reset();
  document.getElementById('successMessage').classList.remove('hidden');
}

export function getFeedbackData() {
  return feedbackData;
}
