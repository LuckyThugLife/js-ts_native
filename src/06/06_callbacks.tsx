
import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {
    
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
      alert(e.currentTarget.name)
    }


    const onNameChanged = () => {
        console.log("name changed")
    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed" + e.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }

  return <div> <textarea onBlur={focusLostHandler} onChange={onNameChanged}>Rustam</textarea>
      <input onChange={onAgeChanged} type={"number"}/>
      <button name={"delete"} onClick={deleteUser}>delete</button>
  </div>
}