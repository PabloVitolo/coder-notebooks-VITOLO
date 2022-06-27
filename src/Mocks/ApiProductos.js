//Array de obj
const products = [
	{
		id: 1,
		name: "HP PAVILION",
		img: 'https://i.postimg.cc/DJqKMyRf/hp1.jpg',
		stock: 33,
		description: ["8 GB RAM", "COLOR PLATEADO", "256 GB DISCO SSD"]
	},
	{
		id: 2,
		name: "ACER",
		img: 'https://i.postimg.cc/JzC0bBWc/acer.jpg',
		stock: 30,
		description: ["16 GB RAM", "COLOR NEGRO", "1 TB DD"]
	},
	{
		id: 3,
		name: "LENOVO",
		img: 'https://i.postimg.cc/sGmC3HVt/lenovo.jpg',
		stock: 7,
		description: ["4 GB RAM", "COLOR PLATEADO", "1 TB DD"]
	},
	{
		id: 4,
		name: "APPLE",
		img: 'https://i.postimg.cc/LJX28Sgv/apple.jpg',
		stock: 44,
		description: ["8 GB RAM", "COLOR GOLD", "128 GB DD"]
	},
	{
		id: 5,
		name: "HUAWEI",
		img: 'https://i.postimg.cc/1VsZh1ZG/huawei.jpg',
		stock: 65,
		description: ["8 GB RAM", "COLOR NEGRO", "256 GB DD"]
	},
	{
		id: 6,
		name: "SAMSUNG",
		img: 'https://i.postimg.cc/s1rBDBjc/samsung.jpg',
		stock: 67,
		description: ["4 GB RAM", "COLOR BLANCO", "64 GB DD"]
	},
	{
		id: 7,
		name: "LG",
		img: 'https://i.postimg.cc/Fdt4pJWn/lg.jpg',
		stock: 98,
		description: ["8 GB RAM", "COLOR PLATEADO", "256 GB DD"]
	},
	{
		id: 8,
		name: "ADVANCE",
		img: 'https://i.postimg.cc/7CJ4SNV2/advance.jpg',
		stock: 43,
		description: ["3 GB RAM", "COLOR NEGRO", "64 GB DD"]
	},
	{
		id: 9,
		name: "DELL",
		img: 'https://i.postimg.cc/rDPcdHST/dell.jpg',
		stock: 77,
		description: ["8 GB RAM", "COLOR NEGRO", "1 TB DD"]
	}
]

  export const getData = new Promise ((resolve, reject) =>{
 
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('ERROR')
      }
    },2000)
  })
