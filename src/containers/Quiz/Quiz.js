import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    quiz: [
      {

        question: 'Какого цвета небо ?',

        answers: [
          {
            text: 'Черный', id: 1
          },
          {
            text: 'Синий', id: 2
          },
          {
            text: 'Красный', id: 3
          },
          {
            text: 'Зеленый', id: 4
          },
        ],

        rightAnswerId: 2
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    console.log(answerId)
    if (answerId === this.state.quiz[0].rightAnswerId) {
      console.log('Answer is true')
    } else {
      console.log('none')
    }
  }

  render() {
    return (
      <div className={classes.Quiz}>

        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick = {this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz
