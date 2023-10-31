const allData = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await response.json();

    const Buttons = document.getElementById("Buttons");

    data.data.forEach(element => {
        
        const div = document.createElement("div")
        div.innerHTML = `
        <a onclick="videosData('${element?.category_id}')" class="tab mx-4 bg-slate-400 rounded-sm text-white px-4 hover:bg-red-500">${element.category}</a>
    `
        Buttons.appendChild(div);
    });
}

const videosData = async (catId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catId}`);
    const data = await response.json();
    const dataCollection = data.data;
    const allVideos = document.getElementById("allVideos");
    allVideos.innerHTML = " ";

    dataCollection.forEach(element => {
        const thumbnail = element.thumbnail;
        const title = element.title;
        const profilePicture = element?.authors[0]?.profile_picture;
        const profileName = element?.authors[0]?.profile_name;
        const verified = element?.authors[0]?.verified;
        const views = element?.others?.views;
        const time = element?.others?.posted_date;

        const div = document.createElement("div");
        div.innerHTML = `
                        <div class="col-span-4 lg:col-span-12 sm:col-span-6 md:col-span-3">
                            <card class="hover:border-solid hover:border-black w-full flex flex-col">
                                <div class="relative">
                                    <a href="#">
                                        <img src="${thumbnail}" class="w-96 h-auto" />
                                    </a>
    
                                    <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">${time}</p>
                                </div>
    
                                <div class="flex flex-row mt-2 gap-2">
                                    <a href="#">
                                        <img src="${profilePicture}"
                                            class="rounded-full max-h-10 max-w-10" />
                                    </a>
    
                                    <div class="flex flex-col">
                                        <a href="#">
                                            <p class="text-[#171717] text-sm font-semibold">${title}
                                            </p>
                                        </a>
                                        <div class= "flex items-center" >
                                            <a class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> ${profileName} </a>
                                            <img class= "w-3 h-3" src=${verified? "./blue.png" : "" } alt="">
                                        </div>
                                        <p class="text-gray-500 text-xs mt-1">${views} views</p>
                                    </div>
                                </div>
                            </card>
                        </div>  
        `;

        allVideos.appendChild(div);

    })


};

allData();
videosData(1000);