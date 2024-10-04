import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

// 定義 api 返回數據的型別
interface LocationData {
  lat: string;
  lon: string;
  display_name: string;
  address: {
    [key: string]: any;
  };
}
export default function Location() {
  const [latitude, setLatitude] = useState<null | number>(null);
  const [longitude, setLongitude] = useState<null | number>(null);
  const [city, setCity] = useState<null | string>(null);
  const [suburb, setSuburb] = useState<null | string>(null);

  //   用取得的當前位置來發送 api
  const fetchLocationData = async () => {
    try {
      if(latitude===null || longitude===null){
        throw new Error("尚未取得經緯度")
      }
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`,
      );
      const data: LocationData = await res.json();
      console.log(data);
      const { city, suburb } = data.address;
      setCity(city);
      setSuburb(suburb);
      // 要記得返回 data
      return data;
    } catch (error: any) {
      console.error(error.message);
    }
  };

  // 用 geolocation API 取得當前位置
  const getLocation = function () {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          const { latitude, longitude } = position.coords;
          console.log(`經度${latitude}`);
          console.log(`緯度${longitude}`);
          setLatitude(latitude);
          setLongitude(longitude);
        },
        () => {
          console.log('無法取得當前位置');
        },
      );
  };

  // 從 useQuery 返回的物件中解構出需要的狀態
  const { isLoading, isSuccess, isError} = useQuery({
    queryKey: ['location'],
    queryFn: fetchLocationData,
    retry: false, // API 在發送失敗之後不要自動重試
    // enabled: false, //不要在掛載組件時自動觸發
    staleTime:5000 //設定過期時間為五秒
  });

  return (
    <div className="hola-max-w-screen-sm hola-mx-auto hola-my-16">
      <h1 className="hola-text-3xl hola-font-bold hola-mb-6">
        useQuery 實作練習
      </h1>
      {isLoading && (
        <h1 className="hola-text-lg hola-font-bold hola-text-gray-600">
          取得資料中...請稍候...
        </h1>
      )}
      {isSuccess && <h1 className="hola-text-green-700">成功取得資料！</h1>}
      {isError && (
        <h1 className="hola-text-red-700">發生錯誤，請稍後再試</h1>
      )}
      {city && suburb && (
        <h2 className="hola-text-2xl">
          你目前在{city} {suburb}
        </h2>
      )}
      <div className="hola-flex hola-justify-between hola-py-10">
        <button
          className="hola-py-3 hola-px-4 hola-bg-cyan-600 hola-text-white hola-rounded-full hola-shadow-md hover:hola-bg-cyan-700 hover:hola-transition-all"
          onClick={getLocation}
        >
          取得當前位置
        </button>
        <button
          className="hola-py-3 hola-px-4 hola-bg-green-600 hola-text-white hola-rounded-full hola-shadow-md hover:hola-bg-green-700 hover:hola-transition-all"
          onClick={fetchLocationData}
        >
          發送 API
        </button>
      </div>
    </div>
  );
}
