"use client"
import { redirect } from "next/navigation"
export default function Header(){
    return (
        <div className="flex border-2 border-white rounded text-white justify-center p-3 m-3 gap-1" onClick={() => redirect("/")}>
            <p>Quran and tools for learn it</p>
            <p className="text-yellow-200 glow">★</p>
            <p>نجم</p>
        </div>
    )
}
