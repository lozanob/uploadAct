// window.addEventListener("load", start);
//
// function start(){
// 	// //addBtn();
// 	// increase();
// 	// addFolder();
// }
//
//
// function addBtn(){
//    let btn = document.getElementById("btn-Add");
//    btn.addEventListener("click",addFolder, true);
// }
//
// function createBar(){
//
// 	let td2 = document.createElement("td");
// 	let divporcentbar  = document.createElement("div");
// 	divporcentbar.className="bar-porcent";
//
// 	let divporcent  = document.createElement("div");
// 	divporcent.className="porcent";
//
// 	divporcentbar.appendChild(divporcent);
// 	td2.appendChild(divporcentbar);
//
// 	return td2;
//
// }
//
//
// function increase() {
//
//   var porcent = document.getElementById("porcent");
//   var width = 0;
//   var id = setInterval(frame, 100);
//
//   function frame() {
//
//     if (width == 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       porcent.style.width = width + '%';
//     }
//   }
// }
//
// //********************************************/
// function createinput(){
// 	let td1 =  document.createElement("td");
// 	let input = document.createElement("input");
// 	input.setAttribute("type","file");
//
// 	td1.appendChild(input);
//
// 	return td1 ;
// }
//
//
//
// //********************************************/
// function createSelect(){
//
// 	let td3 =  document.createElement("td");
// 	let select  = document.createElement("select");
// 	let tab=[];
// 	let tabvaleur=["Pièces annexes","Raport/Exposé de motifs","Pièces annexes","Fond de dossier"];
//
// 	for(let i = 0 ; i <=3 ; i ++ ){
// 		tab[i] = document.createElement("option");
// 		tab[i].setAttribute("value",tabvaleur[i]);
// 		tab[i].innerHTML=tabvaleur[i];
// 		select.appendChild(tab[i]);
// 	}
// 	td3.appendChild(select);
// 	return td3;
//
// }
//
//
// //********************************************/
// function createLabel(){
//
// 	let td4 =  document.createElement("td");
// 	let label = document.createElement("label");
//
// 	let text = document.createTextNode("kilos");
// 	label.appendChild(text);
// 	td4.appendChild(label);
//
// 	return td4;
// }
//
//
// /********************************************/
// 	function createCheckbox(){
// 		let td5 =  document.createElement("td");
// 		let checkbox = document.createElement("input");
// 		checkbox.setAttribute("type","checkbox");
// 		td5.appendChild(checkbox);
// 		return td5;
// 	}
//
//
//
// function createImg(){
// 	let td6 =  document.createElement("td");
// 	let img = document.createElement("a");
// 	let balisei = document.createElement("i");
// 	balisei.setAttribute("class","fa fa-trash-o");
// 	img.appendChild(balisei);
// 	img.setAttribute("class","btn btn-danger");
// 	td6.appendChild(img);
//
// 	return td6;
// }
//
// /********************************************/
// function addFolder(event){
//
// 	let table=document.getElementById("tbone");
// 	let tr1 =  document.createElement("tr");
//
//
// 	// recuperation de la id
// 	// l'envoie a chaque creation
//
// 	tr1.appendChild(createinput());
// 	tr1.appendChild(createBar());
// 	//increase();
// 	tr1.appendChild(createSelect());
// 	tr1.appendChild(createLabel());
// 	tr1.appendChild(createCheckbox());
// 	tr1.appendChild(createImg());
//
//
// 	table.appendChild(tr1);
//
//
// 	event.preventDefault();
//
//
// }