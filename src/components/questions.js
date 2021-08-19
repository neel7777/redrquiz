import React, { useState } from "react";

const Questions = () => {
	const questions = [
		{
			questionText: 'Where is Darrow from?',
			answers: [
				{answerText: 'Lykos', isRight: true},
				{answerText: 'Lune', isRight: false},
				{answerText: 'Earth', isRight: false},
				{answerText: 'Venus', isRight: false}

			]
		},
		{
			questionText: 'Who carved Darrow into a Gold?',
			answers: [
				{answerText: 'Dancer', isRight: false},
				{answerText: 'Mustang', isRight: false},
				{answerText: 'Eo', isRight: false},
				{answerText: 'Mickey', isRight: true}

			]
		},
		{
			questionText: 'Who is Ares?',
			answers: [
				{answerText: 'Darrow', isRight: false},
				{answerText: 'Fitchner', isRight: true},
				{answerText: 'The Jackal', isRight: false},
				{answerText: 'Kieran', isRight: false}

			]
		},
		{
			questionText: 'Why did Darrow lose Roque as an ally/friend?',
			answers: [
				{answerText: 'Constantly hiding things from him', isRight: false},
				{answerText: 'Roque believed in Gold supremacy, and couldnt ally with a red', isRight: false},
				{answerText: 'The death of Quinn', isRight: true},
				{answerText: 'Roque was jealous of Darrows friendship with Sevro', isRight: false}

			]
		},
		
	]

const [question, setQuestion] = useState(0);
const [result, setResult] = useState(0);
const [showResult, setShowResult] = useState(false);

const handleAnswer = (isRight) => {
	if (isRight === true){
		setResult(result + 1)
	}

	const nextQ = question + 1;
	if (nextQ < questions.length) {
		setQuestion(nextQ)
		
	}
	else {
		setShowResult(true)
	}
};

const handleResult = (total) => {
	if (total === 0) {
		return <div>you are a pink!</div>

	}
	else if (total === 1) {
		return <div>you are a blue!</div>
	}
	else if (total === 2) {
		return <div>you are a gray!</div>
	}
	else if (total === 3) {
		return <div>you are a red!</div>
	}
	else {
		return <div>you are a gold!</div>
	}

}
return (
	<div className="case">
		
		<div className="main1">
			{
				showResult ? (
				<div className="results">
				<div>You scored {result} out of {questions.length}!</div>
				<div>{handleResult(result)}</div>
				
				</div>
				
				
					)	: 	(
					
					<>
						<div className="questions">
							<div className="qsec">
								<div>Question {question+1} / {questions.length}</div>
								
							</div>
							<div>{questions[question].questionText}</div>

						</div>
						
						<div className="answer">
							{questions[question].answers.map(option => (
								<button onClick={()=>handleAnswer(option.isRight)}>{option.answerText}</button>
							))}
						</div>						
					</>			
				
				)
				
			}

		</div>
	</div>
)


}

export default Questions;


//109 79cc at 5/1k, Q6o 1500/3k
