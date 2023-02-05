$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

let productDetails = async (productName) => {
  const response = await fetch('/asks',  {
    method: 'POST',
    body: JSON.stringify({
        question: productName
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  }
  )
  if (!response.ok) {
    console.log(response)
    throw new Error(`HTTP error! status: ${response}`);
  }
  const data = await response.json()
  console.log(data)

  document.getElementsByClassName("product-description")[0].firstElementChild.innerText = data.productCategory
  document.getElementsByClassName("product-description")[0].lastElementChild.innerHTML = data.productDetails
  document.getElementsByClassName("product-price")[0].firstElementChild.innerText = data.productPrice
  document.getElementsByClassName('active')[0].setAttribute('src', data.imgSrc)
}

// const productImage = async (productName) => {
//   const response = await fetch('/get-image',  {
//     method: 'POST',
//     body: JSON.stringify({
//         productName: productName
//     })
//   }
//   )
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response}`);
//   }

//   const data = await response.json()
//   console.log(data)
//   document.getElementsByClassName('active')[0].setAttribute('src', data.imgSrc)
// }

let productName = prompt()
productDetails(productName)
// productImage(productName)
document.getElementsByTagName("H1")[0].innerText = productName