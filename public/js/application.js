// $(document).ready(function() {

//   $('form').on("submit", function (event) {
//     event.preventDefault();
//     var destination = "http://api.ocrapiservice.com/1.0/rest/ocr";
//     var fd = new FormData();
//     fd.append('image', image);
//     fd.append('language', language);
//     fd.append('apikey', apikey);
//     var ajaxRequest = $.ajax({
//       method: 'POST',
//       processData: false,
//       contentType: false,
//       url: destination,
//       data: fd
//     });
//     ajaxRequest.done(function( OCRtext ) {
//       $("#converted-text").append(OCRtext);
//     });
//   });


// });
