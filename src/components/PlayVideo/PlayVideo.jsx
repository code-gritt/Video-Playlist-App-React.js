import React, { useEffect, useState } from "react";
import "./PlayVideo.css";

import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  return (
    <>
      <div className="play-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
        <div className="play-video-info">
          <p>
            {apiData ? value_converter(apiData.statistics.viewCount) : "16k"}
            1525 views &bull;{" "}
            {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
          </p>
          <div>
            <span>
              <img src={like} alt="" />
              {apiData ? value_converter(apiData.statistics.likeCount) : 155}
            </span>
            <span>
              <img src={dislike} alt="" />2
            </span>
            <span>
              <img src={share} alt="" />
              Share
            </span>
            <span>
              <img src={save} alt="" />
              Save
            </span>
          </div>
        </div>
        <hr />
        <div className="publisher">
          <img src={jack} alt="" />
          <div>
            <p>Greatstack</p>
            <span>2M Subscribers</span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="vid-description">
          <p>
            {apiData
              ? apiData.snippet.description.slice(0, 250)
              : "Description Here"}
          </p>
          <p>Subscribe Greatstack to watch more tutorials on web development</p>
          <hr />
          <h4>
            {apiData ? value_converter(apiData.statistics.commentCount) : 102}{" "}
            Comments
          </h4>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Jack Nicholson <span>1 day ago</span>
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />2
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Jack Nicholson <span>1 day ago</span>
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />2
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Jack Nicholson <span>1 day ago</span>
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />2
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Jack Nicholson <span>1 day ago</span>
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />2
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
