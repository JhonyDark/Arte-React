
function Validation(values){
  let error ={}   
  
  if(values.name === ""){
    error.name = "Nombre no puede estar vacio"
}
else {
    error.name = ""
}
  
  if(values.email === ""){
      error.email = "Correo no puede estar vacio"
  }else {
      error.email = ""
  }
  
  if(values.password === "") {
      error.password = "contraseña no puede estar vacia"
  }else {
      error.password = ""
  }
  
  return error;
}

export default Validation;
