import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-ad4ab.firebaseio.com/'
})