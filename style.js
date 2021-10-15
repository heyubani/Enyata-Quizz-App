const quiz = document.querySelector('.question');
const options = document.querySelector('.options');
const skip = document.querySelector('#skip');
const next = document.querySelector('#next');
const questionElement = document.querySelector('#quest')


const quizQuestions = [
    {
		question :  'What should values always be enclosed in?',
		options : 
			{
			 a: "Commas", 
			 b:"Quotation marks", 
			 c:"&lt;scripting&gt", 
			 d:"Parenthesis"
			},
			correctAnswer:"Commas"
	},
	{
		question: "What year was JavaScript launched?",
	   	options : 
		   {
			a:"1997",
			b: "2001",
			c: "none of the above",
		   },
		   correctAnswer:"none of the above"
   },
   {
		question: "What was the most used programming language in 2019?",
		options : 
		{
			a: "Python",
			b: "JavaScript",
			c: "C#",
			d: "C++"
		},
		correctAnswer:"Javavscript",
	},
	{
   		question :  'Which of the following is not a CSS framework',
   		options : 
	   	{
			a: "Bootstrap", 
			b:"Tailwind CSS", 
			c:"SCSS", 
			d:"Material UI"
	   	},
  		correctAnswer:"SCSS"
	},
 ] 

//function build the quiz

let currentQuestion = quizQuestions[0];


const showQuestion = () => {

	questionElement.innerText = currentQuestion.question
		let answers = ''
		for(let option in currentQuestion.options)	{		
		//add radio button
		// console.log(option)
		// console.log(currentQuestion.options[option])
		answers+=
			`<li class='answers'>
				<label>
					<input type="radio" value="options" name="quest">
					${option}:
					${currentQuestion.options[option]}
				</label>
			</li>`
		}
		options.innerHTML = answers
}

showQuestion();

//next button

const nextQuestion = () => {
	const previousIndex = quizQuestions.indexOf(currentQuestion);
	if (previousIndex == quizQuestions.length - 1) return;
	currentQuestion = quizQuestions[previousIndex + 1]
	showQuestion();
	console.log(previousIndex);
}
next.addEventListener('click', nextQuestion);

const prevQuestion = () => {
	const previousIndex = quizQuestions.indexOf(currentQuestion);
	if (previousIndex == 0) return;
	currentQuestion = quizQuestions[previousIndex - 1];
	showQuestion();
	console.log(previousIndex);
}
prev.addEventListener("click", prevQuestion);