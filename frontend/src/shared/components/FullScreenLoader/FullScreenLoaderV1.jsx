import Logo from "@/shared/components/Logo";

function FullScreenLoader() {
    return (
        <main className="flex min-h-dvh items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-6">

                <Logo showText={false} />

                <div className="flex gap-2">

                    <span className="size-3 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />

                    <span className="size-3 animate-bounce rounded-full bg-primary [animation-delay:150ms]" />

                    <span className="size-3 animate-bounce rounded-full bg-primary [animation-delay:300ms]" />

                </div>

            </div>
        </main>
    );
}

export default FullScreenLoader;