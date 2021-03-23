function openService(event, serviceName) {
  let serviceTabs = document.querySelectorAll(".service-tab")
  let tabBtn = document.querySelectorAll(".tab-btn")

  for(let i = 0; i < serviceTabs.length; i++) {
    if(serviceTabs[i].id == serviceName) {
      serviceTabs[i].style.display = "flex"
    }
    else {
      serviceTabs[i].style.display = "none"
    }
  }

  for(let i = 0; i < serviceTabs.length; i++) {
    tabBtn[i].className = tabBtn[i].className.replace(" tab-active", "")
  }

  event.currentTarget.className += " tab-active"
}