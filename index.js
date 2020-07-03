function loginPage() {
  let userName = document.getElementById('name').value
  let email = document.getElementById('email').value
  if(userName === '') {
    alert('please fill in the name first')
  } else if(email === '') {
    alert('please fill in the email first')
  } else {
    document.getElementById('userName').innerHTML = 'Welcome ' + userName + ' to Yourkitty.com'
    document.getElementById('login').style.display = 'none'
    document.getElementById('mainStore').style.display = 'block'
    document.getElementById('footer').style.display = 'block'
  }
}

function addressForm() {
  let userName = document.getElementById('name').value
  let email = document.getElementById('email').value
  let address = document.getElementById('address').value
  let zipCode = document.getElementById('zipCode').value
  let creditCard = document.getElementById('creditCart').value
  if(userName === '') {
    alert('please fill in the name first')
  } else if(email === '') {
    alert('please fill in the email first')
  } else if(address === '') {
    alert('please fill in the address')
  } else if(zipCode === '') {
    alert('please fill in the zip code')
  } else if(creditCard === '') {
    alert('please fill in the credit card ')
  } else {
    document.getElementById('thankYouUser').innerHTML = 'Thank you ' + userName + ' purchasing in this store'
    document.getElementById('checkout').style.display = 'none'
    document.getElementById('thankYou').style.display = 'block'
  }
}

function changePicture(id) {
  let clickPicture = document.getElementById(id).src
  let mainPicture = document.getElementById('main')
  mainPicture.src = clickPicture
}