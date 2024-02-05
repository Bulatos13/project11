
let main = document.getElementsByTagName('main');
let order = document.getElementById('create-order-box');
let purchase = document.getElementById('purchase-price');
let btnBox = document.getElementById('btn-box');

//PLUS
let plus = document.getElementById('plus');
let price = document.getElementsByClassName('price');
let menuItem = document.getElementsByClassName('menu-item'); 

plus.addEventListener('click', () => {
	order.style.height = 120 + `px`;
	purchase.style.height = 50 + `px`;
	purchase.style.fontSize = 16;
	main[0].style.marginBottom = 140 + `px`;
	plus.style.transform = 'translateX(6px)';
	setTimeout(() => {
		plus.style.transform = 'translateX(-6px)'; 
	}, 300);

	orderItemFinder(menuItem);
});

function addOrder(e){
	purchase.innerHTML = Number(purchase.innerHTML) + Number(e);
};

function orderItemFinder(b){
	for(let i = 0; i < menuItem.length; i++){
		if(b[i].getBoundingClientRect().top > -30 && b[i].getBoundingClientRect().top < 200){
			addOrder(price[i].innerHTML);
		}
	}
};

//MINUS
let minus = document.getElementById('minus');

minus.addEventListener('click', () => {
	orderItemFinderMinus(menuItem);
});

function outsideOrder(e){
	minus.style.transform = 'translateX(6px)';
	setTimeout(() => {
		minus.style.transform = 'translateX(-6px)';}
	, 300);
		
	if(Number(purchase.innerHTML) - Number(e) <= 0){
		order.style.height = 60 + `px`;
		purchase.style.height = 0 + `px`;
		main[0].style.marginBottom = 70 + `px`;
		purchase.style.fontSize = 0;
		purchase.innerHTML = 0;
	} else {
		purchase.innerHTML = Number(purchase.innerHTML) - Number(e);
	}
}

function orderItemFinderMinus(b){
	for(let i = 0; i < menuItem.length; i++){
		if(b[i].getBoundingClientRect().top > -30 && b[i].getBoundingClientRect().top < 200){
			outsideOrder(price[i].innerHTML);
		}
	}
}

//purchase items
purchase.addEventListener('click', () => {
	alert('пока не доступно =(');
})