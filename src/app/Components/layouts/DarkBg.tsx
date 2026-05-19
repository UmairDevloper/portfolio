const DarkAmbientSection = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <section className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden">

            {/* 🌑 BASE DARK LAYER */}
            <div className="absolute inset-0 bg-black" />

            {/* 💡 CENTER GLOW (FOCUS POINT) */}
            <div className="
        absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[600px] h-[600px]
        bg-gradient-radial from-cyan-500/10 via-purple-500/5 to-transparent
        blur-3xl
        opacity-70
      " />

            {/* 🌫️ SOFT TOP LIGHTING */}
            <div className="
        absolute inset-0
        bg-gradient-to-b from-black via-black/95 to-black
      " />

            {/* 📦 CONTENT */}
            <div className="relative z-10 max-w-full mx-auto">
                {children}
            </div>

        </section>
    );
};

export default DarkAmbientSection;