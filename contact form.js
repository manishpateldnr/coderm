const scriptURL = 'https://script.google.com/macros/s/AKfycbxMsRiGTBJh6YRI1-hhzc7FX_Ct-0ZMvAQEkTN-D4-6qgUcSr8LSaoWDpZphWYgo1eI/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
              msg.innerHTML = "Message sent Successfully"
              setTimeout(function(){
                  msg.innerHTML = ""
              },5000)
              form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })