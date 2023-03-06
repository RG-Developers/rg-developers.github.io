var url = new URL(location.href)
var projects = [
	{
		"name": "Project Avatar", 
		"id": "projectavatar",
		"icon": "img/projectavatar/icon.png",
		"description": "Режим для Garry's Mod, созданный по машиниме Закрытый Сервер", 
		"created": "В разработке", 
		"url": null,
		"video": null,
		"imgs": ["img/projectavatar/img1.png", "img/projectavatar/img2.png"]
	},
	{
		"name": "Disintegrator", 
		"id": "disintegrator",
		"icon": "img/toolgun_icon.png",
		"description": "Аддон, изменяющий Удалитель. Добавляет новые возможности и эффекты.", 
		"created": "1 марта 2023", 
		"url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2940577632",
		"video": "https://youtu.be/vlXnAQqYjlU",
		"imgs": []
	},
	{
		"name": "Black Hole",
		"id": "blackhole",
		"icon": "img/blackhole/icon.png",
		"description": "Аддон, добавляющий энтити чёрной дыры.",
		"created": "5 марта 2023",
		"url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2943005813",
		"video": "https://youtu.be/JPS2cZb52MA",
		"imgs": []
	}

]
function createProject(project) {
	let projectDiv = document.createElement("div");
	projectDiv.setAttribute("class", "project");
	document.getElementById("projects").prepend(projectDiv);
	let projectName = document.createElement("p");
	projectName.setAttribute("style", "font-size: 25px; display: flex;")
	projectName.innerHTML = project["name"] + '<button onclick="show(' + project["id"] + ', this)" class="projectbut">&#10094;</button>'
	projectDiv.prepend(projectName);
	if(project["icon"] !== null) {
		let projectIcon = document.createElement("img")
		projectIcon.setAttribute("style", "margin-right:5px;")
		projectIcon.setAttribute("src", project["icon"])
		projectIcon.setAttribute("width", "25")
		projectIcon.setAttribute("height", "25")
		projectName.prepend(projectIcon)
	}
	let projectShowDiv = document.createElement("div");
	projectShowDiv.style.display = "none"
	projectShowDiv.id = project["id"]
	projectDiv.append(projectShowDiv);
	let projectCreated = document.createElement("p");
	projectCreated.innerHTML = "Дата Выхода: " + project["created"]
	projectShowDiv.append(projectCreated);
	let projectDescription = document.createElement("p");
	projectDescription.innerHTML = "Описание: " + project["description"]
	projectShowDiv.append(projectDescription);
	let projectUrl = document.createElement("p");
	if(project["url"] === null) {
		projectUrl.innerHTML = 'Мастерская Стим<button style="margin-left: 5px;">Нету</button>'
	}
	else {
		projectUrl.innerHTML = "Мастерская Стим<button style='margin-left: 5px;' onclick='opensite(\"" + project["url"] + "\")'>&#10148;</button>"
	}
	projectShowDiv.append(projectUrl);
	if(project["imgs"] !== [] || project["imgs"] !== null) {
		let projectImgsDiv = document.createElement("div");
		projectImgsDiv.setAttribute("class", "imgs");
		projectShowDiv.append(projectImgsDiv);
		if(project["video"] !== null) {
			let projectVideo = document.createElement("video")
			projectVideo.setAttribute("width", "480")
			projectVideo.setAttribute("heigth", "270")
			projectVideo.setAttribute("controls", "controls")
			projectVideo.setAttribute("src", project["video"])
			projectImgsDiv.prepend(projectVideo)
		}
		for (let i = 0; i < project["imgs"].length; i++) {
			let projectImg = document.createElement("img")
			projectImg.setAttribute("src", project["imgs"][i]);
			projectImg.setAttribute("width", "24%")
			projectImgsDiv.append(projectImg)	
		}
	}
	
}
var announcementsData = ["04.03.2023: Сайт Создан"]
var	announcementsSecretData = ["04.03.2023: Здесь будут секреты"]
function announcementsCreate() {
	let announcementText = document.getElementById("announcements-p")
	for (let i = 0; i < announcementsData.length; i++) {
		announcementText.innerHTML += announcementsData[i] + "<br/>"
	}
	if(url.searchParams.get("secret") === "show") {
		announcementText.innerHTML += "<br/>Secret Data:<br/>"
		for (let i = 0; i < announcementsSecretData.length; i++) {
			announcementText.innerHTML += announcementsSecretData[i] + "<br/>"
		}
	}
}
function show(div, but) {
	if(div.style.display === "none") {
		div.style.display = "inline"
		but.innerHTML = "&#10095;"
	}
	else {
		div.style.display = "none"
		but.innerHTML = "&#10094;"
	}
}
function showlogo() {
	var div = document.getElementById("data")
	if(div.style.display === "none") {
		div.style.display = "flex"
	}
	else {
		div.style.display = "none"
	}
}
function showdata(but) {
	var projects = document.getElementById("projects")
	var projectsbut = document.getElementById("projectsbut")
	var team = document.getElementById("team")
	var teambut = document.getElementById("teambut")
	var links = document.getElementById("links")
	var linksbut = document.getElementById("linksbut")
	var announcements = document.getElementById("announcements")
	var announcementsbut = document.getElementById("announcementsbut")
	if(but === projectsbut) {
		projects.style.display = "inline"
		projectsbut.style.color = "#E14539"
		team.style.display = "none"
		teambut.style.color = "white"
		links.style.display = "none"
		linksbut.style.color = "white"
		announcements.style.display = "none"
		announcementsbut.style.color = "white"
	}
	if(but === teambut) {
		projects.style.display = "none"
		projectsbut.style.color = "white"
		team.style.display = "inline"
		teambut.style.color = "#E14539"
		links.style.display = "none"
		linksbut.style.color = "white"
		announcements.style.display = "none"
		announcementsbut.style.color = "white"
	}
	if(but === linksbut) {
		projects.style.display = "none"
		projectsbut.style.color = "white"
		team.style.display = "none"
		teambut.style.color = "white"
		links.style.display = "inline"
		linksbut.style.color = "#E14539"
		announcements.style.display = "none"
		announcementsbut.style.color = "white"
	}
	if(but === announcementsbut) {
		projects.style.display = "none"
		projectsbut.style.color = "white"
		team.style.display = "none"
		teambut.style.color = "white"
		links.style.display = "none"
		linksbut.style.color = "white"
		announcements.style.display = "inline"
		announcementsbut.style.color = "#E14539"
	}
}
function opensite(url_string) {
	location.href = url_string
}
for (let i = 0; i < projects.length; i++) {
	createProject(projects[i])
}
announcementsCreate()
