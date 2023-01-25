# about-me-project
Code fellow 201d96 Lab 2 - Lab 4 

Lab: “About Me” project
Read the document, in its entirety, before beginning your lab.

Problem Domain
Teach us more about you! Build out an “About Me” webpage that quizzes the user on fun facts gives the user some basic information about who you are and where you came from. We will build onto this project over the next few labs. Be prepared to refactor your code each day and learn about how a web site incrementally goes from an idea to a deployed site through various iterations of development.

User Stories
This is our first exposure to user stories. User stories are a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view. They are presented in the manner of

As a __, I want __, so that____

This layout allows a client to communicate to a team what type of behavior they are looking for and allow the developer team to think up a solution that best fits the the clients need.

The development team will then create sub-bullets called Feature Tasks which are individual tasks that must be completed by the developer to accomplish the user story. Once all of the feature tasks for an individual user story is completed, so is the story.

Below are your lab requirements in this format with the feature tasks already created.

## Lab 02

Instructions
As a user, I would like to learn about the site owner so I can get to know them better..

Create an About Me guessing game that utilizes HTML, CSS, & JavaScript.

Include on your HTML page a short biography, your education history, an overview of your job experience, and any goals that you may have.

Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.

Ask the user their name through a prompt()

Display that name back to the user through a custom greeting welcoming them to your site.

Display the user’s name back to them in your final message to the user.

Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.

The following options to generate a Lighthouse report should be selected:
Mode: Navigation
Device: Desktop
Categories: Accessibility
Strive for a score between 50-65. Make necessary adjustments based on the report to achieve that score.
Add a screenshot of your score to your README.md file.

## Lab 03

Instructions
Continue to build off of your lab 02 by adding additional functionality to your About Me Guessing Game. Work in the same repository as you did for Lab 2, and modify your README.md file to describe your project with the new features you are adding.

As a user, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.
Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish.
Convert your work experience and education summary into an unordered list using HTML
As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
Indicates through an alert if the guess is “too high” or “too low”.
It should give the user exactly four opportunities to get the correct answer.
After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.
As a user, I would like to know my final score so that I can know how well I did.
Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.

Strive for a score between 50-65. Make necessary adjustments based on the report to achieve that score.
Add a screenshot of your score to your README.md file.
In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

Stay within scope of what was taught so far in class. Do not write functions within your application. Avoid the use of “helper” methods such as .includes() and .join(). Work with the instructional staff directly if you have questions about this requirement.

## Lab 04

Instructions
Review all four sections below for today’s lab. Pair program with your assigned partner to refactor each codebase. Equally divide your lab time so that you and your partner spend the same amount of time in each other’s code. Time management is critical.

1. How To Get Code Ready For Work
Be sure to follow these instructions VERY carefully.

Note: Before starting these steps, make sure that both of your repositories are ‘clean’: in other words, everything is committed and pushed so that both the remote and local versions of your projects are in sync. This will prevent potential problems later.

Decide whose code you will work on first. The owner of that code (who will be the Navigator) provides the link to their GitHub repo to the other member of the pair (who will be the Driver). You can send this link over Slack.

The Driver follows the link to that repo and creates a fork of the repo in GitHub like we did in class.

The Driver then goes to their fork of the repo (the URL should have the Driver’s GitHub name in it) and copies the link to that repo (the link have the Driver’s GitHub name in it and should end in .git).

Inside of the Driver’s main work directory on their laptop, make a directory with your partner’s name and then navigate (cd) into it. From there, enter the command git clone the-link-you-copied. That will create a local version of the forked repo on the Driver’s laptop.

cd into that directory and enter code . in the terminal to open all of the files in VSCode.

Start working on the code!

2. Extend and Refine
You’ll be making some edits to each other’s sites. After each bit of work is completed (in other words, after each successful modification of a single question), be sure to do an add-commit-push cycle (a-c-p) to place the code on GitHub and preserve a versioned history of your work.

Move the logic for all questions into functions: Today we learned about functions, and now we’ll move the logic for the individual questions into separate functions, and call those functions to run the game.

In its most basic sense, this is pretty simple and straightforward: ‘wrap’ the logic and variables for a given question with function someFuncNameYouChoose() { at the beginning, and add a closing curly brace } at the end. To make the function execute, just call it afterwards: someFuncNameYouChoose(); After completing this step the game should behave exactly as it did before. a-c-p

Update the README file: In the README file, add in the names of the Driver and Navigator and indicate that the code was worked on together. This is basic record-keeping so that you can keep up with how the code has been edited in a user-friendly format. a-c-p

3. Push to GitHub; Make a Pull Request
Once everything is finished, and the Driver has done the last edits and pushed them to GitHub, it’s time to send the edited code to the owner (who has been in the Navigator role the whole time, of course). We do this with a GitHub feature called a Pull Request, which we generally refer to as a PR.

From the Driver’s repo that is a fork of the Navigator’s repo, hit the green button that says ‘Create pull request’.

Follow the remaining steps as described onscreen and as shown here: https://help.GitHub.com/articles/using-pull-requests. (These instructions for doing a pull request from a forked repo to its source are deliberately vague, to give you practice in reading through instructions, trying things out, solving problems collaboratively, and getting guidance from documentation).

The owner of the code (the Navigator) then goes to their GitHub repo for the project and accepts the pull request. After that, in terminal on their laptop, while in the game directory, enter the command ‘git pull origin main’ to retrieve the modified code from GitHub.

When everything is finished for one person’s project, submit the links for the last pull request made from the Driver to the Navigator (in both cases) in the Canvas assignment.

4. Pair Programming Basics
In pair programming, there are two developers working on a single body of code on a single computer.
One member of the pair is the Driver, and this person will be the one doing all of the actual typing work on the laptop. The Driver will be working on the Navigator’s code by way of forking and cloning the Navigator’s repository.
The other member of the pair is the Navigator, and this person will work with only their voice and their thoughts.
The Navigator does not touch the keyboard, nor does the Navigator work on their laptop “on the side”. The Navigator is fully engaged with the work that the pair is doing, typically using a piece of scratch paper to sketch diagrams, take notes, or list ideas. At most the Navigator uses their laptop to perhaps keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN.
Under no circumstances does the Navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they’re working on together.
The lab time should be divided into two sections of approximately two hours each. At the halfway mark, you should swap roles and work on the other person’s code. Remember to watch the clock and determine the best point to swap roles.
In the case of an odd number of students, one group will have three members and you should rotate through three roles: Driver, Navigator, Observer. Each person should take on each role one time. You will need to be even more mindful about watching the clock to ensure that equal time is devoted to all three projects.
Stretch Goals
Work from collections of like data: Create 3 arrays, one for each of: your questions, the correct answers, and the two possible responses. (The same applies if you’ve added in any other pieces to the questions besides the most basic structure.) Replace that content in the functions by accessing the arrays.

Make it DRY: Reduce the yes/no questions from five functions to one function, and then use a ‘for’ loop to iterate through the arrays and call the function for each question.

Code review: Take time to explore each other’s CSS and talk about how it is organized and what it is doing. Make suggestions for how it can be improved. Integrate your partner’s suggestions to improve your own styling.

Improve accessibility: Collaborate on achieving better scores on accessibility audits. Include a screenshot of your new audit score in your README.md file.