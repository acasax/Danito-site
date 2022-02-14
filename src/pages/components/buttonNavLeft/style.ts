import styled from 'styled-components'

export const ButtonNavLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s;
  max-width: 300px;
`

export const ButtonNavLeftTopImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s;
  max-width: 100%;
  text-align: start;
`

export const ButtonNavLeftContainerImg = styled.img`
  width: 60px;
`

export const ButtonNavLeftButton = styled.button`
  height: 50px;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid transparent;
  background-color: transparent;
  transition: 0.3s ease-in-out;
  border-bottom-width: 0;

  &:hover .ButtonNavLeftButtonHover {
    opacity: 0.5;
    transition: 0.3s ease-in-out;
  }
`
