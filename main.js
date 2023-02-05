let elements = document.getElementsByClassName("category")


document.getElementById('date').valueAsDate = new Date();


fetch("categories.json")
  .then(response => response.json())
  .then(data => {
        console.log(data)
        categories = Object.keys(data)

        if(elements.length > 1){
            alert("fix me")
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


        //  Add activity 
        add_activity_button.addEventListener("click", event => {

            new_entry = first_act.cloneNode(true)
            // change id

            total_activities =  (1 + document.querySelectorAll("input.activity").length) 
            new_entry.id = total_activities
            new_entry.querySelector(".activity").setAttribute("list", "activity_" + total_activities )
            new_entry.querySelector(".activity_options").id = "activity_" + total_activities 

            // set times 
            let last_act = document.getElementsByClassName("entry").item(total_activities - 2)
            let last_act_end_time = last_act.querySelector(".end_time").value

            // just add 5 min to start to make the end
            let [hour, minutes] = last_act_end_time.split(/\:/g)
            new_entry.querySelector(".start_time").value = last_act_end_time
            d = new Date
            d.setHours(hour, minutes)
            d2 = new Date(d.getTime() + 5*60000)      

            new_entry.querySelector(".end_time").value = [d2.getHours(), d2.getMinutes()].map(v => v < 10 ? "0" + v : v).join(":")
            
            
            act_wrapper.appendChild(new_entry)
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