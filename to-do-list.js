
   let okbutton = document.getElementById("ok")
   let table = document.getElementById("tablebody")
   let tasknb = 0
   let donetasknb = 0
   let nbtask = document.getElementById("tasknb")
   let nbdonetask = document.getElementById("donetasknb")
   let ajoutcat = document.getElementById("ajout-categorie-ok")
   let newcat = document.getElementById("ajout-categorie")
   let cat = document.getElementById("categorie")
   nbtask.innerHTML = tasknb
    nbdonetask.innerHTML = donetasknb

ajoutcat.addEventListener('click', function() {

    var newoption = document.createElement("option")
    console.log(newcat.value)
    newoption.innerHTML = newcat.value
    cat.appendChild(newoption)
})

okbutton.addEventListener('click', function() {
 
    tasknb++
    nbtask.innerHTML = tasknb
    nbdonetask.innerHTML = donetasknb
    let task = document.getElementById("tache").value
    let tasktype = document.getElementById("categorie").value

    console.log(task)
    console.log(tasktype)

    var newtr = document.createElement("tr")
    newtr.setAttribute("id", task)
    newtr.setAttribute("draggable", true)
    newtr.classList.add(tasktype)
    newtr.classList.add("trow")
    tablebody.prepend(newtr)

    var newtd1 = document.createElement("td")
    newtr.appendChild(newtd1)
    newtd1.innerHTML = task

    
    var newtd2 = document.createElement("td")
    newtr.appendChild(newtd2)
    newtd2.innerHTML = tasktype
    
    var newtd3 = document.createElement("td")
    newtr.appendChild(newtd3)
 
    var newtodobutton = document.createElement("input")
    newtodobutton.setAttribute("type", "button")
    newtodobutton.setAttribute("value", "A faire")
    newtd3.appendChild(newtodobutton)

    var newdonebutton = document.createElement("input")
    newdonebutton.setAttribute("type", "button")
    newdonebutton.setAttribute("value", "En cours")
    newtd3.appendChild(newdonebutton)
    
    var newtd4 = document.createElement("td")
    newtr.appendChild(newtd4)
    
    var newdeletebutton = document.createElement("input")
    newdeletebutton.setAttribute("type", "checkbox")
    newtd4.appendChild(newdeletebutton)

    
    
    newdeletebutton.addEventListener('click', function() {
        let targettr = document.getElementById(task)
        targettr.style.display = "none"
        tasknb--
        donetasknb++
        nbtask.innerHTML = tasknb
        nbdonetask.innerHTML = donetasknb
    })

    newtodobutton.addEventListener('click', function() {
        let targettr = document.getElementById(task)
        targettr.style.backgroundColor = "orange"
    })

    newdonebutton.addEventListener('click', function() {
        let targettr = document.getElementById(task)
        targettr.style.backgroundColor = "lime"
    })
})

