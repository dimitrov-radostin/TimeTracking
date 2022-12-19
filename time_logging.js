let elements = document.getElementsByClassName("category")


document.getElementById('date').valueAsDate = new Date();


fetch("categories.json")
  .then(response => response.json())
  .then(data => {
        console.log(data)
        categories = Object.keys(data)

        if(elements.length > 1){
            alert("ela i me opravi")
        }else{
            // add select options for categories
            let original_select = elements[0]
            categories.forEach(category => {
                let opt = document.createElement('option');
                opt.value = category;
                opt.innerHTML = category;
                original_select.appendChild(opt);                
            });
        }

        let add_activity_button = document.getElementById("add_activity")
        let first_act = document.getElementById("first_act")
        let act_wrapper = document.getElementById("activities_wrapper")

        //  Activity button
        add_activity_button.addEventListener("click", event => {
            new_act = first_act.cloneNode(true)
            // TODO chnage datalist id
            console.log(document.querySelectorAll(".activity").length)
            new_act_id = "activity_" + (1 + document.querySelectorAll("input.activity").length)
            new_act.querySelector(".activity").setAttribute("list", new_act_id )
            new_act.querySelector(".activity_options").id=new_act_id 
            act_wrapper.appendChild(new_act)
        })


        // Change activity option based on selected category
        document.getElementById("activities_wrapper").addEventListener("change", event => {
            if(event.target.classList.contains("category")){
                let category_element = event.target
                console.log(category_element.value)
                let datalist = category_element.parentNode.querySelector("datalist.activity_options")
                data[category_element.value].forEach(option => {
                    console.log(option)
                    let newOption = document.createElement("OPTION")
                    newOption.setAttribute("value", option)
                    datalist.appendChild(newOption)
                })
            }
        })
})

document.querySelector("#submit").addEventListener("click", event=>{
    alert("hi")
    // check sth
    // collect and rearange data 
    
    // write data to local json file
})