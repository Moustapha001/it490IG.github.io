fetch('https://api.instagram.com/v1/self/media/recent?access_token=IGQVJYV0cyR0pGNWVUTDhxQmd1VHBiMnlleFNYNV9xNW9xUW9BX1NUSTd3QmxIbXFOeE1lR2poS0tJS01RbFlnM1R5QzdCUnlrdGlwUkJRb3o1RE50aWxEYXhFdVRyN3dwUU9ISnBOelJLVk9rcVU0SQZDZD')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
