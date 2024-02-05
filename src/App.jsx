import styled from 'styled-components'
import SideBar from './components/SideBar'
import Header from './components/Header'
import TableHeader from './components/TableHeader'
import Table from './components/Table'
import { useEffect, useState } from 'react'

function App() {
  const[allUsers, setAllUsers] = useState();
  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await data.json();

    setAllUsers(jsonData)
  }
  useEffect(() => {
    getData()
  },[])



  const [option, setOption] = useState("ყველა");
  const [filteredUsers, setFilteredUsers] = useState();

  const filterData = () => {
    option == "ყველა" ? setFilteredUsers(allUsers)
     :
    setFilteredUsers(allUsers?.filter(item => item.address.city == option))
  } 
  useEffect(() => {
    filterData()
  },[option, allUsers])



  const[query, setQuery] = useState("");

  const search = (data) => {
    setFilteredUsers(data?.filter((item) => 
      item.name.toLowerCase().includes(query) ||
      item.username.toLowerCase().includes(query) ||
      item.company.name.toLowerCase().includes(query) ||
      item.company.catchPhrase.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) ||
      item.phone.toLowerCase().includes(query))
  )
  }
  useEffect(() =>{
    search(allUsers)
  },[query])



  return (
    <MainWrapper>
      <SideBar />
      <SecondWrapper>
        <Header />
        <TableHeader query={query} setQuery={setQuery} setOption={setOption} allUsers={allUsers}/>
        <Table filteredUsers={filteredUsers}/>
      </SecondWrapper>
    </MainWrapper>
  )
}

export default App

const MainWrapper = styled.main`
  display: flex;
`
const SecondWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 18px;
`