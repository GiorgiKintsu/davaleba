import styled from "styled-components"
import Frame from '../assets/Frame.svg';
import Bookmarks from '../assets/collections_bookmark.svg';
import Group from '../assets/group.svg';
import Work from '../assets/work.svg';

function SideBar(){
    return(
        <SideBarWrapper>
            <LogoContainer>
                <img src={Frame} alt="" />
            </LogoContainer>
            <BarIconsContainer>
                <SideIconWrapper>
                    <img src={Bookmarks} alt="bookmarkIcon" />
                </SideIconWrapper>
                <SideIconWrapper className="sideIconWrapperActive">
                    <img src={Group} alt="userIcon" />
                </SideIconWrapper>
                <SideIconWrapper>
                    <img src={Work} alt="workIcon" />
                </SideIconWrapper>
            </BarIconsContainer>
        </SideBarWrapper>
    )
}

export default SideBar

const SideBarWrapper = styled.aside`
    width: 60px;
    height: 748px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 68px;
    border-radius: 10px;
    background: #FFF;
    padding-top: 10px;
`;
const LogoContainer = styled.div`
    width: 44px;
    img{
        width: 100%;
    }
`;

const BarIconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
`;

const SideIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 48px;
    &.sideIconWrapperActive {
        border-left-color: #2970FF;
        border-left-width: 3px;
        border-left-style: solid;
        background-color: #D9D9D9;
        color: #2970FF;
    }
`;