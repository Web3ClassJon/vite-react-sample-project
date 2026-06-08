import React from 'react'
import MainLayout from '../MainLayout'
import { Route, Routes, Outlet } from 'react-router-dom'
import BookList from './BookList'
import BookDetails from './BookDetails'
import BookForm from './BookForm'

const BooksPage = () => {
  return (
    <MainLayout>
        <h1>Books</h1>
        <Routes> 
            <Route index element={<BookList />} />
            <Route path=":bookId" element={<BookDetails />} />
            <Route path="edit/:bookId" element={<BookForm />} />
            <Route path="add/" element={<BookForm />} />
        </Routes>
        <Outlet />
    </MainLayout>
  )
}

export default BooksPage