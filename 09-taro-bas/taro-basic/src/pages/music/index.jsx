// src/pages/music/index.jsx
import React, { useState, useEffect, useRef } from "react";
import { View } from "@tarojs/components";
import {
  AtButton,
  AtList,
  AtListItem,
  AtCard,
  AtToast,
  AtAvatar,
} from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Music = () => {
  const musicList = [
    {
      id: 1,
      name: "孤身",
      author: "余乘龙",
      path: "https://myqqis.oss-cn-beijing.aliyuncs.com/%E5%AD%A4%E8%BA%AB-%E4%BD%99%E4%B9%98%E9%BE%99%232x0yrR%281%29.mp3",
      cover:
        "https://myqqis.oss-cn-beijing.aliyuncs.com/%E5%AD%A4%E8%BA%AB.webp",
    },
    {
      id: 2,
      name: "富士山下",
      author: "陈奕迅",
      path: "https://myqqis.oss-cn-beijing.aliyuncs.com/%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B.mp3",
      cover:
        "https://myqqis.oss-cn-beijing.aliyuncs.com/%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B.jpg",
    },
    {
      id: 3,
      name: "白羊",
      author: "徐秉龙",
      path: "https://myqqis.oss-cn-beijing.aliyuncs.com/%E7%99%BD%E7%BE%8A.mp3",
      cover:
        "https://myqqis.oss-cn-beijing.aliyuncs.com/%E7%99%BD%E7%BE%8A.jpg",
    },
  ];

  const [currentMusicIndex, setCurrentMusicIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const audioContextRef = useRef(null);

  // 初始化音频实例
  useEffect(() => {
    audioContextRef.current = Taro.createInnerAudioContext();
    const audioContext = audioContextRef.current;

    const handleFinish = () => {
      setIsPlaying(false);
      setIsToastVisible(true);
      handleNext(); // 播放下一首
    };

    audioContext.onEnded(handleFinish);
    audioContext.onError((res) => {
      console.error("音频播放错误：", res);
    });

    return () => {
      audioContext.offEnded(handleFinish);
      audioContext.offError();
      audioContext.destroy();
      audioContextRef.current = null;
    };
  }, []);

  const handlePlay = (index) => {
    const audioContext = audioContextRef.current;
    if (!audioContext || index === null) return;

    if (isPlaying) {
      audioContext.stop();
      setIsPlaying(false);
    }

    audioContext.src = musicList[index].path;

    try {
      audioContext.play();
      setCurrentMusicIndex(index);
      setIsPlaying(true);
    } catch (err) {
      console.error("播放失败:", err);
    }
  };

  const handlePause = () => {
    const audioContext = audioContextRef.current;
    if (audioContext && isPlaying) {
      audioContext.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    const audioContext = audioContextRef.current;
    if (audioContext) {
      audioContext.stop();
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentMusicIndex + 1) % musicList.length;
    handlePlay(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentMusicIndex - 1 + musicList.length) % musicList.length;
    handlePlay(prevIndex);
  };

  return (
    <View className="music">
      <AtCard title="音乐列表" className="music-card">
        <AtList>
          {musicList.map((music, index) => (
            <AtListItem
              key={music.id}
              title={music.name}
              note={`作者: ${music.author}`}
              onClick={() => handlePlay(index)}
            />
          ))}
        </AtList>
      </AtCard>

      {currentMusicIndex !== null && (
        <AtCard title="当前播放" className="music-card">
          {/* 显示封面图片 */}
          <View className="cover-image">
            <AtAvatar
              circle
              image={musicList[currentMusicIndex].cover}
              size="large"
            />
          </View>
          <View className="music-title">
            {musicList[currentMusicIndex].name}
          </View>
          <View className="music-author">
            {musicList[currentMusicIndex].author}
          </View>
        </AtCard>
      )}

      <View
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <AtButton
          className="music-button"
          type="success"
          onClick={() => handlePlay(currentMusicIndex)}
          disabled={isPlaying || currentMusicIndex === null}
        >
          播放
        </AtButton>
        <AtButton
          className="music-button"
          type="warning"
          onClick={handlePause}
          disabled={!isPlaying}
        >
          暂停
        </AtButton>
        <AtButton className="music-button" type="error" onClick={handleStop}>
          停止
        </AtButton>
        <AtButton
          className="music-button"
          type="primary"
          onClick={handlePrevious}
          disabled={currentMusicIndex === null}
        >
          上一首
        </AtButton>
        <AtButton
          className="music-button"
          type="primary"
          onClick={handleNext}
          disabled={currentMusicIndex === null}
        >
          下一首
        </AtButton>
      </View>

      <AtToast
        isOpen={isToastVisible}
        text={`音乐播放完毕`}
        onClose={() => setIsToastVisible(false)}
      />
    </View>
  );
};

export default Music;
