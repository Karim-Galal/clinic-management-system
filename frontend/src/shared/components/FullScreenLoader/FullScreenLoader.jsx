import Logo from "@/shared/components/Logo";

function FullScreenLoader() {

    return (

        <main className="flex min-h-dvh items-center justify-center bg-background">

            <div className="flex flex-col items-center gap-8">

                <Logo
                    showText={false}
                    className="animate-loader-logo"
                />

                <div className="flex items-center gap-2">

                    <span
                        className="size-2.5 rounded-full bg-primary animate-loader-dot"
                        style={{ animationDelay: "0ms" }}
                    />

                    <span
                        className="size-2.5 rounded-full bg-primary animate-loader-dot"
                        style={{ animationDelay: "150ms" }}
                    />

                    <span
                        className="size-2.5 rounded-full bg-primary animate-loader-dot"
                        style={{ animationDelay: "300ms" }}
                    />

                </div>

            </div>

        </main>

    );

}

export default FullScreenLoader;