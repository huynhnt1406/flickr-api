
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './Search';
import Paginations from './Paginations';
import Tags from './Tags';
import './Images.css'
function Images() {

  const [pictures,setPictures] = useState([])
  const [picturesPerPage,setPicturesPerPage] = useState(12)
  const [currentPage,setCurrentPage] = useState(1)
  const [totalPage,setTotalPage] = useState(200)
  const [tags, setTags] = useState([
    {
        id:1,
        tags:'flowers'
    },
    {
        id:2,
        tags:'Bigben'
    },
    {
        id:3,
        tags:'Cars'
    },
    {
        id:4,
        tags:'Lovers'
    },
    {
        id:5,
        tags:'Euro 2016'
    },
    {
        id:6,
        tags:'World Cup 2010'
    },
    {
        id:7,
        tags:'Wc 2018'
    },
    {
        id:8,
        tags:'Effiel Tower'
    }
])
  
  useEffect(() => {
    const fetchPictures = async () => {
      const res = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cb1c3362ce8880b5a7ef7f07d613c1a2&format=json&nojsoncallback=1`,{
        params:{
          tags:'flowers',
        }
      })
      setPictures(res.data.photos.photo)
      console.log(res.data)
    }
    fetchPictures()
  }, [])
  const handleSearch = async (term) => {
    try {
        const res = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cb1c3362ce8880b5a7ef7f07d613c1a2&format=json&nojsoncallback=1`,{
          params:{
            tags:term,
          }
        })
        setPictures(res.data.photos.photo)
    } catch (error) {
        console.log(error)
    }
  }
  const clickTag = async (tags) => {
    try {
      const res = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cb1c3362ce8880b5a7ef7f07d613c1a2&format=json&nojsoncallback=1`,{
          params:{
            tags:tags
          }
        })
        setPictures(res.data.photos.photo)
    } catch (error) {
      console.log(error)
    }
  }

  const indexOfLastPage = currentPage * picturesPerPage
  const indexOfFirtPage = indexOfLastPage - picturesPerPage
  const currentPictures = pictures.slice(indexOfFirtPage,indexOfLastPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
          <div className="app-images">
                <div className="header">
                    <h3>Gallery App</h3>
                    <Search handleSearch ={handleSearch} />
                </div>
                <div className="tag">
                  <Tags clickTag={clickTag} tags={tags}/>
                </div>
          <div className="images-list">
            {
              currentPictures.map((item => (
                <div className="images-child">
                    <img key={item.id} alt={item.id} src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`}/>
                </div>
              )))
            }
          </div>
          <Paginations totalPage={totalPage} picturesPerPage={picturesPerPage}   paginate={paginate} />
        </div>
    </div>
  )
}

export default Images

