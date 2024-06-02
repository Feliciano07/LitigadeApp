import { Fragment } from "react";
import { AboutPage } from "./home/pages/AboutPage";
import { ClienteSayPage } from "./home/pages/ClientSayPage";
import { ContactUsPage } from "./home/pages/ContactUsPage";
import { HomePage } from "./home/pages/HomePage";
import { LegalTeamPage } from "./home/pages/LegalTeamPage";
import { PracticePage } from "./home/pages/PracticePage";
import { Footer } from "./ui/components/Footer";

const LitigadeApp = () => {
    return (
        <Fragment>
            <HomePage />
            <PracticePage />
            <AboutPage />
            <ClienteSayPage />
            <LegalTeamPage />
            <ContactUsPage />
            <Footer/>
        </Fragment>

    )
}

export default LitigadeApp;