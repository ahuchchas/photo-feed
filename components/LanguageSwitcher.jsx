"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { lang } = useParams();
  const [showLang, setShowLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(lang);

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowLang(!showLang)}
        >
          <Image
            className="max-w-8"
            src={selectedLang === "en" ? "/usa.png" : "/bd.png"}
            alt="bangla"
            height={40}
            width={40}
          />
          {selectedLang === "en" ? "English" : "Bangla"}
        </button>

        {showLang && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
            <li
              className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setSelectedLang("bn");
                setShowLang(false);
                router.push("/bn");
              }}
            >
              <Image
                className="max-w-8"
                src="/bd.png"
                alt="bangla"
                height={40}
                width={40}
              />
              Bangla
            </li>
            <li
              className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setSelectedLang("en");
                setShowLang(false);
                router.push("/en");
              }}
            >
              <Image
                className="max-w-8"
                src="/usa.png"
                alt="bangla"
                height={40}
                width={40}
              />
              English
            </li>
          </div>
        )}
      </div>
    </div>
  );
}
