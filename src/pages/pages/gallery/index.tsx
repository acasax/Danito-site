import React from 'react'
import '../../../styles/Galerija/Galerija.css'
import LineAnimation from '../../components/lineAnimation'
import GalerijaFunc from './galerijaFunc'
import ImgObjekti from '../../../constants/imgObjects/ImgObject'

const Gallery = ({ scroll }: any) => {
  return (
        <div className="Galerija">
            <div className="Galerija__container">
                <LineAnimation header={'Index'} scroll={scroll} scrollY={400}/>
                <div className="Galerija__objekti">
                    <div className="Galerija__objekat">
                        <div className="Galerija__objekatInformacije">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.google.com/maps/place/DANITO+DOO/@44.857703,20.654436,17z/data=!4m12!1m6!3m5!1s0x0:0xd4fa6b89ba231681!2sDANITO+DOO!8m2!3d44.8577055!4d20.6544386!3m4!1s0x0:0xd4fa6b89ba231681!8m2!3d44.8577055!4d20.6544386?hl=sr-RS"
                            >
                                Žarka Zrenjanina 114, 26000 Pančevo
                            </a>
                            <div className="Galerija__line"></div>
                        </div>
                        <GalerijaFunc ImgObjekti={ImgObjekti.object1}/>
                    </div>
                    <div className="Galerija__objekat">
                        <div className="Galerija__objekatInformacije">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.google.com/maps/place/DANITO+DOO/@44.857703,20.654436,17z/data=!4m12!1m6!3m5!1s0x0:0xd4fa6b89ba231681!2sDANITO+DOO!8m2!3d44.8577055!4d20.6544386!3m4!1s0x0:0xd4fa6b89ba231681!8m2!3d44.8577055!4d20.6544386?hl=sr-RS"
                            >
                                Žarka Zrenjanina 114, 26000 Pančevo
                            </a>
                        </div>
                        <GalerijaFunc ImgObjekti={ImgObjekti.object2}/>
                    </div>
                    <div className="Galerija__objekat">
                        <div className="Galerija__objekatInformacije">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.google.com/maps/place/DANITO+DOO/@44.857703,20.654436,17z/data=!4m12!1m6!3m5!1s0x0:0xd4fa6b89ba231681!2sDANITO+DOO!8m2!3d44.8577055!4d20.6544386!3m4!1s0x0:0xd4fa6b89ba231681!8m2!3d44.8577055!4d20.6544386?hl=sr-RS"
                            >
                                Žarka Zrenjanina 114, 26000 Pančevo
                            </a>
                        </div>
                        <GalerijaFunc ImgObjekti={ImgObjekti.object3}/>
                    </div>
                    <div className="Galerija__objekat">
                        <div className="Galerija__objekatInformacije">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.google.com/maps/place/DANITO+DOO/@44.857703,20.654436,17z/data=!4m12!1m6!3m5!1s0x0:0xd4fa6b89ba231681!2sDANITO+DOO!8m2!3d44.8577055!4d20.6544386!3m4!1s0x0:0xd4fa6b89ba231681!8m2!3d44.8577055!4d20.6544386?hl=sr-RS"
                            >
                                Žarka Zrenjanina 114, 26000 Pančevo
                            </a>
                        </div>
                        <GalerijaFunc ImgObjekti={ImgObjekti.object4}/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Gallery
