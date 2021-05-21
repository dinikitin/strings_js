import React from 'react'
import { Add } from './components/Add'
import { News } from './components/News'
import './App.css'

class App extends React.Component {
  state = {
    news: null,
    isLoading: false,
  }

  static getDerivedStateFromProps(props, state) {
    let nextFilteredNews

    if (Array.isArray(state.news)) {
      nextFilteredNews = [...state.news]

      nextFilteredNews.forEach((item, index) => {
        if (item.bigText.toLowerCase().indexOf('dima') !== -1) {
          item.author = 'СПАМ'
          item.text = 'СПАМ'
          item.bigText = 'СПАМ'
         
        }
      })
      return { filteredNews: nextFilteredNews }
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('http://localhost:3000/data/newsData.json')
      .then(response => response.json())
      .then(data => {
        console.log(`data`, data)
        setTimeout(() => {
          this.setState({ isLoading: false, news: data })
        }, 1500)
      })
  }
  handleAddNews = data => {
    console.log(`data`, data)
    console.log(`this.state`, this.state)
    const nextNews = this.state.news.concat(data)
    console.log(`nextNews`, nextNews)
    this.setState({ news: nextNews })
  }
  render() {
    const { news, isLoading } = this.state

    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(news) && <News data={news} />}
      </React.Fragment>
    )
  }
}

export default App