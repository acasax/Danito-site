import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import '../../styles/Options/Options.css'

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
          <Typography>{children}</Typography>
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

const BasicTabs = ({ optionsContent }:any) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {
                optionsContent.optionHeaders.map((item, key) => {
                  return <Tab label={item} {...a11yProps(key)} key={key} />
                })
            }
        </Tabs>
      </Box>
 {/*       {
            optionsContent.options.map((item, key) => {
              return item.description
                ? (<TabPanel value={value} index={key}>
                    <ul>
                      <li>{item.description}</li>
                    </ul>
                    {item.colors
                      ? (
                            <div className="options__colorContainer">
                              {item.colors.map((data, key) => {
                                return (
                                    <div className="options__colors" key={key}>
                                      <p>{data.text}</p>
                                      <img src={data.image} alt="" />
                                    </div>
                                )
                              })}
                            </div>
                        )
                      : null}
                  </TabPanel>)
                : <ul>
                    {item.map((data, key) => {
                      return <li key={key}>{data}</li>
                    })}
                  </ul>
            })
        } */}
      <TabPanel value={value} index={0}>
        <h2>{optionsContent.nameHeader}</h2>
        {optionsContent.options[0].map((data, key) => {
          return <li key={key}>{data}</li>
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul>
          {optionsContent.options[1].map((data, key) => {
            return <li key={key}>{data}</li>
          })}
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ul>
          <li>{optionsContent.options[2].description}</li>
        </ul>
        {optionsContent.options[2].colors
          ? (
          <div className="options__colorContainer">
            {optionsContent.options[2].colors.map((data, key) => {
              return (
                <div className="options__colors" key={key}>
                  <p>{data.text}</p>
                  <img src={data.image} alt="" />
                </div>
              )
            })}
          </div>
            )
          : null}
      </TabPanel>
    </Box>
  )
}

export default BasicTabs
