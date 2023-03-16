const apiURL = "https://api.github.com/users/"

const searchBox = document.querySelector('#search')

const main = document.querySelector("#main")



const getUser = async(username) => {
    const response = await fetch(apiURL + username)
    const data = await response.json()
        // console.log(response)


    const card = ` <div class="card">
    <div>
        <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
    </div>
    <div class="userInfo">
        <h2>${data.name==null? username : data.name}</h2>
        <p>${data.bio==null?'--' : data.bio}</p>

        <ul class="info">
            <li>${data.followers}<strong>Followers</strong></li>
            <li>${data.following}<strong>Following</strong></li>
            <li>${data.public_repos}<strong>Repos</strong></li>
        </ul>

        <div id="repos">
            
        </div>
    </div>
</div>`
    main.innerHTML = card

    getRepos(username)

}




// getUser('satyamverma21')

const getRepos = async(username) => {

    const repos = document.querySelector('#repos')

    const response = await fetch(apiURL + username + "/repos")
    const data = await response.json()

    data.forEach(item => {

        const ele = document.createElement('a');
        ele.classList.add('repo')
        ele.href = item.html_url
        ele.innerHTML = item.name
        ele.target = '_blank'

        repos.appendChild(ele)

    });
}

const formSubmit = () => {

    if (searchBox.value != "") {
        getUser(searchBox.value);
        searchBox.value = ''
    }

    return false;
}

searchBox.addEventListener(
    ('focusout'),
    formSubmit


)