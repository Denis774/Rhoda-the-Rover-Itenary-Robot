$(document).ready(function()
{
    $("#gettrips").click(function(){
        let firstname = $("#firstname").val();
        let surname = $("#surname").val();
        let email = $("#email").val();
        let startdate = $("#startdate").val();
        let enddate = $("#enddate").val();
        let people = $('option').closest('select').text();
        let fgender = $('input').closest('label').text();
        let mgender = $('input').closest('label').text();
        // let email = $("#email").val();
        // $("gettrips").trigger("reset");
        console.log(fgender);
        console.log(mgender);
        console.log(people);
        
});
// $('[name="fname"]').change(function() {
//     var fgender = $('input').closest('label').text();
//     alert(fgender);
// });
});