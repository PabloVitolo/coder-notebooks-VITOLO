//Array de obj
const products = [
	{
		id: 1,
		name: "HP PAVILION",
		img: 'https://i.postimg.cc/DJqKMyRf/hp1.jpg',
		stock: 33,
		description: ["8 GB RAM", "COLOR PLATEADO", "256 GB DISCO SSD"],
		price: 150500,
	},
	{
		id: 2,
		name: "ACER",
		img: 'https://i.postimg.cc/JzC0bBWc/acer.jpg',
		stock: 30,
		description: ["16 GB RAM", "COLOR NEGRO", "1 TB DD"],
		price: 230000
	},
	{
		id: 3,
		name: "LENOVO",
		img: 'https://i.postimg.cc/sGmC3HVt/lenovo.jpg',
		stock: 7,
		description: ["4 GB RAM", "COLOR PLATEADO", "1 TB DD"],
		price: 125000,
	},
	{
		id: 4,
		name: "APPLE",
		img: 'https://i.postimg.cc/LJX28Sgv/apple.jpg',
		stock: 44,
		description: ["8 GB RAM", "COLOR GOLD", "128 GB DD"],
		price: 250000,
	},
	{
		id: 5,
		name: "HUAWEI",
		img: 'https://i.postimg.cc/1VsZh1ZG/huawei.jpg',
		stock: 65,
		description: ["8 GB RAM", "COLOR NEGRO", "256 GB DD"],
		price: 200000,
	},
	{
		id: 6,
		name: "SAMSUNG",
		img: 'https://i.postimg.cc/s1rBDBjc/samsung.jpg',
		stock: 67,
		description: ["4 GB RAM", "COLOR BLANCO", "64 GB DD"],
		price: 150000,
	},
	{
		id: 7,
		name: "LG",
		img: 'https://i.postimg.cc/Fdt4pJWn/lg.jpg',
		stock: 98,
		description: ["8 GB RAM", "COLOR PLATEADO", "256 GB DD"],
		price: 200000,
	},
	{
		id: 8,
		name: "ADVANCE",
		img: 'https://i.postimg.cc/7CJ4SNV2/advance.jpg',
		stock: 43,
		description: ["3 GB RAM", "COLOR NEGRO", "64 GB DD"],
		price: 85000,
	},
	{
		id: 9,
		name: "DELL",
		img: 'https://i.postimg.cc/rDPcdHST/dell.jpg',
		stock: 77,
		description: ["8 GB RAM", "COLOR NEGRO", "1 TB DD"],
		price: 189000
	},
	{
		id: 10,
		name: "HP2",
		img: 'https://i.postimg.cc/wvxnzmFD/hp2.jpg',
		stock: 25,
		description: ["16 GB RAM", "COLOR NEGRO", "2 TB DD"],
		price: 110000
	},
	{
		id: 11,
		name: "HAIWA",
		img: 'https://i.postimg.cc/9FwKcVPg/aiwa.png',
		stock: 25,
		description: ["16 GB RAM", "COLOR NEGRO", "2 TB DD"],
		price: 110000
	},
	{
		id: 12,
		name: "KLX",
		img: 'https://i.postimg.cc/RFPyZZby/klx.jpg',
		stock: 25,
		description: ["16 GB RAM", "COLOR NEGRO", "2 TB DD"],
		price: 110000
	},
	{
		id: 13,
		name: "NSX",
		img: 'https://i.postimg.cc/gjn5XbCJ/nsx.jpg' ,
		stock: 25,
		description: ["16 GB RAM", "COLOR NEGRO", "2 TB DD"],
		price: 110000
	},
	{
		id: 14,
		name: "DNQP",
		img: 'https://i.postimg.cc/BvBRRg5q/dnqp.jpg',
		stock: 25,
		description: ["16 GB RAM", "COLOR NEGRO", "2 TB DD"],
		price: 110000
	},
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
