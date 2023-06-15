import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {"message": "Enter URL for QR_code generation: ", "name": "URL"}
  ])
  .then((answers) => {
    const ans = answers.URL;
    var qr_svg = qr.image(ans);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("URL.txt" , ans, err =>{
        if (err) throw err;
        console.log("The file has been saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
