import { FullName } from "../infos/FullName"
import { ProSkills } from "./ProSkills"
import { ProObjectif } from "./ProObjectif"
import { Otherskills } from "./OtherSkills"

export const Skills=()=>{
    return(
        <div className="mr-10">
            <FullName/>
            <ProSkills/>
            <ProObjectif/>
            <Otherskills/>
        </div>

    )
}