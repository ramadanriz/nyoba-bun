import PropTypes from "prop-types";
import DetailSurahItem from "../components/DetailSurahItem";
import { useEffect, useRef, useState } from "react";

const DetailSurahList = ({ data, latinStatus, murottalStatus }) => {
  const verses = data.data.verses;
  const [currentIndex, setCurrentIndex] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      audio.onended = () => {
        if (currentIndex < verses.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          setCurrentIndex(null); // berhenti kalau sudah ayat terakhir
        }
      };
    }
  }, [currentIndex, verses.length]);

  useEffect(() => {
    if (audioRef.current && murottalStatus && currentIndex !== null) {
      audioRef.current.play();
    }
  }, [currentIndex, murottalStatus]);

  return (
    <div className="w-full flex flex-col space-y-7 my-7 text-end">
      {data.data.verses.map((verse, index) => (
        <DetailSurahItem
          key={verse.number.inQuran}
          verse={verse}
          latinStatus={latinStatus}
          murottalStatus={murottalStatus}
          isPlaying={currentIndex === index}
          onPlay={() => setCurrentIndex(index)}
          audioRef={currentIndex === index ? audioRef : null}
        />
      ))}
    </div>
  );
};

DetailSurahList.propTypes = {
  data: PropTypes.object,
  latinStatus: PropTypes.bool,
  murottalStatus: PropTypes.bool,
};

export default DetailSurahList;
