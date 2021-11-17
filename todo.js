const users = ['đăng đẹp trai', '1', '2', '3 ']

const box = document.querySelector('.box')
const input = document.querySelector('#input')
const btnAdd = document.querySelector('#btn_add')
const contentBox = document.querySelector('.content_box')


function start() {
    renderUser(users)
}

start()

//  hàm hiển thị từ araay ra màn hình 
function renderUser(users) {
    var htmls = users.map((user, index) => {
        return `
            <div class="content_value">
                <p class="content_item">${user}</p>
                <button id="btn_delete" onclick="deleteUser(${index})">XÓA</button>
            </div>  
        `
    })
    contentBox.innerHTML = htmls.join('')
}

//  lắng nghe sự kiện của button THÊM
btnAdd.addEventListener('click', () => {
    let user = input.value
    if (user == '') {
        alert('bạn chưa nhập tên')
    } else {
        users.push(user)
        renderUser(users)
    }
})

// hàm Xóa 
function deleteUser(index) {
    users.splice(index, 1)
    renderUser(users)
}

