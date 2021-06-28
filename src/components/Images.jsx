
import React, { useEffect, useState } from 'react'
import Search from './Search';
import Paginations from './Paginations';
import Tags from './Tags';
import './Images.css'
import configUrl from '../config/index'
import http  from '../helpers/httpInterceptor.js'
function Images() {
  const [pictures,setPictures] = useState([])
  const [item,setItem] = useState('flowers')
  const [picturesPerPage] = useState(12)
  const [currentPage,setCurrentPage] = useState(1)
  const [totalPage] = useState(100)
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
      const res = await http.get(configUrl.baseURL,{
        params:{
          tags:item
        }
      })
      setPictures(res.data.photos.photo)
    }
    fetchPictures()
  }, [item])
  const handleSearch = (term) => {
    setItem(term)
  }
  const clickTag = async (tags) => {
    setItem(tags)
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

