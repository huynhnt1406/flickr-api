import React, { Component } from 'react';
import './Images.css'
import axios from 'axios'
import Search from './Search';
import Paginations from './Paginations';
class Images extends Component {


      state  = {
        pictures:[],
        page:1
      }
      async componentDidMount(){
        try {
          const res = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cb1c3362ce8880b5a7ef7f07d613c1a2&per_page=12&page=1&format=json&nojsoncallback=1`,{
              params:{
                tags:'flowers',
                page:this.state.page
              }
          })
          this.setState({pictures:res.data.photos.photo})
          console.log(this.state.pictures)
          }catch (error) {
          console.log(error)
        }
      }
      handleSearch = async (term) => {
        try {
            const res = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cb1c3362ce8880b5a7ef7f07d613c1a2&per_page=12&format=json&nojsoncallback=1`,{
              params:{
                tags:term,
                page:this.state.page
              }
            })
            this.setState({pictures:res.data.photos.photo})
        } catch (error) {
            console.log(error)
        }
      }
      addPage = (current) => {
          this.setState(this.state.page === current)
      }
      
    render() {
        return (
            <div className="app-images">
                <div className="header">
                    <h3>Gallery App</h3>
                    <Search handleSearch = {this.handleSearch} />
                </div>
                <div className="images-list">
                    {
                        this.state.pictures.map((item) => (
                            <div className="images-child">
                                <img alt={item.id} src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`}/>
                            </div>
                        ))
                    }
                </div>
                <Paginations addPage = {this.addPage}/>
            </div>
        );
    }
}


export default Images;