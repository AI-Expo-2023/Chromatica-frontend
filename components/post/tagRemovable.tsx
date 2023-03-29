import { Theme } from "@/styles/theme/Theme"
import { Dismiss20Filled } from "@fluentui/react-icons"

type tagType = {
    data: string;
    onClick?: ()=>void;
}

export const RemovableTag = ({data, onClick}:tagType)=>{
    return(
        <div>
            <button>
                <Dismiss20Filled primaryFill={Theme.Black} />
            </button>
            {data}
        </div>
    )
}

