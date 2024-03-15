import { useState } from "react"

const usePasswordGeneratore = () => {
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMaessage] = useState("")

  const generatePassword = (charLength, checkBoxData) => {

    let charset = "";
    let generatedPassword = "";


    const selectedOption = checkBoxData.filter((checkBox) => checkBox.state)


    if(selectedOption.length === 0) {
      setErrorMaessage("Select at least one option")
      setPassword("")
      return
    }

    selectedOption.forEach((option) => {
      switch (option.title) { 
        case "Includes Uppercase Letters" :
          charset += "ABCDEFGHIJKLMNOPQRESTUVWXYZ";
          break;
        case "Includes Lowercase Letters" :
          charset += "abcdefghijklmnopqrestuvwxyz";
          break;
        case "Includes Numbers" :
          charset += "0123456789";
          break;
        case "Includes Symbols" :
          charset += "~!@#$%^&*()";
          break;
        default:
          break;
      }
    })

    for(let i = 0; i<charLength; i++) {
      const randomNumber = Math.floor(Math.random() * charset.length)
      generatedPassword += charset[randomNumber]
    }

    setPassword(generatedPassword)
    setErrorMaessage("")
  }


  return {password, errorMessage, generatePassword}
}


export default usePasswordGeneratore