document.querySelectorAll('.cardinplay').forEach(function(el){
  el.addEventListener('click', function() {
    alert(this.id);
  });
});