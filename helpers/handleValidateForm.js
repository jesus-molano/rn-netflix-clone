
 export const handleValidateEmail = (email) => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return isValidEmail
};


 export const handleValidatePassword = (password) => {
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password);
  return isValidPassword
}

export const handleValidateForm = (email, password) => {
  const isValidEmail = handleValidateEmail(email)
  const isValidPassword = handleValidatePassword(password)
  if (!isValidEmail) return 'Please enter a valid email address'
  if (!isValidPassword) return 'Please enter a valid password'
  return null
}