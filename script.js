const input = document.querySelector("#input")
const btn = document.getElementById("btn")
const wrapper = document.querySelector(".wrapper")

function runProgaram () {
    btn.addEventListener("click", () => {
        if (input.value === "") {
        alert("Please enter a task")
        }
        else {
            const newContainer = document.createElement("section")
            newContainer.classList.add("container")
            wrapper.appendChild(newContainer)
        
            const inputValue = document.createElement("span")
            inputValue.innerText = input.value
            inputValue.classList.add("span")
            newContainer.appendChild(inputValue)
        
            const checkBtn = document.createElement("button")
            checkBtn.innerHTML = "<i class=\"fa fa-check\" aria-hidden=\"true\"></i>"
            checkBtn.classList.add("check-btn")
            newContainer.appendChild(checkBtn)
        
            const deleteBtn = document.createElement("button")
            deleteBtn.innerHTML = "<i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>"
            deleteBtn.classList.add("delete-btn")
            newContainer.appendChild(deleteBtn)
            
            checkBtn.addEventListener("click", () => {
                inputValue.style.textDecoration = "line-through"
            })

            deleteBtn.addEventListener("click", () => {
                deleteBtn.parentElement.remove()
            })
        }

        input.value = ""
    })
}
runProgaram()