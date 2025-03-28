
import React, { useState, useEffect } from 'react';
import './Home.css';

function HomeComponent({ username }) {
  const staticQuestions = [
    { id: 1, questions: "Based on your experience, what critical factors determine whether someone will thrive in this particular role?", answers: "" },
    { id: 2, questions: "Could you describe the key attributes and outcomes that, in your experience, characterize a truly successful hire for this position?", answers: "" },
  ];
  
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (username === 'enghouse' || username === 'meera99') {
      setQuestions(staticQuestions);
      
      const initialAnswers = {};
      staticQuestions.forEach(question => {
        initialAnswers[question.id] = question.answers || '';
      });
      setAnswers(initialAnswers);
    }
  }, [username]);

  const handleAnswerChange = (id, value) => {
    setAnswers({
      ...answers,
      [id]: value
    });
  };

  const handleSubmitAnswer = async (id) => {
    try {
      setLoading(true);
      
        const questionToSubmit = {
        id: id,
        questions: questions.find(q => q.id === id).questions,
        answers: answers[id]
      };
      
      const response = await fetch('http://localhost:8080/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionToSubmit),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setSuccessMessage(`Answer for question ${id} submitted successfully!`);
      setTimeout(() => setSuccessMessage(''), 3000);
      
      setQuestions(questions.map(q => 
        q.id === id ? { ...q, answers: answers[id] } : q
      ));
      
      setLoading(false);
    } catch (err) {
      setError('Failed to submit answer. Please try again.');
      setLoading(false);
      console.error('Error submitting answer:', err);
    }
  };

  return (
    <div className="home-container">


      {(username === 'enghouse' || username === 'meera99') && (
        <div className="questions-section">
          <h2>Questions</h2>
          
          {loading && <div className="loading">Loading...</div>}
          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
          
          {questions.length === 0 ? (
            <p className="no-questions">No questions available at the moment.</p>
          ) : (
            <div className="questions-list">
              {questions.map(question => (
                <div key={question.id} className="question-item">
                  <h3>Question {question.id}</h3>
                  <p className="question-text">{question.questions}</p>
                  
                  {username === 'enghouse' && (
                    <div className="answer-field">
                      <label htmlFor={`answer-${question.id}`}>Your Answer:</label>
                      <textarea
                        id={`answer-${question.id}`}
                        value={answers[question.id] || ''}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        placeholder="Type your answer here..."
                        rows={3}
                      />
                      <button 
                        onClick={() => handleSubmitAnswer(question.id)}
                        className="submit-button"
                        disabled={!answers[question.id]?.trim()}
                      >
                        Submit Answer
                      </button>
                    </div>
                  )}
                  
                  {username === 'meera99' && (
                    <div className="answer-display">
                      <h4>Answer:</h4>
                      {question.answers ? (
                        <p className="answer-text">{question.answers}</p>
                      ) : (
                        <p className="no-answer">No answer provided yet.</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HomeComponent;