import { useEffect, useState, ReactNode } from "react";

interface TransitionProps {
    animations: string[];
    className?: string;
    children: ReactNode;
}

export function RepeatTransaction({ animations, className, children }: TransitionProps) {
    const [animation, setAnimation] = useState("");

    useEffect(() => {
        const startAnimation = () => {
            const animate = (index: number) => {
                setAnimation(animations[index]);
                setTimeout(() => {
                    if (index + 1 < animations.length) {
                        animate(index + 1);
                    } else {
                        animate(0);
                    }
                }, 1000);
            };

            animate(0);
        };

        startAnimation();
    }, []);

    return (
        <div className={`${className} ${animation}`}>
            {children}
        </div>
    );
}
