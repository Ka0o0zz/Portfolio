import { useState } from "react"

export const Toggle = ({emojiTrue,emojiFalse, section}:Ttoggle) => {

    const [state, setState] = useState<boolean>(false) 

    return(
        <div>
            <input 
                type="checkbox" 
                id={`hide-checkbox-${emojiTrue}-${section}`} 
                checked={state} 
                onChange={() => setState (!state)}
                className="hide-checkbox"
            />
            <label 
                htmlFor={`hide-checkbox-${emojiTrue}-${section}`} 
                className="toggle"
            >
                <span className="toggle-button">
                </span>
                <span className="toggle-item"> 
                {state ? emojiTrue : emojiFalse}
                </span>
            </label>
        </div>
    )
}