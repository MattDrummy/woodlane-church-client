$(document).ready(()=>{
  let rows = '22:27'
  $.get(url + id + prefix + rows + key)
    .then(data=>data.values)
    .then(data => {
      let dates = data[1];
      let titles = data[2];
      let sermonLinks = data[3];
      let scriptures = data[4];
      let scriptureLinks = data[5];
      $('#current-series-title').append(`
        <h3>${data[0][1]}</h3>
        <p>${data[0][2]}</p>
        <img src="assets/images/current-series-image.jpg" alt="">
        `)
      dates.forEach((e,i) => {
      if (i!=0) {
        if (scriptureLinks[i] != "") {
          $('#worship-schedule-table').append(`
            <tr>
              <td>${e}</td>
              <td><a href="${sermonLinks[i]}">${titles[i]}</a></td>
              <td><a class="rtBibleRef" href="${scriptureLinks[i]}" data-reference="${scriptures[i]}" data-version="niv" data-purpose="bible-reference" target="_blank">${scriptures[i]}</a></td>
            </tr>
            `)
        } else {
          $('#worship-schedule-table').append(`
            <tr>
              <td>${e}</td>
              <td><a href="${sermonLinks[i]}">${titles[i]}</a></td>
              <td>${scriptures[i]}</td>
            </tr>
            `)
        }
      }
    })
  })
  let memoryVerseRows = '30:33'
  $.get(url + id + prefix + memoryVerseRows + key)
  .then(data => data.values)
  .then(data => {
    console.log(data);
    $('#weekly-memory-verse').append(`
      <a href="${data[0][2]}">${data[0][1]}</a>
      <p>${data[0][0]}</p>
      `)
    let questions = data[3]
    questions.forEach((e,i)=>{
      $('#making-you-think-questions').append(`
        <li>${e}</li>
        `)
    })
  })
})
