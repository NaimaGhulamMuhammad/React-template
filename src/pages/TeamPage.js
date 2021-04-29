import React from 'react';
import BannerLeft from "../components/BannerLeft";
import FooterBar from '../components/FooterBar';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import TeamSection from "../sections/TeamSection";

export default function TeamPage() {
    return (
        <>
             <div className="wraper">
            <Topbar />
            <Navbar />
            <BannerLeft heading="Our Team" l1="ourTeam"/>
            <TeamSection/>
            </div>
            <FooterBar />
        </>
    );
}