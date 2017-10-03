$(document).ready(()=> {
  let rows = '2:3'
  $.get(url + id + prefix + rows + key)
  .then(data => data.values)
  .then(data => {
    let fileNames = data[0]
    let descriptions = data[1]
    fileNames.forEach((e,i,a) => {
      if (i!=0) {
        $('#photos-list').append(`
          <div class="card photo-card" style="width: 12rem;">
            <img id="myImg-${e}" class="card-img-top myImg" src="assets/images/${e}" alt="${e} ${descriptions[i]}">
            <div class="card-block">
              <p class="card-text">${descriptions[i]}</p>
            </div>
          </div>

          <!-- The Modal -->
          <div id="myModal-${e}" class="modal">

            <!-- The Close Button -->
            <span id="close-${e}" class="close" onclick="document.getElementById('myModal-${e}').style.display='none'">&times;</span>

            <!-- Modal Content (The Image) -->
            <img class="modal-content img" id="img-${e}" max-height="100%">

            <!-- Modal Caption (Image Text) -->
            <div class="caption" id="caption-${e}">${descriptions[i]}</div>
          </div>
          `)
          // Get the modal
          var modal = document.getElementById(`myModal-${e}`);

          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var img = document.getElementById(`myImg-${e}`);
          var modalImg = document.getElementById(`img-${e}`);
          img.onclick = function(){
              modal.style.display = "block";
              modalImg.src = this.src;
          }

          // Get the <span> element that closes the modal
          var span = document.getElementById(`close-${e}`);

          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
            modal.style.display = "none";
          }

      }
    })
  })
})
