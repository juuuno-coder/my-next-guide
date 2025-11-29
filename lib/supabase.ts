// src/lib/supabase.ts

import { createClient } from "@supabase/supabase-js";

// .env.local 파일에서 환경 변수를 가져옵니다.
// NEXT_PUBLIC_ 접두사가 붙은 변수는 프론트엔드에서도 접근 가능합니다.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 필수 환경 변수가 없으면 오류를 발생시킵니다.
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "환경 변수 (NEXT_PUBLIC_SUPABASE_URL 또는 KEY)를 찾을 수 없습니다. .env.local 파일을 확인하세요."
  );
}

// Supabase 클라이언트 생성 및 내보내기
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
