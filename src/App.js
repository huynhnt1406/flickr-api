import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  state  = {
    pictures:[],
    picUrl: String,
  }
  async componentDidMount(){
    try {
      const res = await axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=cb1c3362ce8880b5a7ef7f07d613c1a2&per_page=10&page=1&format=json&nojsoncallback=1')
      this.setState({pictures:res.data.photos.photo})
      this.state.pictures.map((item) => (
        console.log(`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`)))
      }catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        {
          this.state.pictures.map((item) => (
            <img alt="" src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`}/>
          ))
        }
      </div>
    )
  }
}



