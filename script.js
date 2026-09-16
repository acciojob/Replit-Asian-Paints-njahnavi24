//your JS code here. If required.
let blockId = document.getElementById("block_id")
let colourId = document.getElementById("colour_id")
let changeBtn = document.getElementById("change_button")
let resetBtn = document.getElementById("reset")

let gridItems = document.querySelectorAll(".grid-item")

changeBtn.addEventListener("click", () => {
	gridItems.forEach(function (item) {
		item.style.backgroundColor = "transparent"
	})
	let id = blockId.value
	let selectedBlock = document.getElementById(id)

	if(selectedBlock) {
		selectedBlock.style.backgroundColor = colourId.value
	}
})
	resetBtn.addEventListener("click",function () {
		gridItems.forEach(function (item) {
			item.style.backgroundColor = "transparent"
		})
	blockId.value = ""
	colourId.value = ""
	})