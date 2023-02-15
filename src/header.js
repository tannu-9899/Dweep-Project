import './header.css'
import boy from './image/dweep.svg'

let Header = ()=>{
    return(
        <>
        <div className='header-container'>
        <div className='header'>
            <div className='left'>

                <h1>An inspiring design delivered to your inbox every morning.</h1>
                <h4>Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</h4>
                <h2>Show me how it looks</h2>
                <div className='register'>
                <input type="email" placeholder="Your e-mail address" />
                <button>Register Now</button>
                </div>
               
                <div className='free'><p>Free - No Spam - No Data Sharing</p></div>

            </div>

            <div className='right'>
               <img className='dweep' src={boy} alt="dweep-pic"/>
            </div>

        </div>

        </div>


        </>
    )
}

export default Header
