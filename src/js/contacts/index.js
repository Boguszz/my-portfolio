import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firebaseConfig = {
  apiKey: 'AIzaSyD69MIwRrLxnLE2jftzo5mS1uX_UV47VYU',
  authDomain: 'my-portfolio-da1a3.firebaseapp.com',
  projectId: 'my-portfolio-da1a3',
  storageBucket: 'my-portfolio-da1a3.appspot.com',
  messagingSenderId: '1090335572963',
  appId: '1:1090335572963:web:2885211c41eba032fe56d6',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const contactForm = document.querySelector('.contacts__form');
contactForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const dataForm = {
    fullName: e.target.fullName.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  try {
    writeMessageToDB(dataForm);
    contactForm.reset();
    Notify.success('Your message has been sent successfully.');
  } catch (error) {
    Notify.failure(error);
  }
}

function writeMessageToDB({ fullName, email, message }) {
  const messagesListRef = ref(db, 'messages');
  const newMessagesRef = push(messagesListRef);
  set(newMessagesRef, {
    fullName: fullName,
    email: email,
    message: message,
  });
}
