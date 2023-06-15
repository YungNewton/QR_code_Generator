import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    {"message": "Enter URL for QR_code generation: ", "name": "URL"}
  ])
  .then((answers) => {
    const ans = answers.URL;
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });