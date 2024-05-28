"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const SuperNumber: Record<string, string> = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
};

export default function Home() {
  const [formattedText, setFormattedText] = useState("");

  const formatText = (text: string) => {
    const parts = text.split("\n").map((part) => {
      let newText = "";
      const t = part.trim();

      for (let i = 0; i < t.length; i++) {
        if (t[i] && SuperNumber[t[i] as string]) {
          newText += SuperNumber[t[i] as string];
        } else {
          newText += t[i];
        }
      }

      return newText;
    });

    setFormattedText(parts.join("\n"));
  };

  return (
    <main className="p-2">
      <div className="mt-5">
        <Textarea
          onChange={(e) => formatText(e.target.value)}
          className="h-96"
          placeholder="Dán đoạn Kinh Thánh ở đây..."
        />
      </div>

      <div className="mt-4">
        {formattedText.split("\n").map((text, index) => (
          <p className="p-0" key={index}>
            {text}
          </p>
        ))}
      </div>
    </main>
  );
}
