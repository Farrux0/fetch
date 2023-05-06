// Api - инструмент для взаимодействия между сервером и клиентов ( frontEnd и backEnd )

// fetch() - встроенная функция в js, нужна для того чтобы делать запросы на сервер


// 4 вида основных запросов
// get запросы чтобы получать данные
// post запросы чтобы отправлять данные
// put запросы чтобы изменять данные
// delete запросы чтобы удалять данные

// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((info) => info.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }
// getUsers()

let users = document.querySelector('.users')

async function getUsers() {
    try {
        let response =  await fetch('https://jsonplaceholder.typicode.com/comments')
        let data = await response.json()
        data.forEach(el => {
            let item  = document.createElement('div')
            item.classList.add('users__item')
            let h2 = document.createElement('h2')
            let a = document.createElement('a')
            let p = document.createElement('p')
            
            a.href = `mailto:${el.email}`
             


            h2.textContent = 'Имя: ' + el.name
            a.textContent = el.email
            p.textContent = 'Город: ' + el.body
            
            item.append(h2)
            item.append(a)
            item.append(p)
            
            users.append(item)
            
        })
    } catch (error) {
        console.log('Произошла ошибка при получении пользователей ' + error);
    }
}
getUsers()