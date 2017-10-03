$(document).ready(()=>{
  let rows = '41:42'
  $.get(url + id + prefix + rows + key)
    .then(data => data.values)
    .then((data) => {
      let ministries = data[0];
      let communityOutreach = data[1];

        ministries.forEach((e,i) => {
          if (i!=0) {
            $('#ministries-list').append(`
                <li>${e}</li>
              `)
          }
        })
        communityOutreach.forEach((e,i) => {
          if (i!=0) {
            $('#community-outreach-list').append(`
                <li>${e}</li>
              `)
          }
        })
    })
})
