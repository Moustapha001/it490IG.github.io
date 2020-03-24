<script>

fetch('https://api.instagram.com/oauth/authorize
  ?client_id=226838558508870
  &redirect_uri=//https:moustapha001.github.io/it490IG.github.io/Login.html
  &scope=user_profile,user_media
  &response_type=code')
      
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });


</script>
