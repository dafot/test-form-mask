


   Webflow.push(function () {
     if (!Webflow.env("editor")) {
       function normal(input) {
         if (
           window.location.href.indexOf("/inbound-call-center/") > -1 ||
           window.location.href.indexOf("/outbound-call-center/") > -1 ||
           window.location.href.indexOf("/industries/") > -1 ||
           window.location.href.indexOf("/contact-us") > -1 ||
           window.location.href.indexOf("/calculator") > -1 ||
           window.location.href.indexOf("/pricing") > -1
         ) {
           input.css({
             "border-color": "#D1D1D1",
             color: "#535353",
           });
         } else {
           if (input.hasClass("contact__input_hero")) {
             input.css({
               "border-color": "#D1D1D1",
               color: "#535353",
             });
           } else {
             input.css({
               "border-color": "#D1D1D1",
               color: "#fff",
             });
           }
         }
         input.siblings(".form-err-msg").slideUp();
       }

       function focus(input) {
         if (
           window.location.href.indexOf("/inbound-call-center/") > -1 ||
           window.location.href.indexOf("/outbound-call-center/") > -1 ||
           window.location.href.indexOf("/industries/") > -1 ||
           window.location.href.indexOf("/contact-us") > -1 ||
           window.location.href.indexOf("/calculator") > -1 ||
           window.location.href.indexOf("/pricing") > -1
         ) {
           input.css({
             "border-color": "#535353",
             color: "#535353",
           });
         } else {
           if (input.hasClass("contact__input_hero")) {
             input.css({
               "border-color": "#535353",
               color: "#535353",
             });
           } else {
             input.css({
               "border-color": "#fff",
               color: "#fff",
             });
           }
         }
         input.siblings(".form-err-msg").slideUp();
       }

       function success(input) {
         if (
           window.location.href.indexOf("/inbound-call-center/") > -1 ||
           window.location.href.indexOf("/outbound-call-center/") > -1 ||
           window.location.href.indexOf("/industries/") > -1 ||
           window.location.href.indexOf("/contact-us") > -1 ||
           window.location.href.indexOf("/calculator") > -1 ||
           window.location.href.indexOf("/pricing") > -1
         ) {
           input.css({
             "border-color": "#535353",
             color: "#535353",
           });
         } else {
           if (input.hasClass("contact__input_hero")) {
             input.css({
               "border-color": "#535353",
               color: "#535353",
             });
           } else {
             input.css({
               "border-color": "#fff",
               color: "#fff",
             });
           }
         }
         input.siblings(".form-err-msg").slideUp();
       }
       function invalid(input) {
         if (
           window.location.href.indexOf("/inbound-call-center/") > -1 ||
           window.location.href.indexOf("/outbound-call-center/") > -1 ||
           window.location.href.indexOf("/industries/") > -1 ||
           window.location.href.indexOf("/contact-us") > -1 ||
           window.location.href.indexOf("/calculator") > -1 ||
           window.location.href.indexOf("/pricing") > -1
         ) {
           input.css({
             "border-color": "#DE1414",
             color: "#535353",
           });
         } else {
           if (input.hasClass("contact__input_hero")) {
             input.css({
               "border-color": "#DE1414",
               color: "#535353",
             });
           } else {
             input.css({
               "border-color": "#ffc700",
               color: "#fff",
             });
           }
         }
         input.siblings(".form-err-msg").slideDown();
       }
       let mainForm = $("#contact-form");
       let heroForm = $("#contact-form-hero");
       let calculator = $("#services-form");
       // focus
       function getFocus(form) {
         $("input", form)
           .not('input[type="submit"]')
           .on("focus", function () {
           focus($(this));
         });
         $("textarea", form)
           .not('input[type="submit"]')
           .on("focus", function () {
           focus($(this));
         });
       }
       getFocus(mainForm);
       getFocus(heroForm);
       getFocus(calculator);
       // required fields validator + textarea
       function changeReqInput(form) {
         $("textarea", form).on("blur", function () {
           if ($(this).val().length > 0) {
             success($(this));
           } else {
             normal($(this));
           }
         });
         $("input", form)
           .not('input[type="tel"]', 'input[type="email"]')
           .on("blur", function () {
           if ($(this).val().length > 0) {
             success($(this));
           } else {
             normal($(this));
           }
         });
       }
       changeReqInput(mainForm);
       changeReqInput(heroForm);
       changeReqInput(calculator);
       // phone validator
       (function () {
         const isNumericInput = (event) => {
           const key = event.keyCode;
           return (key >= 48 && key <= 57) || (key >= 96 && key <= 105);
         };
         const isModifierKey = (event) => {
           const key = event.keyCode;
           return (
             event.shiftKey === true ||
             key === 35 ||
             key === 36 ||
             key === 8 ||
             key === 9 ||
             key === 13 ||
             key === 46 ||
             (key > 36 && key < 41) ||
             ((event.ctrlKey === true || event.metaKey === true) &&
              (key === 65 ||
               key === 67 ||
               key === 86 ||
               key === 88 ||
               key === 90))
           );
         };
         const enforceFormat = (event) => {
           if (!isNumericInput(event) && !isModifierKey(event)) {
             event.preventDefault();
           }
         };
         const formatToPhone = (event) => {
           if (isModifierKey(event)) {
             return;
           }
           const element = event.target;
           const maskOptions ={
            mask: [
              {
                mask: '+1 (000) 000-0000',
                startsWith: '1' || '+1',
                lazy: false,
                country: 'USA, Canada'
              },      
              {
                mask: '+00 (0) 0000-0000',
                startsWith: '61' || '61',
                lazy: false,
                country: 'Australia'
              },
              {
                mask: '+44 (00) 0000-0000',
                startsWith: '44' || '+44',
                lazy: false,
                country: 'The Great Britian'
              },
              {
                mask: '+64 (00) 0000-0000',
                startsWith: '64' || '+64',
                lazy: false,
                country: 'new Zealand'
              },
              {
                mask: '+353 (00) 000-0000',
                startsWith: '353' || '+353',
                lazy: false,
                country: 'Ireland'
              },
              {
                mask: '+27 (00) 000-0000',
                startsWith: '27' || '+27',
                lazy: false,
                country: 'South Africa'
              },
              {
                mask: '+91 (00) 0000-0000',
                startsWith: '91' || '+91',
                lazy: false,
                country: 'India'
              },
              {
                mask: '+65 0000-0000',
                startsWith: '65' || '+65',
                lazy: false,
                country: 'Singapore'
              },
              {
                mask: '+60 (0) 0000-0000',
                startsWith: '60' || '+60',
                lazy: false,
                country: 'Singapore'
              },        
              {
                mask: '0000000000000',
                startsWith: '',
                country: 'unknown'
              }   
            ],
            dispatch: (appended, dynamicMasked) => {
              const number = (dynamicMasked.value + appended).replace(/\D/g,'');
          
              return dynamicMasked.compiledMasks.find(m => number.indexOf(m.startsWith) === 0);
            }
          }
          const mask = IMask(element, maskOptions)
        
         };
         $("input[type='tel']").on("keydown", enforceFormat);
         $("input[type='tel']").on("keyup", formatToPhone);
         $("input[type='tel']").on("paste", function (event) {
           if (
             event.originalEvent.clipboardData.getData("Text").match(/[^\d]/)
           ) {
             event.preventDefault();
           }
         });
       })();
       let invalidPhone = true;
       $('input[type="tel"]').on("input", function () {
         if (this.validity.tooShort) {
           invalidPhone = true;
           this.setCustomValidity("Phone is invalid");
         } else {
           invalidPhone = false;
           this.setCustomValidity("");
         }
       });
       function changePhone(form) {
         $('input[type="tel"]', form).on("blur", function () {
           if ($(this).val().length == 0) {
             normal($(this));
           } else if (invalidPhone) {
             invalid($(this));
           } else {
             success($(this));
           }
         });
       }
       changePhone(mainForm);
       changePhone(heroForm);
       changePhone(calculator);
       //Email validator



//       function validateEmail(email) {
//         var re =
//             /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//         return re.test(String(email).toLowerCase());
//       }


//       function changeEmail(form) {
//         $('input[type="email"]', form).on("blur", function (event) {
//           const email = $('input[type="email"]', form);
//           if (!validateEmail(email.val()) && email.val().length > 0) {
//             invalid(email);
//           } else if (email.val().length == 0) {
//             normal(email);
//           } else {
//             success(email);
//           }
//         });
//       }

//       changeEmail(mainForm);
//       changeEmail(heroForm);
//       changeEmail(calculator);
//       $("select").on("change", function () {
//         if ($(this).val().length > 0) {
//           success($(this));
//         }
//         if ($(this).val().length === 0) {
//           normal($(this));
//         }
//       });
//       // submit form-->
//       function submitForm(form) {
//         $('input[type="submit"]', form).on("click", function (event) {
//           let arrInputs = $("input[required]", form).not(
//             'input[type="submit"]',
//             'input[type="tel"]',
//             'input[type="email"]'
//           );
//           let success = true;

//           arrInputs.each(function () {
//             if ($(this).val().length == 0) {
//               event.preventDefault();
//               invalid($(this));
//               success = false;
//             }
//           });
//           if ($('input[type="tel"]', form).val().length == 0 || invalidPhone) {
//             event.preventDefault();
//             invalid($('input[type="tel"]', form));
//             success = false;
//           }
//           if (!validateEmail($('input[type="email"]', form).val())) {
//             event.preventDefault();
//             if (
//               !$('input[type="email"]', form).siblings(".form-err-msg").hidden
//             ) {
//               invalid($('input[type="email"]', form));
//               success = false;
//             }
//           }
//         });
//       }
//       submitForm(mainForm);
//       submitForm(heroForm);
//       submitForm(calculator);
//     }
//   });
