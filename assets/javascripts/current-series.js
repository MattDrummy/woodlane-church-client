$(document).ready(()=>{
  let rows = '23:27'
  $.get(url + id + prefix + rows + key)
    .then(data=>data.values)
    .then(data => {
      let dates = data[0];
      let titles = data[1];
      let sermonLinks = data[2];
      let scriptures = data[3];
      let scriptureLinks = data[4];
      dates.forEach((e,i) => {
      if (i!=0) {
        if (scriptureLinks[i] != "") {
          $('#worship-schedule-table').append(`
            <tr>
              <td>${e}</td>
              <td><a href="${sermonLinks[i]}">${titles[i]}</a></td>
              <td><a href=${scriptureLinks[i]}>${scriptures[i]}</a></td>
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
