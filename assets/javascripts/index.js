$(document).ready(()=>{
  let rows = '6:7'
  $.get(url + id + prefix + rows + key)
    .then((data)=> {
      let interval = 2
      let links = data.values[0];
      let descs = data.values[1];
      $('#main-page-photo').append(`
          <img class="gallery-photo" src="assets/images/${links[1]}" alt="${descs[1]}" height="550px" width="100%">
      `)
      setInterval(function(){
      $('.gallery-photo').fadeOut(400, function(){
        $('#main-page-photo').empty()
        $(`#main-page-photo`).append(`
            <img class="gallery-photo" src="assets/images/${links[interval]}" alt="${descs[interval]}" height="550px" width="100%">
        `);
        $(`.gallery-photo`).fadeIn(400)
        if (interval == data.length - 1) {
          interval = 1
        } else {
          interval++
        }
      });
    }, 3000)
  })
})

$('#index-expect-link').click(()=>{
  location.href = '/faq.html';
})
