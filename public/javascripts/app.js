$(document).ready(function(){
  console.log('jquery is loaded!');
  $('body').append('<div id="container"></div>');


  getCardData();


  function getCardData() {
    $.ajax({
      url:'http://mtgjson.com/json/BFZ-x.json',
      type:'get',
      success:function(data){
        console.log('fetching '+ data.name +' data');
        console.dir(data);

        data.cards.forEach(function(card){
          $('#container').append('<img class="card" id="'+card.name+'" src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid='+card.multiverseid+'&type=card">');
        });

        $('.card').click(function(){
          console.log(this.id);
        });
      

      },
      error:function(err){
        console.log(err);
      }
    });
  }

});
