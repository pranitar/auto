// $(function() {
// 	// $('#choose-existing').click(function() {
// 	// 	$('#homescreen').css('visibility','hidden');
// 	// 	$('#dashboard').css('visibility','visible');
// 	// })
// })

$(document).ready(function() {
    $('#airslider').slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        $( "#amount1" ).val( ui.value );
      }
    });
    $( "#amount1" ).val( $( "#airslider" ).slider( "value" ) );

    $('#tempslider').slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        $( "#amount2" ).val( ui.value );
      }
    });
    $( "#amount2" ).val( $( "#tempslider" ).slider( "value" ) );

    $('#volumeslider').slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        $( "#amount3" ).val( ui.value );
      }
    });
    $( "#amount3" ).val( $( "#volumeslider" ).slider( "value" ) );

    $('#orientationslider').slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        $( "#amount4" ).val( ui.value );
      }
    });
    $( "#amount4" ).val( $( "#orientationslider" ).slider( "value" ) );

    $("[name='entertainment']").bootstrapSwitch();
    $("[name='maintenance']").bootstrapSwitch();
    $("[name='routes']").bootstrapSwitch();
    $("[name='performance']").bootstrapSwitch();
    $("[name='climate']").bootstrapSwitch();
  });

  