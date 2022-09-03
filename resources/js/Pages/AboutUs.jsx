import React, { useEffect, useRef, useState } from 'react'
import Footer from '@/Components/Footer'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
export default function AboutUs() {
    const imgBg = useRef();
    const [scroll, setScroll] = useState()
    

    return (
        
        <Parallax pages={1} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
                className="bg-disable"
                sticky={{
                    start:0,
                    end:3
                }}
                
                offset={0}
                speed={2.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',zIndex:-1 ,height:"20vh"}}>
                <p>Scroll down</p>

            </ParallaxLayer>
            

            <ParallaxLayer
                className="bg-error"
                offset={1}
                speed={0.5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    zIndex:0 
                }}>
                <p>Scroll up</p>
            </ParallaxLayer>
        </Parallax>
    )
}
