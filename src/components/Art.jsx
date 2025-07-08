import React, { useRef } from 'react'
import { featureLists, goodLists } from '../../constants'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

const Art = () => {
    const isMobile = useMediaQuery({maxWidth: 767});
    const artRef = useRef();

    useGSAP(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        const start = isMobile ? 'top 20%' : 'top top';

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true,
            }
        });

        maskTimeline
            .to('.will-fade', {
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power1.inOut'
            })
            .to('.masked-img', {
                scale: 1.3, 
                maskPosition: 'center', 
                maskSize: '400%', 
                duration: 1, 
                ease: 'power1.inOut'
            })
            .to('#masked-content', {
                opacity: 1,
                duration: 1,
                ease: 'power1.inOut'
            });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isMobile]); // Add dependency array

    return (
        <div id='art' ref={artRef}>
            <div className='container mx-auto h-full pt-20'>
                <h2 className='space-y-4 will-fade'>The Art</h2>
                <div className='content'>
                    <ul className='space-y-4 will-fade'>
                        {goodLists.map((feature, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <img src="/images/check.png" alt="check" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>
                    <div className='cocktail-img'>
                        <img 
                            src="/images/under-img.jpg" 
                            alt="cocktail" 
                            className='abs-center masked-img size-full object-contain'
                        />
                    </div>
                    <ul className='space-y-4 will-fade'>
                        {featureLists.map((feature, index) => (
                            <li key={index} className='flex items-center justify-start gap-2'>
                                <img src="/images/check.png" alt="check" />
                                <p className='md:w-fit w-60'>{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='masked-container'>
                    <h2 className='will-fade'>Sip-Worthy Perfection</h2>
                    <div id='masked-content'>
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn't just a drink. It's a carefully crafted moment made just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art