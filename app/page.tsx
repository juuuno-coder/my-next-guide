// src/app/page.tsx
import { guideData } from "./data"; // 방금 만든 데이터 가져오기

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-20">
      {/* 제목 섹션 */}
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Next.js 아키텍처 가이드
      </h1>
      <p className="text-gray-500 mb-12">JS와 React로 만드는 웹의 구조</p>

      {/* 카드 리스트 섹션 */}
      <div className="grid gap-6 w-full max-w-2xl px-4">
        {guideData.map((item) => (
          // map: 리스트를 반복해서 보여주는 자바스크립트 문법
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
              <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">
                {item.tag}
              </span>
            </div>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
