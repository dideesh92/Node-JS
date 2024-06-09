let itemsMap = new Map()

// itemsMap.set(1,'item1')
// itemsMap.set(2,'item2')
// itemsMap.set(3,'item3')
// itemsMap.set(4,'item4')

// function displayItem(map){
//     let itemList = document.getElementById('itemList')
//     map.forEach((value,key)=>{
//         let listItem = document.createElement('li')
//         listItem.textContent = `${key} ${value}`
//         itemList.appendChild(listItem)
//     })
// }
function displayItem(map){
    let itemList = document.getElementById('itemList')
    // itemList.innerHTML = ''
    map.forEach((value,key)=>{
        let listItem = document.createElement('li')
        listItem.textContent = `${key} ${value}`
        itemList.appendChild(listItem)
    })
}
function addItem(key,value){
    itemsMap.set(key,value)
    displayItem(itemsMap)
}

document.getElementById('addItemForm').addEventListener('submit',(e)=>{
    e.preventDefault()
    let key = document.getElementById('item-key').value
    let value = document.getElementById('item-value').value
    addItem(key,value)
    document.getElementById('addItemForm').reset
})
// window.onload=()=>{i
//     displayItem(itemsMap)
// }/home/vishnu/Documents/Package/shoppingCartAssignment_VISHNU_AG/script.js