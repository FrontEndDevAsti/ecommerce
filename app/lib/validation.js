export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export function validatePassword(password) {
  return password.length >= 8
}

export function validatePhone(phone) {
  return /^\d{10}$/.test(phone)
}

export function validatePincode(pincode) {
  return /^\d{6}$/.test(pincode)
}

