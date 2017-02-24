$(function() {
  $('.karusel').karuselfn({visiblePart: 5});
  $('.karusel2').karuselfn({visiblePart: 3});
});

// Demo data.
$(function(){
var data_Object = {
    members: [
        {h1:"КУЦЕНКО АЛЕКСАНДР ПЕТРОВИЧ", img:'.\\img\\my_portrait_200x200_red.png', p: "Cтудент GoIT Front-end7"},
        {h1:"ИВАНОВ ИВАН ИВАНОВИЧ", img:'.\\img\\my_portrait_200x200_green.png', p: "Cтудент заборостроительного университета"},
        {h1:"КОЗЛОВ СЕРГЕЙ ПЕТРОВИЧ", img:'.\\img\\my_portrait_200x200_red.png', p: "Cтудент GoIT Front-end7"},
        {h1:"ИВАНОВ ИВАН ИВАНОВИЧ", img:'.\\img\\my_portrait_200x200_green.png', p: "Cтудент заборостроительного университета"},
        {h1:"КУЦЕНКО АЛЕКСАНДР ПЕТРОВИЧ", img:'.\\img\\my_portrait_200x200_red.png', p: "Cтудент GoIT Front-end7"},
        {h1:"СИДОРОВ СЕМЕН ИВАНОВИЧ", img:'.\\img\\my_portrait_200x200_green.png', p: "Cтудент заборостроительного университета"},
        {h1:"КУЦЕНКО АЛЕКСАНДР ПЕТРОВИЧ", img:'.\\img\\my_portrait_200x200_red.png', p: "Cтудент GoIT Front-end7"},
        {h1:"ПЕТРОВ ПЕТР ИВАНОВИЧ", img:'.\\img\\my_portrait_200x200_green.png', p: "Cтудент заборостроительного университета"},
        {h1:"КОЗЛОВ СЕРГЕЙ ПЕТРОВИЧ", img:'.\\img\\my_portrait_200x200_red.png', p: "Cтудент GoIT Front-end7"},
        {h1:"ИВАНОВ ИВАН ИВАНОВИЧ", img:'.\\img\\my_portrait_200x200_green.png', p: "Cтудент заборостроительного университета"}
    ]
};
  // console.log("data_Object 1", data_Object.members[0]);
  // debugger;


  var results = document.getElementById("results");
  // console.log("T-M-P-L: ", tmpl("item_tmpl", data_Object));
  results.innerHTML = tmpl("item_tmpl", data_Object);
  console.log("results: ", results);
});
