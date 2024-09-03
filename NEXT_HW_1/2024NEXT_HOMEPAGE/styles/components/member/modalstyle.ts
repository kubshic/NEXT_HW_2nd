import styled, { css, keyframes } from 'styled-components';
import { THEME } from 'styles/theme';

export const Container = styled.div<{ isMobile: boolean }>`
    position: relative;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 3rem 10%;
    justify-content: center;
`;

export const MemberWrapper = styled.div`
    /* width: 375px; */
    width: 22rem;
    /* height: 516px; */
    height: 30rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    margin: 0 1rem 5rem 1rem;
    /* margin-bottom: 5rem; */
`;

export const MemberImgBox = styled.div`
    /* width: 375px;
  height: 375px; */
    width: 22rem;
    height: 22rem;

    & img {
        width: 100%;
    }
`;

export const MemberTextBox = styled.div`
    /* width: 375px; */
    width: 22rem;
    /* height: 140px; */
    height: 8.2rem;
    /* padding: 30px 30px 25px; */
    padding: 1.5rem 1.5rem 1.5rem;
    box-sizing: border-box;
    background-color: ${THEME.GRAY_100};
`;

export const MemberName = styled.p`
    display: flex;
    align-items: center;
    font-weight: 800;
    /* font-size: 32px; */
    font-size: 1.7rem;
    /* line-height: 39px; */
    line-height: 2rem;
    margin-bottom: 0.6rem;
    color: ${THEME.BLACK_200};
`;

export const MemberInfo = styled.p`
    font-weight: 500;
    /* font-size: 28px; */
    font-size: 1.5rem;
    /* line-height: 34px; */
    line-height: 1.6rem;
    color: ${THEME.BLACK_100};
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    height: 400px;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const ModalContentTop = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 20px;
`;

export const ModalCloseButton = styled.button`
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
`;

export const ModalContentMid = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
`;

export const ModalContentLeft = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const ModalContentRight = styled.div`
    flex: 6;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // align-items: center;
    height: 100%;
`;

export const ModalImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalTextBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const ModalFirstLineInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    margin-bottom: 10px;
`;

export const ModalMemberName = styled.h2`
    display: flex;
    align-items: center;
    font-weight: 800;
    font-size: 1.7rem;
    line-height: 2rem;
    color: ${THEME.BLACK_200};
`;

export const ModalLinkedIn = styled.button`
    margin-left: 10px;
`;

export const ModalSecondLineInfo = styled.p`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 500;
    font-size: 1.5rem;
    padding-left: 20px;
`;

export const ModalThirdLineInfo = styled.p`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 500;
    font-size: 1.5rem;
    padding-left: 20px;
`;

export const ModalContentBottom = styled.div`
    margin-top: 40px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    padding-left: 20px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 80%; /* 왼쪽에서 80% */
        height: 2px; /* border의 두께 */
        background-color: #f79412; /* 원하는 색상 */
    }

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20%;
        height: 80px;
        background-image: url('/images/profile/rocket.png');
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
