import React from 'react'

const StrengthChecker = ({password}) => {

  const getPasswordStrength = () => {
    const passwordLength = password.length
    
    if(password === "") {
      return
    }
    else if(passwordLength<5) {
      return (
        <p style={{color:"red"}}>Poor</p>
      )
    }else if(passwordLength<10) {
      return (
        <p style={{color:"orange"}}>Medium</p>

      )
    }else if(passwordLength<15) {
      return(
        <p style={{color:"green"}}>Strong</p>

      )
    }else {
      return(
        <p style={{color:"green"}}>Very Strong</p>

      )
    }
  }

  const passwordStrength = getPasswordStrength()
  if(!passwordStrength) return <React.Fragment/>

  return (
    <div className='password-strength'>Strength: <span style={{fontWeight: "bold"}}>{passwordStrength}</span> </div>
  )
}

export default StrengthChecker