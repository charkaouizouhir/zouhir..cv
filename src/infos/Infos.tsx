import { AboutMe } from "./AboutME"
import { Diplomas } from "./Diplomas"
import { Languages } from "./Languages"
import { ContactME } from "./CotactMe"



export const Infos=()=>{
    return(
       <div className="bg-[aqua]" style={{ width: '20%', height: '100%' }}>
        <img
          src="photo.jpg"
          alt="myphoto"
          style={{
            width: '150px',
            border: 'black solid 5px',
            borderRadius: '30%',
            marginTop: '75px',
            marginLeft: '10px'}}/>

        
            <AboutMe/>
            <Diplomas/>
            <Languages/>
            <ContactME/>

        </div>
    )
}