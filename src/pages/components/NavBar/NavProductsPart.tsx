import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/NavProducts/NavProducs.css'
import SideNavBarItem from '../sideNavBarItem'
import { ProductData } from '../../../constants/ProductData'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

// @ts-ignore
import { IMAGES, PRODUCTS } from '../../../constants/ProductNavBarData'

const NavProductsPart = ({ navRightOpen, setPathTo, setPageName, setData }: any) => {
  const initialButtonsState = [
    PRODUCTS.prozori,
    PRODUCTS.vrata,
    PRODUCTS.roletne,
    PRODUCTS.solomaticVenecijaneri,
    PRODUCTS.fasade,
    PRODUCTS.klizniSistemi
  ]
  const initialImgState = [IMAGES.windowImg, IMAGES.doorsImg, IMAGES.roletneImg, IMAGES.solomaticVenecijaneri, IMAGES.fasadeImg, IMAGES.teraseImg]

  const [selected, setSelected] = useState('')
  const [buttons, setButtons] = useState([
    PRODUCTS.prozori,
    PRODUCTS.vrata,
    PRODUCTS.roletne,
    PRODUCTS.solomaticVenecijaneri,
    PRODUCTS.fasade,
    PRODUCTS.klizniSistemi
  ])
  const [img, setImg] = useState([
    IMAGES.windowImg,
    IMAGES.doorsImg,
    IMAGES.roletneImg,
    IMAGES.solomaticVenecijaneri,
    IMAGES.fasadePVC,
    IMAGES.teraseImg
  ])
  const [flexDirection, setFlexDirection] = useState('row')

  useEffect(() => {
    // -----------> 2. Stepenik

    // Prozori
    if (selected === PRODUCTS.prozori) {
      setButtons([PRODUCTS.pvcProzori, PRODUCTS.aluminiumProzori, PRODUCTS.drvoAluminiumProzori])
      setImg([IMAGES.windowPvcImg, IMAGES.windowAluminiumImg, IMAGES.windowWoodAluminiumImg])
      setFlexDirection('column')
    }
    // Vrata
    if (selected === PRODUCTS.vrata) {
      setButtons([PRODUCTS.pvcVrata, PRODUCTS.aluminiumVrata, PRODUCTS.sigurnosnaVrata])
      setImg([IMAGES.doorPvcImg, IMAGES.doorAluminiumImg, IMAGES.doorSafeImg])
      setFlexDirection('column')
    }
    // Roletne
    if (selected === PRODUCTS.roletne) {
      setButtons([PRODUCTS.pvcRoletne, PRODUCTS.aluminiumRoletne])
      setImg([IMAGES.roletnePVCImg, IMAGES.roletneAluminiumImg])
      setFlexDirection('column')
    }
    // Fasade
    if (selected === PRODUCTS.fasade) {
      setButtons([
        PRODUCTS.fundermaxFasade,
        PRODUCTS.ventilisaneAlucobondFasade,
        PRODUCTS.stakleneFasade,
        PRODUCTS.granitFasade
      ])
      setImg([IMAGES.fasadePVC, IMAGES.fasadePVC, IMAGES.fasadePVC, IMAGES.fasadePVC])
      setFlexDirection('column')
    }
    // Terasni Sistemi
    if (selected === PRODUCTS.klizniSistemi) {
      setButtons([PRODUCTS.podnoKlizni, PRODUCTS.uskocnoKlizni, PRODUCTS.acordianHarmonika])
      setImg([IMAGES.terasePVC, IMAGES.teraseDRVO, IMAGES.teraseALUMINIUM])
      setFlexDirection('column')
    }

    // -----------> 3. Stepenik

    // Prozori
    if (selected === PRODUCTS.pvcProzori) {
      setButtons([PRODUCTS.allProducts.pvcProzor1, PRODUCTS.allProducts.pvcProzor2])
      // @ts-ignore
      setImg('')
    }

    if (selected === PRODUCTS.drvoAluminiumProzori) {
      setButtons([PRODUCTS.allProducts.drvoAluminiumProzor1])
      // @ts-ignore
      setImg('')
    }
    if (selected === PRODUCTS.aluminiumProzori) {
      setButtons([
        PRODUCTS.allProducts.aluminiumProzor1,
        PRODUCTS.allProducts.aluminiumProzor2,
        PRODUCTS.allProducts.aluminiumProzor3,
        PRODUCTS.allProducts.aluminiumProzor4
      ])
      // @ts-ignore
      setImg('')
    }
    // Vrata
    if (selected === PRODUCTS.pvcVrata) {
      setButtons([PRODUCTS.allProducts.ulaznaVrata, PRODUCTS.allProducts.pregradnaVrata])
      // @ts-ignore
      setImg('')
    }
    if (selected === PRODUCTS.aluminiumVrata) {
      setButtons([
        PRODUCTS.allProducts.vrataHladanProfil,
        PRODUCTS.allProducts.vrataProfilTermo,
        PRODUCTS.allProducts.vrataSkrivenoKrilo
      ])
      // @ts-ignore
      setImg('')
    }
    if (selected === PRODUCTS.sigurnosnaVrata) {
      setButtons([PRODUCTS.allProducts.celicnaVrata])
      // @ts-ignore
      setImg('')
    }
    // Roletne
    if (selected === PRODUCTS.pvcRoletne) {
      setButtons([PRODUCTS.allProducts.pvcRoletne1, PRODUCTS.allProducts.pvcRoletne2])
      // @ts-ignore
      setImg('')
    }
    if (selected === PRODUCTS.aluminiumRoletne) {
      setButtons([
        PRODUCTS.allProducts.spoljneRoletne,
        PRODUCTS.allProducts.unutrasnjeRoletne,
        PRODUCTS.allProducts.podvasadneRoletne
      ])
      // @ts-ignore
      setImg('')
    }
    if (selected === PRODUCTS.solomaticVenecijaneri) {
      setButtons([PRODUCTS.allProducts.spoljniVenecijaneri, PRODUCTS.allProducts.podfasadniVenecijaneri])
      // @ts-ignore
      setImg('')
    }

    // Fasade
    if (selected === PRODUCTS.fundermaxFasade) {
      setButtons([PRODUCTS.allProducts.FunderFasade])
      // @ts-ignore
      setImg('')
    }
    if (selected === PRODUCTS.ventilisaneAlucobondFasade) {
      setButtons([PRODUCTS.allProducts.VentilFasade])
      // @ts-ignore
      setImg('')
    }
    if (selected === PRODUCTS.stakleneFasade) {
      setButtons([PRODUCTS.allProducts.strukovna, PRODUCTS.allProducts.standardna])
      // @ts-ignore
      setImg('')
    }
    if (selected === PRODUCTS.granitFasade) {
      setButtons([PRODUCTS.allProducts.granit])
      // @ts-ignore
      setImg('')
    }

    // Terasni Sistemi
    if (selected === PRODUCTS.podnoKlizni) {
      setButtons([
        PRODUCTS.allProducts.pvcVekaSlide,
        PRODUCTS.allProducts.aluUltraGlide,
        PRODUCTS.allProducts.aluVgPlus
      ])
      // @ts-ignore
      setImg('')
    }
    if (selected === PRODUCTS.uskocnoKlizni) {
      setButtons([PRODUCTS.allProducts.pvcVekaSoft, PRODUCTS.allProducts.aluVisoglide])
      // @ts-ignore
      setImg('')
    }
    if (selected === PRODUCTS.acordianHarmonika) {
      setButtons([
        PRODUCTS.allProducts.pvcSmatiaM9800,
        PRODUCTS.allProducts.pvcSmatiaM1980,
        PRODUCTS.allProducts.panoramaAliplast
      ])
      // @ts-ignore
      setImg('')
    }
  }, [selected])

  const backHandler = () => {
    setButtons(initialButtonsState)
    setImg(initialImgState)
    // @ts-ignore
    setSelected(false)
    setFlexDirection('row')
  }

  const setProductPath = (value, productDatum: any) => {
    const newData = ProductData.filter((product) => {
      return product.name === value
    })
    setData(...newData)
    Object.values(PRODUCTS.allProducts).forEach((product) => {
      if (product === value) {
        setPathTo(`/${product.replace(/\s/g, '')}`)
        setPageName(value)
      } else return ''
    })
  }

  return (
        <div className={navRightOpen ? 'Nav__productsVisible' : 'Nav__productsHiden'}>
            {selected
              ? (
                    <div className="Nav__productsSelected">
                        <ArrowBackIosIcon className="Nav__productsSelectedSvg" onClick={backHandler}
                                          sx={{ fontSize: 35 }}/>
                        <p>{selected}</p>
                    </div>
                )
              : (
                    <div className="Nav__searchContainer">
                        <div className="Nav__search">
                            <ArrowDownwardIcon/>
                            <p>Izaberite proizvod</p>
                        </div>
                    </div>
                )}
            <div className="Nav__productsContainer">
                {buttons.map((but, i) => {
                  return (
                        <Link to={`/${but.replace(/\s/g, '')}`} onClick={() => setProductPath(but, ProductData[i])}
                              key={i}>
                            <SideNavBarItem
                                flexDirection={flexDirection}
                                img={img[i]}
                                selected={selected}
                                setSelected={setSelected}
                                buttonText={but}
                            />
                        </Link>
                  )
                })}
            </div>
        </div>
  )
}

export default NavProductsPart
