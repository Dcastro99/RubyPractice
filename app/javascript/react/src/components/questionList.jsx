import * as React from 'react';
import * as ReactDOM from 'react-dom';

const QuestionList = () => {
  const questionsList= [
    {
      title: 'How to check if key exists in object?',
      tag: 'Ruby'
    },
    {
      title: 'Whats the difference between string and symbol?',
      tag: 'Ruby'
    },
    {
      title: 'What happens if you add two same keys in hash?',
      tag: 'Ruby'
    },
    {
      title: 'How to delete a given key from hash?',
      tag: 'Ruby'
    },
    {
      title: 'How to check if two hashes are equal?',
      tag: 'Ruby'
    },
    {
      title: 'How to combine two hashes?',
      tag: 'Ruby'
    },
    {
      title: 'How to get unique keys from two hashes?',
      tag: 'Ruby'
    },
    {
      title: 'What does the has_key? key? member? and include? methods do?',
      tag: 'Ruby'
    },
    {
      title: 'What are blocks in Ruby?',
      tag: 'Ruby'
    },
    {
      title: 'Does the order of keys matter to compare two hashes?',
      tag: 'Ruby'
    }

  ]

  return(
    <div className='row'>
      <div className='col-lg-10 mx-auto'>
        {questionsList.map((question) => 
        // eslint-disable-next-line react/jsx-key
        <div className='card rounded-0 mt-3'>
          <div className='card-body'>
            <h3 className='card-title'>{question.title}</h3>
            <p className='lead'>
              <span className='badge bg-primary'>{question.tag}</span>
            </p>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default QuestionList