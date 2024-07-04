


    // Webflow.push(function () {
    //   if (!Webflow.env("editor")) {
    //     function normal(input) {
    //       if (
    //         window.location.href.indexOf("/inbound-call-center/") > -1 ||
    //         window.location.href.indexOf("/outbound-call-center/") > -1 ||
    //         window.location.href.indexOf("/industries/") > -1 ||
    //         window.location.href.indexOf("/contact-us") > -1 ||
    //         window.location.href.indexOf("/calculator") > -1 ||
    //         window.location.href.indexOf("/pricing") > -1
    //       ) {
    //         input.css({
    //           "border-color": "#D1D1D1",
    //           color: "#535353",
    //         });
    //       } else {
    //         if (input.hasClass("contact__input_hero")) {
    //           input.css({
    //             "border-color": "#D1D1D1",
    //             color: "#535353",
    //           });
    //         } else {
    //           input.css({
    //             "border-color": "#D1D1D1",
    //             color: "#fff",
    //           });
    //         }
    //       }
    //       input.siblings(".form-err-msg").slideUp();
    //     }

    //     function focus(input) {
    //       if (
    //         window.location.href.indexOf("/inbound-call-center/") > -1 ||
    //         window.location.href.indexOf("/outbound-call-center/") > -1 ||
    //         window.location.href.indexOf("/industries/") > -1 ||
    //         window.location.href.indexOf("/contact-us") > -1 ||
    //         window.location.href.indexOf("/calculator") > -1 ||
    //         window.location.href.indexOf("/pricing") > -1
    //       ) {
    //         input.css({
    //           "border-color": "#535353",
    //           color: "#535353",
    //         });
    //       } else {
    //         if (input.hasClass("contact__input_hero")) {
    //           input.css({
    //             "border-color": "#535353",
    //             color: "#535353",
    //           });
    //         } else {
    //           input.css({
    //             "border-color": "#fff",
    //             color: "#fff",
    //           });
    //         }
    //       }
    //       input.siblings(".form-err-msg").slideUp();
    //     }

    //     function success(input) {
    //       if (
    //         window.location.href.indexOf("/inbound-call-center/") > -1 ||
    //         window.location.href.indexOf("/outbound-call-center/") > -1 ||
    //         window.location.href.indexOf("/industries/") > -1 ||
    //         window.location.href.indexOf("/contact-us") > -1 ||
    //         window.location.href.indexOf("/calculator") > -1 ||
    //         window.location.href.indexOf("/pricing") > -1
    //       ) {
    //         input.css({
    //           "border-color": "#535353",
    //           color: "#535353",
    //         });
    //       } else {
    //         if (input.hasClass("contact__input_hero")) {
    //           input.css({
    //             "border-color": "#535353",
    //             color: "#535353",
    //           });
    //         } else {
    //           input.css({
    //             "border-color": "#fff",
    //             color: "#fff",
    //           });
    //         }
    //       }
    //       input.siblings(".form-err-msg").slideUp();
    //     }
    //     function invalid(input) {
    //       if (
    //         window.location.href.indexOf("/inbound-call-center/") > -1 ||
    //         window.location.href.indexOf("/outbound-call-center/") > -1 ||
    //         window.location.href.indexOf("/industries/") > -1 ||
    //         window.location.href.indexOf("/contact-us") > -1 ||
    //         window.location.href.indexOf("/calculator") > -1 ||
    //         window.location.href.indexOf("/pricing") > -1
    //       ) {
    //         input.css({
    //           "border-color": "#DE1414",
    //            color: "#535353",
    //         });
    //       } else {
    //         if (input.hasClass("contact__input_hero")) {
    //           input.css({
    //             "border-color": "#DE1414",
    //             color: "#535353",
    //           });
    //         } else {
    //           input.css({
    //             "border-color": "#ffc700",
    //             color: "#fff",
    //           });
    //         }
    //       }
    //       input.siblings(".form-err-msg").slideDown();
    //     }
    //     let mainForm = $("#contact-form");
    //     let heroForm = $("#contact-form-hero");
    //     let calculator = $("#services-form");
    //     // focus
    //     function getFocus(form) {
    //       $("input", form)
    //         .not('input[type="submit"]')
    //         .on("focus", function () {
    //         focus($(this));
    //       });
    //       $("textarea", form)
    //         .not('input[type="submit"]')
    //         .on("focus", function () {
    //         focus($(this));
    //       });
    //     }
    //     getFocus(mainForm);
    //     getFocus(heroForm);
    //     getFocus(calculator);
    //     // required fields validator + textarea
    //     function changeReqInput(form) {
    //       $("textarea", form).on("blur", function () {
    //         if ($(this).val().length > 0) {
    //           success($(this));
    //         } else {
    //           normal($(this));
    //         }
    //       });
    //       $("input", form)
    //         .not('input[type="tel"]', 'input[type="email"]')
    //         .on("blur", function () {
    //         if ($(this).val().length > 0) {
    //           success($(this));
    //         } else {
    //           normal($(this));
    //         }
    //       });
    //     }
    //     changeReqInput(mainForm);
    //     changeReqInput(heroForm);
    //     changeReqInput(calculator);
    //     // phone validator
    //     (function () {
    //      const telInputs = document.querySelectorAll('input[type="tel"]');


    //      telInputs.forEach(input => {
    //          input.removeAttribute('minlength');
    //          input.setAttribute('maxlength', '50');
    //      });
    //       const enforceFormat = (event) => {
    //          const input = event.target;
    //          const maskValue = input.inputmask?.unmaskedvalue(); 
    //          if (maskValue) { 
    //            event.preventDefault();
    //          }
    //       };
    //       const formatToPhone = (event) => {
    //         if (isModifierKey(event)) {
    //           return;
    //         }

    //       };
    //       $("input[type='tel']").on("keydown", enforceFormat);
    //       $("input[type='tel']").on("keyup", formatToPhone);
    //       $("input[type='tel']").on("paste", function (event) {
    //         if (
    //           event.originalEvent.clipboardData.getData("Text").match(/[^\d]/)
    //         ) {
    //           event.preventDefault();
    //         }
    //       });
    //     })();
    //     let invalidPhone = true;
    //     $('input[type="tel"]').on("input", function () {
    //       if (this.validity.tooShort) {
    //         invalidPhone = true;
    //         this.setCustomValidity("Phone is invalid");
    //       } else {
    //         invalidPhone = false;
    //         this.setCustomValidity("");
    //       }
    //     });
    //     function changePhone(form) {
    //       $('input[type="tel"]', form).on("blur", function () {
    //         if ($(this).val().length == 0) {
    //           normal($(this));
    //         } else if (invalidPhone) {
    //           invalid($(this));
    //         } else {
    //           success($(this));
    //         }
    //       });
    //     }
    //     changePhone(mainForm);
    //     changePhone(heroForm);
    //     changePhone(calculator);
    //     //Email validator



    //     function validateEmail(email) {
    //       var re =
    //           /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //       return re.test(String(email).toLowerCase());
    //     }


    //    function changeEmail(form) {
    //      $('input[type="email"]', form).on("blur", function (event) {
    //        const email = $('input[type="email"]', form);
    //        if (!validateEmail(email.val()) && email.val().length > 0) {
    //          invalid(email);
    //        } else if (email.val().length == 0) {
    //          normal(email);
    //        } else {
    //          success(email);
    //        }
    //      });
    //    }

    //     changeEmail(mainForm);
    //     changeEmail(heroForm);
    //     changeEmail(calculator);
    //     $("select").on("change", function () {
    //       if ($(this).val().length > 0) {
    //         success($(this));
    //       }
    //       if ($(this).val().length === 0) {
    //         normal($(this));
    //       }
    //     });
    //     // submit form-->
    //     function submitForm(form) {
    //       $('input[type="submit"]', form).on("click", function (event) {
    //         let arrInputs = $("input[required]", form).not(
    //           'input[type="submit"]',
    //           'input[type="tel"]',
    //           'input[type="email"]'
    //         );
    //         let success = true;

    //         arrInputs.each(function () {
    //           if ($(this).val().length == 0) {
    //             event.preventDefault();
    //             invalid($(this));
    //             success = false;
    //           }
    //         });
    //         if ($('input[type="tel"]', form).val().length == 0 || invalidPhone) {
    //           event.preventDefault();
    //           invalid($('input[type="tel"]', form));
    //           success = false;
    //         }
    //         if (!validateEmail($('input[type="email"]', form).val())) {
    //           event.preventDefault();
    //           if (
    //             !$('input[type="email"]', form).siblings(".form-err-msg").hidden
    //           ) {
    //             invalid($('input[type="email"]', form));
    //             success = false;
    //           }
    //         }
    //       });
    //     }
    //     submitForm(mainForm);
    //     submitForm(heroForm);
    //     submitForm(calculator);
    //   }
    // });
