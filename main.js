let products=document.querySelector("#products")
let data = [
  {
    img: "https://avatars.mds.yandex.net/get-altay/9847279/2a0000018e2da4e1be49a711f94fdc5d67a1/orig",
    title: "Lavash",
    price: "6.5$",
  },
  {
    img: "https://shashlik-baburka.zp.ua/wp-content/uploads/2020/04/23.png",
    title: "Chicken Lavash",
    price: "6$",
  },
  {
    img: "https://i0.wp.com/burger56.ru/wp-content/uploads/2024/05/7331F78C-667B-4B13-A228-8CD585D5DC1F.webp?resize=768%2C768&ssl=1",
    title: "Big Chicken Lavash",
    price: "7$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-altay/2004078/2a000001767abbad70b6c4ab7b386adfd289/orig",
    title: "Burger",
    price: "5.5$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=93bab2dfa2d102f549887ee3707055f9_l-10695130-images-thumbs&n=13",
    title: "Chicken Burger",
    price: "6$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=1db41921ab4407ceb2a8d3d152f41503_l-12421956-images-thumbs&n=13",
    title: "Black Burger",
    price: "7.5$",
  },
  {
    img: "https://get.wallhere.com/photo/food-pizza-tomatoes-salami-vegetables-wooden-surface-2180995.jpg",
    title: "Pizza",
    price: "8$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-altay/6314780/2a00000188a9de8da5eccb0b200fec2191c9/XXL_height",
    title: "Chicken Pizaa",
    price: "6$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=2eac555721f5174d7668b1e9edc96151_l-12630875-images-thumbs&n=13",
    title: "Peperoniy Pizza",
    price: "6.5$",
  },

  {
    img: "https://imperia-sushi.ru/upload/iblock/6b0/6b0d56aa184adefe2c3cce47e34c59fe.jpg",
    title: "Black Sushi",
    price: "6$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-altay/774406/2a0000016280a51eb9e9513b70d95aab2f4e/XXL_height",
    title: "Lasoos Sushi",
    price: "7$",
  },
  {
    img: "https://kingpizza.kh.ua/resources/products/20220211102729_d57bda1b47c.jpg",
    title: "Big Sushi",
    price: "25$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-altay/9717139/2a000001887d6bd1823ed5f58fe99eebe84c/XXL_height",
    title: "HotDog",
    price: "4$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-altay/5098734/2a0000018046a56ed1d4d96525c2e1dfcaec/XXL_height",
    title: "Canada HotDog",
    price: "5.5$",
  },
  {
    img: "https://slkfood.ru/wp-content/uploads/2023/03/%D0%A5%D0%BE%D1%82-%D0%B4%D0%BE%D0%B3-2.jpg",
    title: "Big HotDog",
    price: "5$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=cb6f567825373b0d036a3489e8e99fda_l-5235701-images-thumbs&n=13",
    title: "KFC",
    price: "12$",
  },
  {
    img: "https://images.ctfassets.net/sd2voc54sjgs/5H4EdMuko0oSOgSSusWSo/0487e67745c75cba9efbdd00ad4c7258/BE_3_1_1440x1150px__1_.jpg?fm=jpg&q=60&fl=progressive&w=800",
    title: "Chicken Wings",
    price: "11$",
  },
  {
    img: "https://mytishchi.princepizza.ru/image/cache/catalog/i/if/lp/fb002023439b5ce2535167d1fb37d8f5-1200x800.jpg",
    title: "Chicken Foot",
    price: "10$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=dccada43a0f70d71d0ddb303b2eee4ce_l-5644946-images-thumbs&n=13",
    title: "Ramyoon",
    price: "9$",
  },
  {
    img: "https://i.pinimg.com/originals/42/36/e5/4236e58bbbd83058b880b5da04b0b9d0.jpg",
    title: "Spicy Ramyoon",
    price: "8$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=4c1da7265b24559bb21a4ae31e735e7a_l-5255469-images-thumbs&n=13",
    title: "Ramyoon",
    price: "7.5$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=778e81a6e859db66d0f45f8ae8547538_l-5289357-images-thumbs&n=13",
    title: "Donar",
    price: "7$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=d7e4c719a52b0ff33eedddce1aa44a3d_l-9460549-images-thumbs&n=13",
    title: "Donar",
    price: "6.5$",
  },
  {
    img: "https://i.pinimg.com/originals/db/92/d1/db92d16282755b7969a2da3a5b2b3d85.jpg",
    title: "Chicken Donar",
    price: "$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=f832e6fad7f7716944d6b3725edcfdb1_l-5473904-images-thumbs&n=13",
    title: "CornDog 3",
    price: "8$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=e541ff5c148b3a418abdf36573819faf_l-5332715-images-thumbs&n=13",
    title: "CornDog 5",
    price: "11$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=b505340163efb37ce72e16046bb3b519_l-8497446-images-thumbs&n=13",
    title: "CornDog 5",
    price: "9$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=7964d3b660e295510f74565892491b30_l-12574745-images-thumbs&n=13",
    title: "Pepsi",
    price: "5$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=bb4a5e96869860bd53f9fb3896108d4c_l-4548378-images-thumbs&n=13",
    title: "Coca Cola",
    price: "4.5$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=c7167741f3c9258cf94363c3556b8410_l-10307609-images-thumbs&n=13",
    title: "Fanta",
    price: "3.5$",
  },
  {
    img: "https://cdn-ru4.foodpicasso.com/assets/2022/10/26/a0c3b52813cc441cf4465ae64a0c1206---png_1000x_103c0_convert.png",
    title: "Sprite",
    price: "4$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=0973de18c936e34f458e67f9393ac215_l-5268512-images-thumbs&n=13",
    title: "RedBull",
    price: "6$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=362fba39b6257b03755c4c21bf496808_l-5244487-images-thumbs&n=13",
    title: "Adrenalin",
    price: "5$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=38df403cee9f97bb9aa7219bd5caf436_l-9197564-images-thumbs&n=13",
    title: "Ice Coffee",
    price: "4.5$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=a1167f34dcf1665b80806c9992d6f0d4_l-4432806-images-thumbs&ref=rim&n=13&w=1280&h=960",
    title: "Coffee",
    price: "5$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=e6c5a7eb694d4bafbbca0750f73a32f7_l-8265302-images-thumbs&n=13",
    title: "Black Coffee",
    price: "5$",
  },
  {
    img: "https://medaboutme.ru/upload/medialibrary/48b/shutterstock_241031263.jpg",
    title: "Cake",
    price: "5$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=499c0f33d8d05c86fc69a951ac971134_l-5734795-images-thumbs&n=13",
    title: "Cake",
    price: "5$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=873330f5c789a5591882d620f85dd170_l-8195016-images-thumbs&ref=rim&n=13&w=3000&h=1688",
    title: "Cake",
    price: "7$",
  },
  {
    img: "https://thumbs.dreamstime.com/b/pink-ice-cream-berries-berry-sorbet-fresh-raspberries-wafer-bowl-isolated-black-background-72447699.jpg",
    title: "Ice Cream",
    price: "4.5$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-mpic/3749045/img_id6119581889948787055.jpeg/9",
    title: "Ice Cream",
    price: "4.5$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=84ef171f48310026ff3a7c0eb7c25857_l-5332940-images-thumbs&ref=rim&n=13&w=638&h=638",
    title: "Ice Cream",
    price: "4.5$",
  },
];
for(let item of data){
    products.innerHTML += ` 
           <article class="border rounded-lg bg-white overflow-hidden p-2">
          <img src="${item.img}" alt="" class="w-full h-44 object-cover rounded-md" />
          <div class="p-2">
            <h1 class="text-lg font-medium text-gray-900">${item.title}</h1>
            <h2 class="text-blue-500  font-bold text-xl my-1">${item.price}</h2>
            <button class="bg-gray-900 text-white p-1 w-full rounded-md mt-2 active:scale-95 duration-400">
               Add to Card
            </button>
          </div>
        </article>`;
}