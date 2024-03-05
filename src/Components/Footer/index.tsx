import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './index.css'

export default function Footer(){
    
    const icons=[
        {
         iconSrc:faFacebook,
        },
        {
          iconSrc:faTwitter, 
        } ,
        {
           iconSrc:faYoutube,
        },
        {
         iconSrc:faInstagram,
         }
    ]
    return (
        <footer>
            <div className="social-medias-container">
            {
                icons?.length>0 && icons?.map(({iconSrc})=>(
                    <span className="icon" >
                    <FontAwesomeIcon
                     icon={iconSrc}
                     style={{color:"white", height:"2.5rem"}}
                     />
                   </span>
                ))
            }
            </div>
            <h1 id="copyright">© ALL RIGHTS RESERVED TO SOFTYEDUCATION 2024©</h1>
        </footer>
    )
}