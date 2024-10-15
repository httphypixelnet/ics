"use client";
import React from "react";
import { HoverCardTrigger, HoverCardContent, HoverCard } from "@/components/ui/hover-card";
import { CalendarIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

interface IDiscord {
    id: string
    username: string
    avatar: string
    discriminator: string
    public_flags: number
    flags: number
    banner: unknown
    accent_color: number
    global_name: string
    avatar_decoration_data: unknown
    banner_color: string
    clan: null | string
}

export default function Discord({ children }: { children: React.ReactNode }) {
    const [jayson, setJSON] = useState<null | IDiscord>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.intenstudios369.workers.dev/@me");
            const data = await response.json();
            setJSON(data);
        } catch (error) {
            console.error("Failed to fetch Discord data:", error);
        }
    };

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                {children}
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                {isClient && (
                    <div className="flex space-x-4">
                        <Avatar>
                            <AvatarImage src={jayson !== null ? `https://cdn.discordapp.com/avatars/${jayson.id}/${jayson.avatar}.webp` : undefined} />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">@{jayson !== null ? jayson.username : "Loading..."}</h4>
                            <div className="flex items-center pt-2">
                                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                                <span className="text-xs text-muted-foreground">
                                    Member since Feb 6, 2020.
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </HoverCardContent>
        </HoverCard>
    );
}