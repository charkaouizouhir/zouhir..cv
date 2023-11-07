import{FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'
export const ContactME=()=>{
    return(
        <div className="contactMe">
            <h3>CONTACT ME</h3>
            <ul>
            <li className='flex items-center' ><FaLinkedin className='mr-2' /><a className="hover:text-[aqua]" href="https://www.linkedin.com/feed/">Linkden</a></li>
                <li className='flex items-center'><FaFacebook className='mr-2' /><a className="hover:text-[aqua]" href="https://www.facebook.com/zouhir.cherkawi.1">Facebook</a></li>
                <li className='flex items-center'><FaInstagram className='mr-2' /><a className="hover:text-[aqua]" href="https://www.instagram.com/zouhirecherkaoui/?hl=ar">instagram</a></li>
            </ul>
        </div>
    )
}