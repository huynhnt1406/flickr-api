import React  from 'react'
import './Paginations.css'


function Paginations({totalPage, picturesPerPage,paginate}) {

    let pageNumbers = []

    for(var i = 1; i <= Math.ceil(totalPage/picturesPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div className="pagination">
            <div className="pagination-page">
                {
                    pageNumbers.map(number => (
                        <li onClick = {() => paginate(number)} className="page-items" key={number}>{number}</li>
                    ))
                }
            </div>
        </div>
    )
}

export default Paginations
