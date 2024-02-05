import styled from 'styled-components';
import UserImage from '../assets/userImage.jpg';
import ArrowDown from '../assets/arrowDown.svg';
import Notification from '../assets/notification.svg'
import User from '../assets/user.svg'
import Home from '../assets/home.svg'
import { useState, useEffect, useRef} from 'react';



const Header = () => {
  const[open, setOpen] = useState(false)

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) =>{
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        
      }
    }

    document.addEventListener("mousedown", handler);

    return ()=> {
      document.removeEventListener("mousedown", handler)
    }
  })


  return (
    <HeaderSide ref={menuRef}>
      <UserTitle>მომხმარებელი</UserTitle>
      <HeaderRight >
        <img src={Notification} alt="notification" />
        <ImageAndIcon onClick={() => setOpen(!open)}>
          <ImageWrapper>
            <img src={UserImage} alt="userIcon" />
          </ImageWrapper>
          <img src={ArrowDown} alt="arrow-down" />
        </ImageAndIcon>
      </HeaderRight>
      <div className={`dropDownMenu ${open ? 'active' : 'inactive'}`}>
        <div className='dropDownMenuButton'>
          <img src={User} alt="user-icon" />
          <h5>პროფილის ნახვა</h5>
        </div>
        <div className='dropDownMenuButton'>
          <img src={Home} alt="home-icon" />
          <h5 style={{color: "#7A0000"}}>მომხმარებელის გაუქმება </h5>
        </div>
      </div>
    </HeaderSide>
  );
};

export default Header;


  



const HeaderSide = styled.div`
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px 25px 16px;
    position: relative;
`
const UserTitle = styled.h2`
    color: #000;
    font-family: var(--mainFont);
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`;
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    img{
        width: 20px;
        height: 20px;
    }
`;

const ImageAndIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    img{
        width: 11px;
        height: 6px;
    }
    cursor: pointer;
`;

const ImageWrapper = styled.div`
    img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid #fff;
    } 
`;