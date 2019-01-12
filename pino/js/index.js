// Получаем наши элементы
var Platform = document.getElementById("platform"),
	Cube     = document.getElementById("cube");
	Step     = 0 // каждый раз будет меняться от 1 до 20

// Получаем размеры платформы
var PlatformSize = {
	width: Platform.clientWidth,
	height:Platform.clientHeight
}

// получаем размеры куба
var CubeSize = {
	width: Cube.clientWidth,
	height:Cube.clientHeight	
}

//функции для перетаскивания куба
var PosFunc = [

	function left(){
		let posNull = Cube.style.left == "" ? 0 : Number(Cube.style.left.substring(0,Cube.style.left.length-2))
		
		if ( (PlatformSize.width - CubeSize.width) * -1 < posNull - Step ){
			Cube.style.left = (posNull - Step) + 'px';
			Cube.style.transform = 'rotate(-90deg)';
		}
	},

	function right(){
		let posNull = Cube.style.left == "" ? 0 : Number(Cube.style.left.substring(0,Cube.style.left.length-2))
		
		if ( (PlatformSize.width - CubeSize.width) > posNull + Step){
			Cube.style.left = (posNull + Step) + 'px';
			Cube.style.transform = 'rotate(90deg)';
		}
	},

	function up(){
		let posNull = Cube.style.top == "" ? 0 : Number(Cube.style.top.substring(0,Cube.style.top.length-2))
		
		if ( (PlatformSize.height - CubeSize.height)*-1 < posNull- Step ){
			Cube.style.top = posNull - Step + 'px';
			Cube.style.transform = 'rotate(0deg)';
		}
	},

	function down(){
		let posNull = Cube.style.top == "" ? 0 : Number(Cube.style.top.substring(0,Cube.style.top.length-2))
		
		if ( (PlatformSize.height - CubeSize.height) > posNull + Step ){
			Cube.style.top = posNull + Step + 'px';
			Cube.style.transform = 'rotate(-180deg)';
		}
	}
]

// делаем цыкл повторяющийся каждые 300 миллисикунд

window.onload = () => {

	getRandom = (a,b)=>{
		let r = Math.floor(Math.random()*b+1);
		if (r < a){
			return getRandom(a,b);
		}
		return r;
	}


	setInterval(()=>{
		Step = getRandom(15,50);
		PosFunc[Math.floor(Math.random()*PosFunc.length)]();
	},1000/4)
}


/*
P.s
"()=>{..}" - тоже самое что и "function(){...}", только в более сокращенном виде
*/