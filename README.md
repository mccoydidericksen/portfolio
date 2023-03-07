# Portfolio

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| <img src="assets/react-logo.png" alt="react" width="20"/> React.js    | [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html) |
## Description 

This is a portfolio website that I built using React.js. The website is hosted on GitHub Pages and can be found [here](https://mccoydidericksen.github.io/portfolio/).

## Code Snippets
The below code snippet shows how I used React Hooks to create a form that allows users to send me an email. The form uses the `useState` hook to create state variables for the email, name, and message. The `isValid` function is used to validate the form inputs, disable/enable the button to be clicked, and display the `submitMessage` state variable to the user if the form is not valid.

```javascript
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('Please fill out all fields.');
  const [valid, setValid] = useState(false);
  const isValid = () => {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setSubmitMessage('Please enter a valid email address.');
      setValid(false);
      return false;
    }
    if (name === '') {
      setSubmitMessage('Please enter your name.');
      setValid(false);
      return false;
    }
    if (message === '') {
      setSubmitMessage('Please enter a message.');
      setValid(false);
      return false;
    }
    setSubmitMessage('');
    setValid(true);
    return true;
  };
```