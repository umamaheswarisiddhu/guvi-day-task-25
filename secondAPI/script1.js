function collectiondata(){
    fetch("https://www.asterank.com/api/mpc ").then(response=>{
      console.log(response)
        if (!response.ok){
            throw Error("error")
        }
      return response.json()
    }).then(data => {
        const objects = data.map(d=>{
            return `<div class="edit"><p>
            RMS : ${d.rms} <br> EPOCH : ${d.epoch} <br> READABLE : ${d.readable_des} <br>
            H : ${d.H} <br> NUM : ${d.num_obs} <br>
            REF : ${d.ref} <br> LAST : ${d.last_obs} <br>
            COMP : ${d.comp} <br> E : ${d.e} <br>
            A : ${d.a} <br> OM : ${d.om} <br>
            P : ${d.pert_p} <br> D : ${d.d} <br>
            I : ${d.i} <br> DES : ${d.des} <br>
            FLAGS : ${d.flags} <br> NUM_OPP : ${d.num_opp} <br>
            PERT : ${d.pert_c} <br> W : ${d.w}
            </p></div>` 
        }).join("")
        document.querySelector("#datas")
        .insertAdjacentHTML('afterbegin',objects)
    }).catch(error =>{
        console.log(error)
    })
  }
  collectiondata() 