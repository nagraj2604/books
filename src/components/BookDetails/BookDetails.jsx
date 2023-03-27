import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import { useGlobalContext } from '../../context.';
import "./BookDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const BookDetails = () => {
  
  const {id} = useParams();
  const navigate = useNavigate();
  const {books, loading} = useGlobalContext();
  const book = books.filter((singleBook) => singleBook.id === id)[0];
  console.log(book)

  if(loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {book?.cover_img} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Page Count: </span>
              <span className='text-italic'>{book?.pageCount}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails