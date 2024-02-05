import styled, { css } from 'styled-components';
import UserImage from '../assets/userImage.jpg'
import TimerIcon from '../assets/timerIcon.svg'
import Checkbox from '../assets/checkbox.svg'




function UserCard(props) {
    const lastIndex = Array.isArray(props.filteredUsers) ? props.filteredUsers.length - 1 : 0;
  return (
    <TableWrapper>
        <InsideTableHeader>
            <div style={{ width: '44px'}} />          
            <TableHeaderTextWrapper>
                <h3>სახელი</h3>
            </TableHeaderTextWrapper>        
            <TableHeaderTextWrapper>
                <h3>გვარი</h3>
            </TableHeaderTextWrapper>
            <TableHeaderTextWrapper>
                <h3>უწყება</h3>
            </TableHeaderTextWrapper>
            <TableHeaderTextWrapper>
                <h3>თანამდებობა</h3>
            </TableHeaderTextWrapper>
            <TableHeaderTextWrapper>
                <h3>ელ. ფოსტა</h3>
            </TableHeaderTextWrapper>
            <TableHeaderTextWrapper>
                <h3>მობილური</h3>
            </TableHeaderTextWrapper>
            <div style={{ width: '20px'}} /> 
        </InsideTableHeader>
        {props.filteredUsers?.map((item, index) => ( 
        <CardWrapper key={item.id} $isLast={index === lastIndex}>
            <UserInfoImageAndIcon>
                <UserImageContainer src={UserImage} alt='user-image'/>
                <TimerIconContainer src={TimerIcon} alt='timer-icon'/>
            </UserInfoImageAndIcon>
            <UserInfoContainer>
                <UserInfo>{item.name}</UserInfo>
            </UserInfoContainer>
            <UserInfoContainer>
                <UserInfo>{item.username}</UserInfo>
            </UserInfoContainer>
            <UserInfoContainer>
                <UserInfo>{item.company.name}</UserInfo>
            </UserInfoContainer>
            <UserInfoContainer>
                <UserInfo>{item.company.catchPhrase}</UserInfo>
            </UserInfoContainer>
            <UserInfoContainer>
                <UserInfo>{item.email}</UserInfo>
            </UserInfoContainer>
            <UserInfoContainer>
                <UserInfo>{item.phone}</UserInfo>
            </UserInfoContainer>
            <CheckboxContainer>
                <CheckboxImage src={Checkbox}/>
            </CheckboxContainer>
        </CardWrapper>
        ))}
    </TableWrapper>
  );
}

export default UserCard;

const TableWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`
const InsideTableHeader = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #F6F4F3;
    background-color: #fff;
    padding: 0px 30px 0px 12px;
`
const TableHeaderTextWrapper = styled.div`
    width: 191px;
    h3{
        color: #000;
        font-family: var(--mainFont);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 8px;
    }
`

const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 58px;
    padding: 0px 30px 0px 12px;
    border-bottom: 1px solid #F6F4F3;
    background-color: #fff;

    ${({ $isLast }) =>
        $isLast &&
        `
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        `}
`;
const UserInfoImageAndIcon = styled.div`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const UserImageContainer = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;

const TimerIconContainer = styled.img`
    width: 12px;
    height: 12px;
    background-color: #FEF0C7;
    border-radius: 50%;
    border: 1px solid #FEF0C7;
    position: absolute;
    top: 3px;
    right: 7px;
`;
const UserInfoContainer = styled.div`
    width: 191px;
`;
const UserInfo = styled.h3`
  width: 100px;
  color: #000;
  font-family: var(--mainFont);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 8px;
`;
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 40px;
  cursor: pointer;
`;

const CheckboxImage = styled.img`
  width: 4px;
  height: 16px;
`;









