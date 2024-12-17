// options date nasc 
function generatSelectionOptions(min, max, locate) {
  let select = document.getElementById(locate) 
  for (let i = min; i <= max; i++) {
    let option = document.createElement("option")
    option.value = i
    option.textContent = i
    select.appendChild(option)
  }
}

// init 
function initOptions() {
  generatSelectionOptions(1990, 2024, "year")
  generatSelectionOptions(1, 12, "mounth")
  generatSelectionOptions(1, 31, "day")
}


// change display btn func
function change() {
  let login = document.getElementById("loginArea")
  let create = document.getElementById("createAccountArea")

  if (login.style.display == "flex") {
    login.style.display = "none"
    create.style.display = "flex"
  } else {
    login.style.display = "flex"
    create.style.display = "none"
  }
}
