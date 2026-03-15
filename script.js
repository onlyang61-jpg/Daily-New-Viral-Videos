fetch("videos.json")
.then(res => res.json())
.then(data => {

let container = document.getElementById("videos")

data.forEach(v => {

container.innerHTML += `
<div class="card">
<img src="${v.thumb}">
<a href="watch.html?video=${encodeURIComponent(v.video)}">${v.title}</a>
</div>
`

})

})
