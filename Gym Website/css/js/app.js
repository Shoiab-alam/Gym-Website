$('.slide_2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });



  $('.slides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });


  $(document).ready(function(){
    $('#for_names').hide();
    $('#for_email').hide();
    $('#for_contact').hide();


      var name_err = true;
      var email_err = true;
      var contact_err = true;


      //name
      $('#name').keyup(function(){
        name_check();
      });
      function name_check(){
        var name = $('#name').val();

        if(name == ''){
          $('#for_names').show();
          $('#for_names').html('**please Fill Your Name');
          $('#for_names').css('color','black');
          $('#for_names').focus();
          name_err :false;
          return false;
        }else {
          $('#for_names').hide();
        }


        if(name.length < 5 || name.length > 25){
          $('#for_names').show();
          $('#for_names').html('**user name must be filled bet 5 to 25');
          $('#for_names').css('color','black');
          $('#for_names').focus();
          name_err :false;
          return false;
        }else {
          $('#for_names').hide();
        } 
      }; //name

      //email

      $('#email').keyup(function(){
        email_check();
      });
      function email_check(){
        var email = $('#email').val();

        if(email == ''){
          $('#for_email').show();
          $('#for_email').html('**please Fill Your email');
          $('#for_email').css('color','black');
          $('#for_email').focus();
          email_err :false;
          return false;
        }else {
          $('#for_email').hide();
        }


        if(email.length < 5 || email.length > 25){
          $('#for_email').show();
          $('#for_email').html('**user must be fill @');
          $('#for_email').css('color','black');
          $('#for_email').focus();
          email_err :false;
          return false;
        }else {
          $('#for_email').hide();
        }
      };
      //email

      //contact
      $('#contact').keyup(function(){
        contact_check();
      });
      function contact_check(){
        var contact = $('#contact').val();

        if(contact == ''){
          $('#for_contact').show();
          $('#for_contact').html('**please Fill Your contact');
          $('#for_contact').css('color','black');
          $('#for_contact').focus();
          contact_err :false;
          return false;
        }else {
          $('#for_contact').hide();
        }


        if(contact.length < 5 || contact.length > 25){
          $('#for_contact').show();
          $('#for_contact').html('**user must be filed bet 5 to 20');
          $('#for_contact').css('color','black');
          $('#for_contact').focus();
          contact_err :false;
          return false;
        }else {
          $('#for_contact').hide();
        }
      };

      $('button').click(function(){
          var name_err = true;
          var email_err = true;
          var contact_err = true;

          name_check();
          email_check();
          contact_check();

          if((name_err == true) && (email_err == true) && (contact_err == true)){
            
              return true;
              
          }else {
           
            return false;
            
          }

      })
      
  })