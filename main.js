// get the videos card data from the data file
import {videoData as video} from './data.js';


const videoContainer = document.querySelector('.videos-container');

// store the html each time it loops
let htmlVideo = ''
video.forEach((video)=>{
    htmlVideo+=`
        <section class="youtube-video">
                <div class="thumbnail-container">
                    <img src="${video.thumbnail}" class="thumbnail" >
                    <div class="video-time">${video.time}</div>
                </div>
                <div class="youtube-video-info">

                        <div class="channel-profil-container">
                            <img src="${video.channelPic}" class="channel-pic" alt="">
                        
                            <div class="channel-hover-effect">
                                <img src="${video.channelPic}" class="channel-pic-hover" alt="">
                                <div>
                                    <p class="title-hover">${video.channelName}</p>
                                    <p class="subs-number">${video.subs}</p>
                                </div>
                        
                            </div>
                        </div>
                    
                        <div class="text">
                            <p class="title">
                                ${video.title}
                            </p>
                            <p class="channel-name">
                               ${video.channelName}
                            </p>
                            <p class="views-months">
                                ${video.views}
                            </p>
                        </div>
                </div>
                </section>
    `
}
)

videoContainer.innerHTML = htmlVideo

console.log(htmlVideo)
console.log(videoContainer)