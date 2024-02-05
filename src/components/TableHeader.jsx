import styled from 'styled-components'
import SearchIcon from '../assets/searchIcon.svg'
import XMark from '../assets/Vector.svg'
import FilterIcon from '../assets/search.svg'


function TableHeader(props){



    const cities = ["ყველა"];
    props.allUsers ? cities.push(...props.allUsers.map((item) => item.address.city)) : null;
    

    const selectCities = (selectedCity) => {
        props.setOption(selectedCity);
    }
    

    return(

        <TableHeaderWrapper>
            <AddAndSearchWrapper>
                <AddBtn>დამატება</AddBtn>
                <SearchInput>
                    <img src={SearchIcon} alt="serch-icon" />
                    <input type="text" value={props.query} onChange={(e) => {props.setQuery(e.target.value)}}/>
                    <img src={XMark} alt="x-mark" onClick={() => {props.setQuery("")}} />
                    <img src={FilterIcon} alt="filter-icon" />    
                                      
                </SearchInput>
            </AddAndSearchWrapper>

                <FilterSelect name='filterSelect' id='rame' onChange={(e) => selectCities(e.target.value)}>
                    {cities.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </FilterSelect>
        </TableHeaderWrapper>
    )
}
export default TableHeader

const TableHeaderWrapper = styled.div`
    width: 100%;
    height: 58px;
    padding: 0px 16px 0px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin-top:8px;
`
const AddAndSearchWrapper = styled.aside`
    width: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`
const AddBtn = styled.button`
    width: 104px;
    height: 35px;
    border-radius: 8px;
    border: 1px solid #EEF4FF;
    background-color: #EEF4FF;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    outline: none;
    color: #2970FF;
    font-family: var(--mainFont);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
`
const SearchInput = styled.div`
    width: 300px;
    display: flex;
    align-items: center;

    padding: 6px 12px;
    gap: 12px;

    border-radius: 4px;
    border: 1px solid  #2970FF;
    background: #FFF;
    box-shadow: 0px 0px 0px 3px #84DAFF;

    input{
        width: 212px;
        height: 20px;
        color: black;
        font-family: var(--mainFont);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        outline: none;
        border-width: 0px;
      }
    img{
        cursor: pointer;
    }
`
const FilterSelect = styled.select`
    width: 150px;
    height: 30px;    
    border-radius: 8px;
    background-color: #F6F4F3;
    border-width: 0px;
    cursor: pointer;
  
    font-family: var(--mainFont);
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    color: #636971;
    padding: 0px 8px;
 
    outline: none;
    
    option{
        font-family: var(--mainFont);
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        color: #636971;
    }
`






