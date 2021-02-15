

    $(document).ready(function(){
        $(".more").click(function(){
            $(".more-detail").css('display','block');
            $(".more").css('display','none');
        });
    });

  $(document).ready(function(){       
      var scroll_pos = 0;
      $(document).scroll(function() { 
          scroll_pos = $(this).scrollTop();
          if(scroll_pos >120) {
              $("header").css('position', 'fixed');
          } 
          else{
            $("header").css('position', 'relative');
          }
      });
  });

  $(document).ready(function(){
    $(".pic-edit").click(function(){
        $("#pic-edit-box").css('display','flex');
    });
    $(".edit-basic-detail").click(function(){
        $("#basic-info-user").css('display','flex');
    });
    $(".personal-detail-edit-icon").click(function(){
        $("#personal-detail-user").css('display','flex');
    });
    $(".add-new-language").click(function(){
        $("#add-language").css('display','flex');
    });
    $(".language-edit-icon").click(function(){
        $("#edit-language").css('display','flex');
    });
    $(".add-work-experience").click(function(){
        $("#add-work-experience").css('display','flex');
    });
    $(".edit-work-experience").click(function(){
        $("#edit-work-experience").css('display','flex');
    });
    $(".add-education").click(function(){
        $("#add-education").css('display','flex');
    });
    $(".edit-education").click(function(){
        $("#edit-education").css('display','flex');
    });
    $(".add-skill").click(function(){
        $("#add-skill").css('display','flex');
    });
    $(".edit-skill").click(function(){
        $("#edit-skill").css('display','flex');
    });
    $(".add-family-member").click(function(){
        $("#add-family-member").css('display','flex');
    });
    $(".edit-family-member").click(function(){
        $("#edit-family-member").css('display','flex');
    });
    $(".update-resume").click(function(){
        $("#update-resume").css('display','flex');
    });
    $(".create_job").click(function(){
        $("#create_job").css('display','flex');
    });
    $(".cancel").click(function(){
        $(".model").css('display','none');
    });
    $(".close").click(function(){
        $(".model").css('display','none');
    });
  });

  


  const input = document.getElementById('datepick');
  const datepicker = new TheDatepicker.Datepicker(input);
  datepicker.render();

  const input2 = document.getElementById('datepick_working_from');
  const datepicker2 = new TheDatepicker.Datepicker(input2);
  datepicker2.render();

  const input3 = document.getElementById('datepick_working_to');
  const datepicker3 = new TheDatepicker.Datepicker(input3);
  datepicker3.render();



    $(".input").focus(function(){
        $(this).parent().addClass("focus");
            }).blur(function(){
                if($(this).val() ===''){
                $(this).parent().removeClass("focus");
            }
    });
    var filledInputs = $('#mobile').on('click',function() {
        return !!this.value;
        }).length;
    console.log(filledInputs);


  $(function() {

    $('#profile').addClass('dragging').removeClass('dragging');
    });

    $('#profile').on('dragover', function() {
    $('#profile').addClass('dragging')
    }).on('dragleave', function() {
    $('#profile').removeClass('dragging')
    }).on('drop', function(e) {
    $('#profile').removeClass('dragging hasImage');
    
    if (e.originalEvent) {
      var file = e.originalEvent.dataTransfer.files[0];
      console.log(file);
    
      var reader = new FileReader();
    
      //attach event handlers here...
    
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        console.log(reader.result);
        $('#profile').css('background-image', 'url(' + reader.result + ')').addClass('hasImage');
    
      }
  
    }
    })
    $('#profile').on('click', function(e) {
        console.log('clicked')
        $('#file').click();
    });
    window.addEventListener("dragover", function(e) {
    e = e || event;
    e.preventDefault();
    }, false);
    window.addEventListener("drop", function(e) {
    e = e || event;
    e.preventDefault();
    }, false);
    $('#file').change(function(e) {
    
    var input = e.target;
    if (input.files && input.files[0]) {
      var file = input.files[0];
    
      var reader = new FileReader();
    
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        console.log(reader.result);
        $('#profile').css('background-image', 'url(' + reader.result + ')').addClass('hasImage');
      }
    }
    })