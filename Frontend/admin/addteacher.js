let btn = document.getElementById("btn1")

btn.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log("test")
    let all_input = document.querySelectorAll(".add-form input")
   
    let obj={}
    for(let i=0;i<=all_input.length-1;i++){
     
      obj[all_input[i].id]=all_input[i].value
    }

    addDoctor(obj)
})

async function addDoctor(obj){
    try {
        console.log(obj)
       let adding_rqst=await fetch("https://skill-mentor.onrender.com/teacher/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
       })
       if(adding_rqst.ok){
        Swal.fire("Teacher Added Successfully")
       
        
    }

    } catch (error) {
        alert ("BAD REQUEST")
    }

   
}