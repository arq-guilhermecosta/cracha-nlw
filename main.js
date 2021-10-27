const LinksSocialMedia = {
  github: 'arq-guilhermecosta',
  facebook: 'guilherme.costa.5209000',
  instagram: 'arq.guilhermecosta',
  twitter: 'arqguiga'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithubLink.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}
getGithubProfileInfos()
