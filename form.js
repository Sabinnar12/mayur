<script>
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxV0usklJMIoxSiy7SwjyfdolFB_cRjyKQ49ed8KxlLAwIiGxI1rXHi0ce7oh1NrGEx/exec'
  const form = document.forms['form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
</script>
