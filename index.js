const handleCategory = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");

    const data = await response.json();

    console.log(data.data);

    const categoryContainer = document.getElementById("category-container");

    const trimmedData = data.data;

    trimmedData.forEach((category) => {

        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick="handleLoadVideos('${category.category_id}')" class="btn btn-outline btn-info">${category.category}</button>
        `;

        categoryContainer.appendChild(div);
    });
    // console.log(trimmedData);

};

const handleLoadVideos = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);

    const data = await response.json();

    const cardContainer = document.getElementById("card-container");
    // console.log(data.data);

    data.data.forEach((videos) => {
        const div = document.createElement('div');

        div.innerHTML = `
        <div class="card card-compact bg-base-100 shadow-xl">
        <figure><img src="./shoes.avif" alt="Shoes" /></figure>
  
        <div class="flex justify-end items-end mr-2">
          <div class="text-white text-sm font-semibold bg-slate-900 rounded-lg w-2/5 text-center p-1 relative -top-10">
            <p>3 hrs 56 min ago</p>
          </div>
        </div>
        <div class="card-body">
          <div class="">
            <div class="flex">
              <div class="w-14 rounded-full mr-2">
                <img src="Icon.png" alt="">
              </div>
              <h2 class="card-title">Building a Winning UX Strategy Using the Kano Model</h2>
            </div>
          </div>
          <div class="flex">
            <p class="ml-10">Awlad Hossain</p>
  
          </div>
  
          <p class="ml-10">90k views</p>
          <div class="card-actions justify-end">
            
  
            
          </div>
        </div>
      </div>
        `;

        cardContainer.appendChild(div);
    });
};

handleCategory();