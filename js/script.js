// $(function() {
// 	// $('#choose-existing').click(function() {
// 	// 	$('#homescreen').css('visibility','hidden');
// 	// 	$('#dashboard').css('visibility','visible');
// 	// })
// })

$(document).ready(function() {
    if(localStorage.getItem("airvalue") == null)
      localStorage.setItem("airvalue", 60);
    var airval = localStorage.getItem("airvalue");
    $('#airslider').slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: airval,
      slide: function( event, ui ) {
        $( "#amount1" ).val( ui.value );
      },
      stop: function( event, ui ){
        localStorage.setItem("airvalue", ui.value);
      }
    });
    $( "#amount1" ).val( $( "#airslider" ).slider( "value" ) );

    if(localStorage.getItem("tempvalue") == null)
      localStorage.setItem("tempvalue", 60);
    var tempval = localStorage.getItem("tempvalue");
    $('#tempslider').slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: tempval,
      slide: function( event, ui ) {
        $( "#amount1" ).val( ui.value );
      },
      stop: function( event, ui ){
        localStorage.setItem("tempvalue", ui.value);
      }
    });
    $( "#amount2" ).val( $( "#tempslider" ).slider( "value" ) );

    if(localStorage.getItem("volumevalue") == null)
      localStorage.setItem("volumevalue", 60);
    var volumeval = localStorage.getItem("volumevalue");
    $('#volumeslider').slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: volumeval,
      slide: function( event, ui ) {
        $( "#amount3" ).val( ui.value );
      },
      stop: function( event, ui ){
        localStorage.setItem("volumevalue", ui.value);
      }
    });
    $( "#amount3" ).val( $( "#volumeslider" ).slider( "value" ) );

    if(localStorage.getItem("orientationvalue") == null)
      localStorage.setItem("orientationvalue", 60);
    var orientationval = localStorage.getItem("orientationvalue");
    $('#orientationslider').slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: orientationval,
      slide: function( event, ui ) {
        $( "#amount4" ).val( ui.value );
      },
      stop: function( event, ui ){
        localStorage.setItem("orientationvalue", ui.value);
      }
    });
    $( "#amount4" ).val( $( "#orientationslider" ).slider( "value" ) );

    $("[name='entertainment']").bootstrapSwitch();
    $("[name='maintenance']").bootstrapSwitch();
    $("[name='routes']").bootstrapSwitch();
    $("[name='performance']").bootstrapSwitch();
    $("[name='climate']").bootstrapSwitch();

    //create local storage if there isn't one
    if(localStorage.getItem("local") == null){
      var setting = {
        entertainment:true,
        maintenance:false,
        routes:true,
        performance:false,
        climate:true
      };

      var entertainment = {
        current_setting:"CD",
        volume:50,
        orientation:75
      };

      var CD = {
        current_song:"Something Good",
        current_artist:"Alt-J"
      };

      var radio = {
        current_station:107.7
      };

      var bluetooth = {
        current_song:"Toxic",
        current_artist:"Britney Spears"
      };

      var climate = {
        air:50,
        temperature:75,
        direction:"head_only"
      };

      var maintenance = {
        gas:40,
        oil:22,
        wiper_fluid:87,
        tire_pressure:[99, 86, 54, 32]
      };

      var performance = {
        mph:48,
        avg_mph:27,
        miles:10205,
        this_trip:1004
      };

      var route1 = {
        name: "Begin Commute",
        time: "9:00",
        of_day: "AM",
        repeat: "Weekdays",
        type: "personal",
        active: true
      };

      var routes = [route1];

      var set = {setting:setting, entertainment:entertainment, CD:CD, radio:radio, bluetooth:bluetooth, climate:climate, maintenance:maintenance, performance:performance, routes:routes};

      localStorage.setItem("local", JSON.stringify(set));
    }
  });

  