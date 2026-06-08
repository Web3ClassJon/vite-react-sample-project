import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import MainLayout from "./MainLayout"
import { useState } from "react"
import Modal from "../components/Modal"
import DropDown from "../components/DropDown"


const sampleOptions = [
  {value:1, text:"Some Option"},
  {value:2, text:"Some Other Options"}
];

const artists =[
  {"id": 1, "name": "AC/DC"},
  {"id": 2, "name": "The Beatles"}
]

const artistOptions = artists.map(artist => ({value: artist.id, text: artist.name}))


const HomePage = () => {

  const [showModal, setShowModal] = useState(false);


  const handleSampleOptionSelected = (selectedValue) => {
    console.log("Value selected:", selectedValue);
  }

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

      <DropDown options={sampleOptions} onOptionsSelected={handleSampleOptionSelected} selectedValue={2} />
      <DropDown options={artistOptions} onOptionsSelected={(value) => {console.log(value)}} selectedValue={"1"} />
    </MainLayout>
  )
}

export default HomePage