import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // クリックジャッキング防止
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // MIMEスニッフィング防止
          { key: "X-Content-Type-Options", value: "nosniff" },
          // リファラー情報を制限
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // HTTPS強制（1年間）
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          // 不要なブラウザ機能を無効化
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;