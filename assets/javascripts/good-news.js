$(document).ready(()=>{
  let rows = '19:20'
  $.get(url + id + prefix + rows + key)
    .then(data => data.values)
    .then((goodNewsArchive)=> {
      goodNewsArchive[0].reverse().forEach((e,i,a) => {
        if (i!= a.length - 1) {
          $('#goodNewsArchiveList').append(`
              <li><a href="${goodNewsArchive[1][i]}">${e}</a></li>
            `)
        }
      })
    })
  let secondRows = '36:38'
  $.get(url + id + prefix + secondRows + key)
  .then(data=>data.values)
  .then((data) => {
    $('#good-news-header').append(`
        <h2>Good News - ${data[0][1]}</h2>
        <h3>${data[1][1]}</h3>
      `)
    let paragraphs = data[2]
    paragraphs.forEach((e,i) => {
      if (i!=0) {
        $('#good-news-body').append(`
          <p style="text-indent: 50px;">${e}</p>
          `)
      }
    })
  })
})
