import styled from 'styled-components'
import { Styles } from 'constants/StyleConstants'
import { devices } from '../../constants/ResponsiveBreakpoints'

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${devices.xs} {
    margin-top: 61px;
  }

  @media ${devices.sm} {
    margin-top: 61px;
  }

  @media ${devices.md} {
    margin-top: 61px;
  }
`

export const ProductPageHeaderImageContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: -5px;
`

export const ProductPageHeaderImage = styled.img`
  width: 100%;
`

export const ProductPageContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;

  @media ${devices.xs} {
    padding: 3px;
    flex-direction: column;
  }

  @media ${devices.sm} {
    padding: 4px;
    flex-direction: column;
  }

  @media ${devices.md} {
    padding: 5px;
  }

  @media ${devices.lg} {
    padding: 6px;
  }

  @media ${devices.xl} {
    padding: 7px;
  }
`

export const ProductPageContentVideoContainer = styled.div`
  display: flex;
  padding: 30px;
  max-height: 500px;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;

  @media ${devices.xs} {
    padding: 0px;
  }

  @media ${devices.sm} {
    padding: 0px;
  }

  @media ${devices.md} {
    padding: 15px;
    max-height: 400px;
    max-width: 350px;
  }

  @media ${devices.lg} {
    padding: 18px;
    max-height: 312px;
  }

  @media ${devices.xl} {
    padding: 21px;
    max-height: 365px;
  }
`

export const ProductPageContentVideo = styled.video`
  height: 100%;

  @media ${devices.xs} {
    padding: 9px;
    max-height: 250px;
    max-width: 230px;
  }

  @media ${devices.sm} {
    padding: 12px;
    max-height: 250px;
    max-width: 230px;
  }

  @media ${devices.md} {
    padding: 15px;
    max-height: 400px;
    max-width: 350px;
  }
`

export const ProductPageContentImage = styled.img`
  height: 100%;
`

export const ProductPageContentOptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  padding-top: 40px;
  flex: 2;

  @media ${devices.xs} {
    padding-top: 12px;
  }

  @media ${devices.sm} {
    padding-top: 16px;
  }

  @media ${devices.md} {
    padding-top: 20px;

  }

  @media ${devices.lg} {
    padding-top: 25px;
  }

  @media ${devices.xl} {
    padding-top: 29px;
  }
`

export const ProductPageContainerCharacteristicContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 20px;

  @media ${devices.xs} {
    padding: 6px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media ${devices.sm} {
    padding: 8px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media ${devices.md} {
    padding: 10px;
  }

  @media ${devices.lg} {
    padding: 13px;
  }

  @media ${devices.xl} {
    padding: 15px;
  }
`

export const ProductPageCharacteristicItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  text-align: justify;
  line-height: 22px;
  max-width: 450px;
  min-height: 450px;

  @media ${devices.xs} {
    gap: 15px;
    line-height: 7px;
    width: 80%;
    min-height: 230px;
  }

  @media ${devices.sm} {
    gap: 15px;
    line-height: 9px;
    width: 80%;
    min-height: 230px;
  }

  @media ${devices.md} {
    gap: 10px;
    line-height: 11px;
    width: 232px;
    height: 232px;
  }

  @media ${devices.lg} {
    gap: 13px;
    line-height: 14px;
    width: 281px;
    height: 281px;
  }

  @media ${devices.xl} {
    gap: 15px;
    line-height: 16px;
    width: 328px;
    height: 328px;
  }
`

export const ProductPageCharacteristicItemImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  border-bottom-color: ${Styles.Colours.PALETTE.DANITO._yellow};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  padding-bottom: 20px;

  @media ${devices.xs} {
    width: 90px;
    padding-bottom: 6px;
  }

  @media ${devices.sm} {
    width: 120px;
    padding-bottom: 8px;
  }

  @media ${devices.md} {
    width: 155px;
    padding-bottom: 10px;
  }

  @media ${devices.lg} {
    width: 187px;
    padding-bottom: 12.5px;
  }

  @media ${devices.xl} {
    width: 218px;
    padding-bottom: 14.5px;
  }
`

export const ProductPageCharacteristicItemHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ProductPageCharacteristicItemHeader = styled.h1`
  font-size: 25px;
  font-weight: bolder;
  margin: 0;

  @media ${devices.xs} {
    font-size: 15px;
  }

  @media ${devices.sm} {
    font-size: 15px;
  }

  @media ${devices.md} {
    font-size: 15px;
  }

  @media ${devices.lg} {
    font-size: 17px;
  }

  @media ${devices.xl} {
    font-size: 20px;
  }
`

export const ProductPageCharacteristicItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`

export const ProductPageCharacteristicItemText = styled.p`
  font-size: 17px;
  color: ${Styles.Colours.PALETTE.DANITO._black};
  padding: 10px;
  line-height: 20px;
  letter-spacing: 0.5px;

  @media ${devices.xs} {
    font-size: 15px;
    padding: 3px;
  }

  @media ${devices.sm} {
    font-size: 15px;
    padding: 4px;
  }

  @media ${devices.md} {
    font-size: 15px;
    padding: 5px;
  }

  @media ${devices.lg} {
    font-size: 15px;
    padding: 6px;
  }

  @media ${devices.xl} {
    font-size: 17px;
    padding: 7px;
  }
`

export const ProductPageProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  gap: 50px;

  @media ${devices.xs} {
    padding: 12px 0;
    gap: 15px;
  }

  @media ${devices.sm} {
    padding: 16px 0;
    gap: 20px;
  }

  @media ${devices.md} {
    padding: 20px 0;
    gap: 25px;
  }

  @media ${devices.lg} {
    padding: 25px 0;
    gap: 31px;
  }

  @media ${devices.xl} {
    padding: 29px 0;
    gap: 36px;
  }
`

export const ProductPagePanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 80%;
  margin: auto;

  @media ${devices.xs} {
    gap: 15px;
  }

  @media ${devices.sm} {
    gap: 20px;
  }

  @media ${devices.md} {
    gap: 25px;
  }

  @media ${devices.lg} {
    gap: 31px;
  }

  @media ${devices.xl} {
    gap: 36px;
  }
`

export const ProductPageProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 20px;

  @media ${devices.xs} {
    gap: 6px;
  }

  @media ${devices.sm} {
    gap: 8px;
  }

  @media ${devices.md} {
    gap: 10px;
  }

  @media ${devices.lg} {
    gap: 13px;
  }

  @media ${devices.xl} {
    gap: 15px;
  }
`

export const ProductPageProfileImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media ${devices.xs} {
    gap: 15px;
  }

  @media ${devices.sm} {
    gap: 20px;
  }

  @media ${devices.md} {
    gap: 25px;
  }

  @media ${devices.lg} {
    gap: 31px;
  }

  @media ${devices.xl} {
    gap: 36px;
  }
`

export const ProductPageProfileContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const ProductPageProfileTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 50px;
  text-align: center;
  margin-top: 10px;
`

export const ProductPageProfileText = styled.p`
  font-size: 17px;
  font-weight: bold;
  color: ${Styles.Colours.PALETTE.DANITO._black};

  @media ${devices.xs} {
    font-size: 13px;
  }

  @media ${devices.sm} {
    font-size: 13px;
  }

  @media ${devices.md} {
    font-size: 13px;
  }

  @media ${devices.lg} {
    font-size: 15px;
  }

  @media ${devices.xl} {
    font-size: 15px;
  }
`

export const ProductPageProfileImg = styled.img`
  max-height: 200px;
  transition: 0.5s ease-in-out;
  border: 1px solid ${Styles.Colours.PALETTE.DANITO._liteGray};

  @media ${devices.xs} {
    max-height: 130px;
  }

  @media ${devices.sm} {
    max-height: 130px;
  }

  @media ${devices.md} {
    max-height: 150px;
  }

  @media ${devices.lg} {
    max-height: 150px;
  }

  @media ${devices.xl} {
    max-height: 180px;
  }

  &:hover {
    box-shadow: 3px 3px 10px 3px ${Styles.Colours.PALETTE.DANITO._darkGray};
    transform: scale(1.05);
    transition: 0.5s ease-in-out;
  }
`

export const ProductsPanelsInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 30%;
  z-index: 100000;
  opacity: 1 !important;
`

export const ProductsPanelsInfoSelectedImage = styled.img`
  border-radius: 6px;
  cursor: pointer;
  height: 600px;

  @media ${devices.xs} {
    height: 300px;
  }

  @media ${devices.sm} {
    height: 350px;
  }

  @media ${devices.md} {
    height: 350px;
  }

  @media ${devices.lg} {
    height: 400px;
  }

  @media ${devices.xl} {
    height: 450px;
  }
`

export const ProductsPanelsInfoSelectedImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ProductsPanelsInfoTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProductsPanelsInfoText = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: ${Styles.Colours.PALETTE.DANITO._white};
  letter-spacing: 1px;

  @media ${devices.xs} {
    font-size: 15px;
  }

  @media ${devices.sm} {
    font-size: 15px;
  }

  @media ${devices.md} {
    font-size: 15px;
  }

  @media ${devices.lg} {
    font-size: 15px;
  }

  @media ${devices.xl} {
    font-size: 17px;
  }

`

export const ProductsDecorsInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 200px;
  z-index: 100000;
  opacity: 1 !important;
  width: 100%;
  right: 50%;
  left: 0%;

  @media ${devices.xs} {
    top: 35%;
  }

  @media ${devices.sm} {
    top: 35%;
  }

  @media ${devices.md} {
    top: 103px;
  }

  @media ${devices.lg} {
    top: 125px;
  }

  @media ${devices.xl} {
    top: 146px;
  }
`

export const ProductsDecorsInfoSelectedImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ProductsDecorsInfoSelectedImage = styled.img`
  border-radius: 6px;
  cursor: pointer;
  height: 600px;

  @media ${devices.xs} {
    height: 310px;
  }

  @media ${devices.sm} {
    height: 310px;
  }

  @media ${devices.md} {
    height: 310px;
  }

  @media ${devices.lg} {
    height: 375px;
  }

  @media ${devices.xl} {
    height: 437px;
  }
`

export const ProductsDecorsInfoTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProductsDecorsInfoText = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: ${Styles.Colours.PALETTE.DANITO._white};
  letter-spacing: 2px;

  @media ${devices.xs} {
    font-size: 15px;
  }

  @media ${devices.sm} {
    font-size: 15px;
  }

  @media ${devices.md} {
    font-size: 15px;
  }

  @media ${devices.lg} {
    font-size: 15px;
  }

  @media ${devices.xl} {
    font-size: 17px;
  }
`

export const OptionsColorContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media ${devices.xs} {
    margin-top: 15px;
    gap: 6px;
  }

  @media ${devices.sm} {
    margin-top: 20px;
    gap: 8px;
  }

  @media ${devices.md} {
    margin-top: 26px;
    gap: 10px;
  }

  @media ${devices.lg} {
    margin-top: 32px;
    gap: 12px;
  }

  @media ${devices.xl} {
    margin-top: 37px;
    gap: 15px;
  }
`

export const OptionsColor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const OptionsImg = styled.img`
  width: 50px;
`
