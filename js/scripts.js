$(document).ready(function(){
  $("#appt").submit(function(event){
    event.preventDefault();
    const nameInput = $("input#name").val();
    const phoneInput = $("input#phone").val();
    const emailInput = $("input#email").val();
    const dateInput = $("input#date").val();
    const timeInput = $("input#time").val();
    // const apptTypeInput = $("select#appt-type").val();

    $(".name").text(nameInput);
    $(".phone").text(phoneInput);
    $(".email").text(emailInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);
    // $(".appt-type").text(apptTypeInput);

    $(".card#confirmation").show();
  });
});