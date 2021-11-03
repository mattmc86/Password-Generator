# Password-Generator

About The Project
This project is to generate a password where the characters and lenght are determined by the user with a seriees of prompts and confirms.

Built With
HTML
CSS
Javascript

Usage
When the HTML page loads there is a button labelled 'Generate Password'. After clicking this the user is prompted for how many characters they would like to use bewtween 8 and 128 - if they input a number outside of the range an alert will appear and the user will have to start again. If a correct value is added they will be asked whether they want speical characters, numbers, lowercase and uppercase in indivdual confirm messages. Clicking OK will store a boolean value of ture and clicking cancel will store a boolean value of false. 

Once the selections have been made a random password will be displayed in the text box matching the user selections. This is done by storgin all values for each option as a variable and then an if statement for each confirm - if true then add the array to a new array. This is then repeated for each option reassigning the variable if true. So if true the original array for that option will be added to the new array. Once all have been done it will randomise the values which were added. Then using splice it will remove the password length which the user typed at the beginning. After that it the commas are removed and finally the array is passed to the text box.


Roadmap
The page currently satisfies the initial acceptance criteria. However, I will be making improvements over the coming months including but not limited to:

Code refinement - look for code to allow characters to repeat rather than reuse them in the array - this was to allow 128 characters to be used.


Contact
Name: Matthew McKenna email:matthewmckenna1986@hotmail.com

Project Link: https://mattmc86.github.io/Password-Generator/
