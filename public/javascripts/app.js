$(document).ready(function(){
  console.log('jquery is loaded!');

  getCardData();

  function getCardData() {
    $.ajax({
      url:'http://mtgjson.com/json/BFZ-x.json',
      type:'get',
      success:function(data){
        console.log('fetching '+ data.name +' data');
        console.dir(data);

        data.cards.forEach(function(card){
          console.log(card.name);
        });

      },
      error:function(err){
        console.log(err);
      }
    });
  }
  
});
