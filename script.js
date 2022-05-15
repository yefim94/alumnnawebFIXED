const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yem4m8c', 'template_xite6q4', form.current, 'CdolNR6B-_vn2-VUo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    alert("your email has been sent")
  };

  function deleteBanner () {
    document.getElementById('banner').remove()
  }