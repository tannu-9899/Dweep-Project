
import './footer.css'
import LinkedIn from './image/LinkedinLogo.svg'
import Instagram from './image/InstagramLogo.svg'

let Footer = ()=>{
    return(
        <>
        <div className='footer-container'>
        <div className='footer'>
            <div className='footer-left'>
                <span>Prompt Generator</span>
                <span>Dweep Daily</span>
                <span>All Contributors</span>
                <span>Your data on Dweep.io</span>           
            </div>

            <div className='footer-right'>
           <span>Dweep.io</span>
           <span>Made with love in India</span>
           <div className="logo">
             <img src={LinkedIn} alt="link-pic" />
            <img src={Instagram} alt="insta-pic"/>
               
           </div>
           <span>hello@dweep.io</span>
          </div>

        </div>
        </div>
       
        </>
    )
}

export default Footer