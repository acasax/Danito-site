import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Backdrop from '@mui/material/Backdrop'
import {
  OptionsColor,
  OptionsColorContainer,
  OptionsImg,
  ProductsDecorsInfoContainer,
  ProductsDecorsInfoSelectedImage,
  ProductsDecorsInfoSelectedImageContainer,
  ProductsDecorsInfoText,
  ProductsDecorsInfoTextContainer
} from './style'

export type TImg = {
    image: string,
    text: string
}

const TabPanel = ({ children, value, index, ...other }: any) => {
  return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const BasicTabs = ({ optionsContent }: any) => {
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)
  const [colorItem, setColorItem] = useState({} as TImg)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleOpen = (img: TImg) => {
    setColorItem(img)
    setOpen(true)
  }

  const handleClose = () => {
    setColorItem({} as TImg)
    setOpen(false)
  }

  return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {
                        optionsContent.optionHeaders.map((item, key) => {
                          return <Tab label={item} {...a11yProps(key)} key={`opt1-${key}`}/>
                        })
                    }
                </Tabs>
            </Box>
            {
                optionsContent.options[0] && <TabPanel value={value} index={0}>
                    <Typography variant={'h4'}>{optionsContent.nameHeader}</Typography>
                    {optionsContent.options[0].map((data, key) => {
                      return <li key={`opt2-${key}`}>{data}</li>
                    })}
                </TabPanel>
            }
            {
                optionsContent.options[1] && <TabPanel value={value} index={1}>
                    <ul>
                        {optionsContent.options[1].map((data, key) => {
                          return <li key={`opt3-${key}`}>{data}</li>
                        })}
                    </ul>
                </TabPanel>
            }
            {
                optionsContent.options[2] && <TabPanel value={value} index={2}>
                    <ul>
                        <li>{optionsContent.options[2].description}</li>
                    </ul>
                    {optionsContent.options[2].colors
                      ? (
                            <OptionsColorContainer>
                                {optionsContent.options[2].colors.map((data, key) => {
                                  return (
                                        <div key={`opt4-${key}`}>
                                            <OptionsColor
                                                onClick={() => handleOpen(data)}
                                            >
                                                <p>{data.text}</p>
                                                <OptionsImg src={data.image} className={'options_img'} alt=""/>
                                            </OptionsColor>
                                            <Backdrop
                                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                                open={open}
                                                onClick={handleClose}
                                            />
                                            {open
                                              ? (
                                                    <ProductsDecorsInfoContainer>
                                                        <ProductsDecorsInfoSelectedImageContainer>
                                                            <ProductsDecorsInfoSelectedImage src={colorItem.image}/>
                                                        </ProductsDecorsInfoSelectedImageContainer>
                                                        <ProductsDecorsInfoTextContainer>
                                                            <ProductsDecorsInfoText>{colorItem.text}</ProductsDecorsInfoText>
                                                        </ProductsDecorsInfoTextContainer>
                                                    </ProductsDecorsInfoContainer>
                                                )
                                              : null}
                                        </div>
                                  )
                                })}
                            </OptionsColorContainer>
                        )
                      : null}
                </TabPanel>
            }

        </Box>
  )
}

export default BasicTabs
