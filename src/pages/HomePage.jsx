import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import MainLayout from "./MainLayout"
import { useState } from "react"
import Modal from "../components/Modal"

const HomePage = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <MainLayout>
      <h1>Home Page</h1>
      <Modal 
        title="Sample modal component" 
        show={showModal}
        onClose={() => {return setShowModal(false)}}>
          <h3>This is a modal</h3>
          <p>this is a modal</p>
      </Modal>

      <button 
        onClick={() => {setShowModal((prev) => {return !prev})}}>
          Toggle Modal
      </button>

    </MainLayout>
  )
}

export default HomePage