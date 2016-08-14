function randomQuote(){
var name = " ~Kanye West";  
$.get("https://yepi.io/api/quote",function(data){
	$("#currentquote").html(data + name);
  $("#tweet").attr("href", "http://twitter.com/home/?status=" + data +
          ' (' + name + ')');
});
}
$("button").click(function(){
	randomQuote();
});