$(document).ready(()=> {
  let rows = '9:17'
  $.get(url + id + prefix + rows + key)
    .then((data)=>{
      console.log(data);
      let elders = data.values[6]
      let deacons = data.values[8]
      let teachers = data.values[3]
      let classNames = data.values[4];
      let staffNames = data.values[0]
      let staffRoles = data.values[1]

      elders.forEach((e,i) =>{
        if (i != 0) {
          $('#elders-list').append(`
            <li>${e}</li>
            `)
        }

        })
        deacons.forEach((e,i) => {
          if (i != 0) {
            $('#deacons-list').append(`
              <li>${e}</li>
              `)
          }
        })
        staffNames.forEach((e,i)=>{
          if (i!=0) {
            $('#staff').append(`
                <li><strong>${staffRoles[i]} - </strong> ${e}</li>
              `)
          }
        })


        teachers.forEach((e,i) => {
          if (i!=0) {
            $('#teachers').append(`
                <li><strong>${classNames[i]} - </strong>${e}</li>
              `)
          }
        })
    })
})
