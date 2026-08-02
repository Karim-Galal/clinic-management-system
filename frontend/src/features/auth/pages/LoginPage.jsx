

import LanguageSwitcher from "@/shared/components/LanguageSwitcher";

import Loginhero from "../components/LoginHero"
import LoginForm from "../components/LoginForm"


function LoginPage() {


    return (
      <>
        <main className="min-h-dvh bg-app">
        
          <div className="container py-6">
            
            <div className="flex justify-end">
                <LanguageSwitcher/>
            </div>
            <section className="mt-6 grid overflow-hidden rounded-3xl border border-border  bg-app shadow-xl lg:grid-cols-2">

              <Loginhero />

              <LoginForm />

            </section>


          </div>


        </main>
      </>
    );
}

export default LoginPage;