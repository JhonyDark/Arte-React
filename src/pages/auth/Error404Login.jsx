
function Validation (values){
  let error ={}   
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0 -9]{8,}$/
  
  
  if(values.email === ""){
      error.email = "Correo no puede estar vacio"
  }
  else if(!email_pattern.test(values.email)){
      error.email = "Email no es correcto"
  }else {
      error.email = ""
  }
  
  if(values.password === "") {
      error.password = "contraseña no puede estar vacia"
  }
  else if(!password_pattern.test(values.password)){
      error.password = "contraseña no es correcta"
  }else {
      error.password = ""
  }
  
  return error;
}

export default Validation;
