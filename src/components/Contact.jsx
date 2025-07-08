import React from 'react'
import { openingHours, socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', {type: 'words'});

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut',
        });

        timeline.from(titleSplit.words, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.02,
        })
        .from('#contact h3, #contact p', {
            yPercent: 100,
            opacity: 0,
            stagger: 0.05,
        })
        .to('#f-right-leaf', {
            y: -50,
            duration: 1,
            ease: 'power1.inOut'
        }, '<')
        .to('#f-left-leaf', {
            y: 50,  
            duration: 1,
            ease: 'power1.inOut',   
        }, '<')  
    })




  return (
    <footer id='contact'>
        <img src="/images/footer-right-leaf.png" alt="footer-right-leaf" id='f-right-leaf' />
        <img src="/images/footer-left-leaf.png" alt="footer-left-leaf" id='f-left-leaf' />
        <div className='content'>
                <h2>Where to find us</h2>
                <div>
                    <h3>Visit our Bar</h3>
                    <p>123 Main St, Anytown, USA</p>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>Email: info@velvetpour.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) =>(
                        <p key={time.day}>{time.day}: {time.time}</p>
                    ))}
                </div>
                <div>
                    <h3>Socials</h3>
                    <div className='flex-center gap-5'>
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} target='blank' rel='noopener norefferer'>
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}

                    </div>
                </div>
        </div>
    </footer>
  )
}

export default Contact