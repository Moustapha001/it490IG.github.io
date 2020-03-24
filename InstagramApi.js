<script>

fetch('https://api.instagram.com/v1/self/media/recent?access_token=IGQVJYNy11U19ZARkZAaanpDekRTT2ppUG5SekNhUThQOGNDajF5TVFjNG9kSWU5MkpDZAUdxSV90UFhWeVdFdmZAQUm96NkJ4aGNCendLRlNZASnJGdXJMVUZALVzBjZA0lNWVM1SlJUWFN2SXc4RzlVMHZAtegZDZD')
      
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });


</script>
