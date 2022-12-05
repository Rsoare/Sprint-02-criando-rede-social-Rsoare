

function renderAside(userList, sugestUsersList) {
    const ulAside = document.querySelector(".aside__list--container")

    for (let i = 0; i < userList.length; i++) {
        let dataUser = createUserAside(userList[i])

        for (let j = 0; j < sugestUsersList.length; j++) {

            if (userList[i].id == sugestUsersList[j]) {
                ulAside.appendChild(dataUser)
            }
        }
    }
}

function createUserAside(user) {
    const liAside = document.createElement("li")
    const imgAside = document.createElement("img")
    const divAside = document.createElement("div")
    const divContainerimg = document.createElement("div")
    const h2Aside = document.createElement("h2")
    const pAside = document.createElement("p")
    const buttonAside = document.createElement("button")


    liAside.classList.add("aside__list--item")
    imgAside.classList.add("user__image--aside")
    buttonAside.classList.add("aside__button")


    imgAside.src = user.img
    imgAside.alt = user.user

    h2Aside.innerText = user.user
    pAside.innerText = user.stack
    buttonAside.innerHTML = "Seguir"
    buttonAside.id = "button__toggle--aside"

    divContainerimg.append(imgAside, buttonAside)
    divAside.append(h2Aside, pAside)
    liAside.append(divContainerimg, divAside)
    return liAside
}

function asideButton() {
    const asideBtn = document.querySelectorAll("#button__toggle--aside")
    for (let i = 0; i < asideBtn.length; i++) {
        let button = asideBtn[i]
        button.addEventListener('click', (e) => {
            button.classList.toggle("aside__button--toggle")
        })

    }
}

function renderPost(listUser, listpost) {
    const articlePost = document.querySelector(".article__post--container")

    for (let i = 0; i < listUser.length; i++) {
        let userData = createUser(listUser[i])

        for (let j = 0; j < listpost.length; j++) {
            let postData = createPost(listpost[j])

            if (listUser[i].id == listpost[j].user) {
                articlePost.append(userData, postData)
            }
        }
    }
}
function createPost(post) {
    const divPostContainer = document.createElement("div")
    const h1ArticlePost = document.createElement("h1")
    const pArticlePost = document.createElement("p")
    const divArticleButton = document.createElement("div")
    const buttonArticle = document.createElement("button")
    const imgArticleIcon = document.createElement("img")
    const spanArticle = document.createElement("span")

    divArticleButton.classList.add("article__button--container")
    buttonArticle.classList.add("article__button--opemModal")
    imgArticleIcon.classList.add("article__button--like")
    divPostContainer.classList.add("article__content--container")
    pArticlePost.classList.add("article__content")

    h1ArticlePost.innerText = post.title
    pArticlePost.innerText = post.text
    buttonArticle.innerText = "Abrir Post"
    buttonArticle.dataset.id = post.user

    imgArticleIcon.src = "/src/assets/img/Vector.svg"

    spanArticle.innerText = "25"

    divArticleButton.append(buttonArticle, imgArticleIcon, spanArticle)
    divPostContainer.append(h1ArticlePost, pArticlePost, divArticleButton)

    return divPostContainer
}

function createUser(user) {
    const divArticle = document.createElement("div")
    const imgArticleUser = document.createElement("img")
    const divArticleUser = document.createElement("div")
    const h2ArticleUser = document.createElement("h2")
    const pArticleUser = document.createElement("p")


    divArticle.classList.add("article__user--container")
    imgArticleUser.classList.add("user__image")

    imgArticleUser.src = user.img
    imgArticleUser.alt = user.user

    h2ArticleUser.innerText = user.user
    pArticleUser.innerText = user.stack


    divArticleUser.append(h2ArticleUser, pArticleUser)
    divArticle.append(imgArticleUser, divArticleUser)

    return divArticle
}



function renderModal(listUser, listpost) {
    const modal = document.querySelector(".modal__container")
    const btnOpemModal = document.querySelectorAll(".article__button--opemModal")

    for (let i = 0; i < btnOpemModal.length; i++) {
        let buttonClick = btnOpemModal[i]

        buttonClick.addEventListener('click', () => {
            let modalContent = createModal(listUser, listpost, buttonClick.dataset.id)

            modal.innerHTML = " "

            modal.appendChild(modalContent)

            modal.showModal()
            modalClose()
        })
    }
}

function createModal(listUser, listpost, idButton) {
    const divModal = document.createElement("div")
    const divUserContainer = document.createElement("div")
    const imgUser = document.createElement("img")
    const divUserdescription = document.createElement("div")
    const h2User = document.createElement("h2")
    const pUser = document.createElement("p")
    const h1Post = document.createElement("h1")
    const pPost = document.createElement("p")
    const buttonPost = document.createElement("button")

    let cardModalUser = {}
    let cardModalpost = {}

    for (let i = 0; i < listUser.length; i++) {

        if (listUser[i].id === Number(idButton)) {
            cardModalUser = listUser[i]
        }
    }
    for (let i = 0; i < listpost.length; i++) {

        if (listpost[i].user === Number(idButton)) {
            cardModalpost = listpost[i]
        }
    }
    divUserdescription.classList.add("modal__user--desdescription")
    divUserContainer.classList.add("modal__user--container")
    divModal.classList.add("modal__content--container")
    imgUser.classList.add("modal__user--image")
    buttonPost.classList.add("modal__button--close")

    imgUser.src = cardModalUser.img
    imgUser.alt = cardModalUser.user

    h2User.innerText = cardModalUser.user
    pUser.innerText = cardModalUser.stack

    h1Post.innerText = cardModalpost.title
    pPost.innerText = cardModalpost.text
    buttonPost.innerText = "X"

    divUserdescription.append(h2User, pUser)
    divUserContainer.append(imgUser, divUserdescription)
    divModal.append(divUserContainer, h1Post, pPost, buttonPost)

    return divModal
}

function modalClose() {
    const modal = document.querySelector(".modal__container")
    const buttonClose = document.querySelector(".modal__button--close")

    buttonClose.addEventListener('click', () => {
        modal.close()
    })
}
renderAside(users, sugestUsers)
renderPost(users, posts)
renderModal(users, posts)
asideButton()


