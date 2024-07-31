//  // $(document).ready(function() {
//  //      // ========== Hiding Popup ============
//  //      jQuery('span.close-popup--btn').on('click', function(){
//  //          jQuery('.popup-section').addClass('hide-popup');
//  //      });
//  //      // ========== Hiding Popup ============
//  //      jQuery('.header-column .open-popup--btn').on('click', function(){
//  //          jQuery('.popup-section').removeClass('hide-popup');
//  //      });
//  //  });

// document.addEventListener('DOMContentLoaded', function() {
//     // Show the popup if it hasn't been closed
//     if (sessionStorage.getItem('popupClosed') !== 'true') {
//         document.querySelector('.popup-section').classList.add('show-popup');
//         document.querySelector('.popup-section').style.display = 'block';
//     }

//     // ========== Hiding Popup ============
//     document.querySelectorAll('span.close-popup--btn').forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             document.querySelector('.popup-section').style.display = 'none';
//             document.querySelector('.popup-section').classList.remove('show-popup');
//             sessionStorage.setItem('popupClosed', 'true');
//         });
//     });

//   document.querySelectorAll('button.submit-btn').forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             document.querySelector('.popup-section').style.display = 'none';
//             document.querySelector('.popup-section').classList.remove('show-popup');
//             sessionStorage.setItem('popupClosed', 'true');
//         });
//     });

  

//     // ========== Showing Popup ============
//     document.querySelectorAll('.header-column .open-popup--btn').forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             document.querySelector('.popup-section').style.display = 'block';
//             document.querySelector('.popup-section').classList.add('show-popup');
//             sessionStorage.setItem('popupClosed', 'false');
//         });
//     });

//     // Check popupClosed state and apply 'hide-popup' class accordingly
//     if (sessionStorage.getItem('popupClosed') === 'true') {
//         document.querySelector('.popup-section').classList.add('hide-popup');
//     } else {
//         document.querySelector('.popup-section').classList.remove('hide-popup');
//     }

//     // ========== Hiding Popup ============
//     document.querySelectorAll('span.close-popup--btn').forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             document.querySelector('.popup-section').classList.add('hide-popup');
//             sessionStorage.setItem('popupClosed', 'true');
//         });
//     });

//     // ========== Showing Popup ============
//     document.querySelectorAll('.header-column .open-popup--btn').forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             document.querySelector('.popup-section').classList.remove('hide-popup');
//             sessionStorage.setItem('popupClosed', 'false');
//         });
//     });
// });


 // $(document).ready(function() {
 //      // ========== Hiding Popup ============
 //      jQuery('span.close-popup--btn').on('click', function(){
 //          jQuery('.popup-section').addClass('hide-popup');
 //      });
 //      // ========== Hiding Popup ============
 //      jQuery('.header-column .open-popup--btn').on('click', function(){
 //          jQuery('.popup-section').removeClass('hide-popup');
 //      });
 //  });

// document.addEventListener('DOMContentLoaded', function() {
//     // Show the popup if it hasn't been closed
//     if (sessionStorage.getItem('popupClosed') !== 'true') {
//         document.querySelector('.popup-section').classList.add('show-popup');
//         document.querySelector('.popup-section').style.display = 'block';
//     }

//     // ========== Hiding Popup ============
//     document.querySelectorAll('span.close-popup--btn').forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             document.querySelector('.popup-section').style.display = 'none';
//             document.querySelector('.popup-section').classList.remove('show-popup');
//             sessionStorage.setItem('popupClosed', 'true');
//         });
//     });

//   document.querySelectorAll('button.submit-btn').forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             // document.querySelector('.popup-section').style.display = 'none';
//             // document.querySelector('.popup-section').classList.remove('show-popup');
//             sessionStorage.setItem(' true');
//         });
//     });

  

//     // ========== Showing Popup ============
//     document.querySelectorAll('.header-column .open-popup--btn').forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             document.querySelector('.popup-section').style.display = 'block';
//             document.querySelector('.popup-section').classList.add('show-popup');
//             sessionStorage.setItem('popupClosed', 'false');
//         });
//     });

//     // Check popupClosed state and apply 'hide-popup' class accordingly
//     if (sessionStorage.getItem('popupClosed') === 'true') {
//         document.querySelector('.popup-section').classList.add('hide-popup');
//     } else {
//         document.querySelector('.popup-section').classList.remove('hide-popup');
//     }

//     // ========== Hiding Popup ============
//     document.querySelectorAll('span.close-popup--btn').forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             document.querySelector('.popup-section').classList.add('hide-popup');
//             sessionStorage.setItem('popupClosed', 'true');
//         });
//     });

//     // ========== Showing Popup ============
//     document.querySelectorAll('.header-column .open-popup--btn').forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             document.querySelector('.popup-section').classList.remove('hide-popup');
//             sessionStorage.setItem('popupClosed', 'false');
//         });
//     });
// });
// final
   // function handleFormSubmit(event) {
   //          event.preventDefault(); // Prevent default form submission

   //          const form = event.target;
   //          const formData = new FormData(form);

   //          fetch(form.action, {
   //              method: form.method,
   //              body: formData,
   //          })
   //          .then(response => {
   //              if (!response.ok) {
   //                  throw new Error('Network response was not ok');
   //              }
   //              return response.json();
   //          })
   //          .then(data => {
   //              // Handle the response data
   //              if (data.success) {
   //                  document.querySelector('#popup-form').style.display = 'none';
   //                  document.querySelector('#thank-you-message').classList.remove('hidden');
   //              } else {
   //                  // Handle errors
   //                  console.error('Form submission failed:', data.error);
   //              }
   //          })
   //          .catch(error => console.error('Form submission error:', error));
   //      }

   //      document.addEventListener('DOMContentLoaded', function () {
   //          // Show the popup if it hasn't been closed
   //          if (sessionStorage.getItem('popupClosed') !== 'true') {
   //              document.querySelector('.popup-section').classList.add('show-popup');
   //              document.querySelector('.popup-section').style.display = 'block';
   //          }

   //          // Hiding Popup
   //          document.querySelectorAll('span.close-popup--btn').forEach(function (btn) {
   //              btn.addEventListener('click', function () {
   //                  document.querySelector('.popup-section').style.display = 'none';
   //                  document.querySelector('.popup-section').classList.remove('show-popup');
   //                  sessionStorage.setItem('popupClosed', 'true');
   //              });
   //          });

   //          // Showing Popup
   //          document.querySelectorAll('.header-column .open-popup--btn').forEach(function (btn) {
   //              btn.addEventListener('click', function () {
   //                  document.querySelector('.popup-section').style.display = 'block';
   //                  document.querySelector('.popup-section').classList.add('show-popup');
   //                  sessionStorage.setItem('popupClosed', 'false');
   //              });
   //          });

   //          // Check popupClosed state and apply 'hide-popup' class accordingly
   //          if (sessionStorage.getItem('popupClosed') === 'true') {
   //              document.querySelector('.popup-section').classList.add('hide-popup');
   //          } else {
   //              document.querySelector('.popup-section').classList.remove('hide-popup');
   //          }
   //      });
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    console.log('Submitting form...');

    fetch(form.action, {
        method: form.method,
        body: formData,
    })
    .then(response => {
        console.log('Received response:', response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response as JSON
    })
    .then(data => {
        console.log('Form submission response data:', data); // Log the response data
        if (data.success) {
            document.querySelector('#popup-form').style.display = 'none';
            document.querySelector('#thank-you-message').classList.remove('hidden');
            console.log('Thank you message displayed');
        } else {
            // Handle errors
            console.error('Form submission failed:', data.error);
        }
    })
    .catch(error => {
        console.error('Form submission error:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Show the popup if it hasn't been closed
    if (sessionStorage.getItem('popupClosed') !== 'true') {
        document.querySelector('.popup-section').classList.add('show-popup');
        document.querySelector('.popup-section').style.display = 'block';
    }

    // Hiding Popup
    document.querySelectorAll('span.close-popup--btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelector('.popup-section').style.display = 'none';
            document.querySelector('.popup-section').classList.remove('show-popup');
            sessionStorage.setItem('popupClosed', 'true');
        });
    });

    // Showing Popup
    document.querySelectorAll('.header-column .open-popup--btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelector('.popup-section').style.display = 'block';
            document.querySelector('.popup-section').classList.add('show-popup');
            sessionStorage.setItem('popupClosed', 'false');
        });
    });

    // Check popupClosed state and apply 'hide-popup' class accordingly
    if (sessionStorage.getItem('popupClosed') === 'true') {
        document.querySelector('.popup-section').classList.add('hide-popup');
    } else {
        document.querySelector('.popup-section').classList.remove('hide-popup');
    }
});
