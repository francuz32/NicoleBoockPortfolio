      function scrollToTop(){
            window.scrollTo(0,0);
        }

        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }


            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        var sidemenu = document.getElementById("sidemenu");

        function openmenu() {
            sidemenu.style.right = "0";
        }


        function closemenu() {
            sidemenu.style.right = "-200px";
        }

        /* https://script.google.com/u/0/home/projects/1yT4EvL9sfMh_JctdYF6aLE8CQoc6mGdEecxYjhAlg8Y0AcEddEb1VcpP/edit */

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzpimEtkKv4ljHit8tFPgUHspgDfoXwUrSQKn-E6BJ6ZMIRYCuH2G-zaN7rxt-Mzn1Y/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Thank you for your message"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    });





