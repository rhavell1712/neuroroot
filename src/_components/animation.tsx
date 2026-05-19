"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Animation() {
    const pathname = usePathname();

    useEffect(() => {

        const ctx = gsap.context(() => {

            const fadeUp = document.querySelectorAll(
                "[data-animate='fade-up']"
            );

            const fade = document.querySelectorAll(
                "[data-animate='fade']"
            );

            gsap.killTweensOf(fadeUp);
            gsap.killTweensOf(fade);

            if (fadeUp.length > 0) {
                gsap.fromTo(
                    fadeUp,
                    {
                        y: 40,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.12,
                        ease: "power3.out",
                        clearProps: "all",
                    }
                );
            }

            if (fade.length > 0) {
                gsap.fromTo(
                    fade,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out",
                        clearProps: "all",
                    }
                );
            }

        });

        return () => {
            ctx.revert();
        };

    }, [pathname]);

    return null;
}