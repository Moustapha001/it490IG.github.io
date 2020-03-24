var unirest = require("unirest");

var req = unirest("GET", "https://api.instagram.com/oauth/authorize
  ?client_id=853404941837918
  &redirect_uri=//https:moustapha001.github.io/it490IG.github.io/Login.html
  &scope=user_profile,user_media
  &response_type=code");

req.query({
	"kullaniciadi": "nasa",
	"lang": "en"
});

req.headers({
	"x-rapidapi-host": "https://moustapha001.github.io/it490IG.github.io/Login.html",
	"x-rapidapi-key": "IGQVJYV0cyR0pGNWVUTDhxQmd1VHBiMnlleFNYNV9xNW9xUW9BX1NUSTd3QmxIbXFOeE1lR2poS0tJS01RbFlnM1R5QzdCUnlrdGlwUkJRb3o1RE50aWxEYXhFdVRyN3dwUU9ISnBOelJLVk9rcVU0SQZDZD"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
