(function() {
   var faqList = document.getElementById("js-faq");
   var elements = faqList.getElementsByClassName("faq-question");

   for (var i = 0, len = elements.length; i < len; i++) {
     elements[i].onclick = function () {
      // Get the child / sibling answer
      var faqAnswer = this.nextElementSibling;

      if (faqAnswer.style.display !== 'none') {
        faqAnswer.style.display = 'none';
      } else {
        faqAnswer.style.display = 'block';
      }
     }
   };

})();