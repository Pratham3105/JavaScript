// index.html

// in terminal
//console.log(window)
//console.log(window.document)
//console.log(document)
//console.dir(document.baseURL)
//console.log(document.links)

// document.getElementById("tittle")
/* <h1 style=​"color:​ red;​" id=​"tittle" class=​"heading">​Dom Learning​</h1>​ */

// document.getElementById("tittle").id
// 'tittle'

// document.getElementById("tittle").className
// 'heading'

// document.getElementById("tittle").getAttribute('id')
// 'tittle'

// document.getElementById("tittle").getAttribute('class')
// 'heading'

// document.getElementById("tittle").setAttribute('class','test') // previous attribute override

// const tittle = document.getElementById('tittle')
// undefined

// tittle
// <h1 id=​"tittle" class=​"heading">​Dom Learning​</h1>

// tittle.style.backgroundColor=("green")
// 'green'

// tittle.textContent // this also give hidden text
// 'Dom Learning test text'

// tittle.innerHTML // in innerhtml give whole content give in the tag
// 'Dom Learning <span style="display:none;">test text</span>'

// tittle.innerText // this is not give hidden text
// 'Dom Learning'

// document.getElementsByClassName("heading")
// HTMLCollection [h1#tittle.heading, tittle: h1#tittle.heading]

// document.querySelector('h1')
/* <h1 id=​"tittle" class=​"heading">​…​</h1>​"Dom Learning "<span style=​"display:​none;​">​test text​</span>​</h1>​ */

// document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit.​</h2>​

// document.querySelector('#tittle')
// <h1 id=​"tittle" class=​"heading">​…​</h1>​

// document.querySelector('.heading')
// <h1 id=​"tittle" class=​"heading">​…​</h1>​

// document.querySelector('input[type="password"]')
// <input type=​"password" name id fdprocessedid=​"wnhgrj">​

// document.querySelector('ul')
// <ul>​…​</ul>​

// const myul = document.querySelector('ul')
// undefined

// myul.query
// undefined

// myul.querySelector('li')
// <li>​…​</li>​::marker​"first"</li>​

// const turngreen = docuemnt.querySelector('li')
// turngreen.style.backgroundColor('green')

// turngreen.innerHTML
// 'first'
// turngreen.innerHTML="change"
// 'change'

// myul.querySelectorAll('li')
// NodeList(3) [li, li, li]

// const tempLiList = myul.querySelectorAll('li')

// tempLiList.style.color = 'green' // not possible

// tempLiList[0].style.color = 'green'

// const myh1 = document.querySelectorAll('h1')
// undefined
// myh1
// NodeList [h1#tittle.heading]

// myh1.style.color = 'green' // not possible

// myh1[0].style.color = 'green'
// 'green

// tempLiList.forEach((l)=>{
//     l.style.backgroundColor = 'green'
// })

// document.getElementsByClassName('list-items')
// HTMLCollection(4) [li.list-items, li.list-items, li.list-items, li.list-items]

// const tempClassList = document.getElementsByClassName('list-items')

// tempClassList
// HTMLCollection(4) [li.list-items, li.list-items, li.list-items, li.list-items]

// tempClassList.forEach((l)=>{
//      l.style.backgroundColor = 'green'
//  })
// VM5964:1 Uncaught TypeError: tempClassList.forEach is not a function
    

// Array.from(tempClassList)
// (4) [li.list-items, li.list-items, li.list-items, li.list-items]

// const newArr = Array.from(tempClassList)
// undefined

// newArr
// (4) [li.list-items, li.list-items, li.list-items, li.list-items]

// newArr.forEach((l)=>{
//      l.style.backgroundColor = 'green'
//  })
// undefined