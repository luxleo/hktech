import {Suspense} from "react";
import {Metadata} from "next";
import CommonContainer from "@/app/subpage/ui/common-container";
import SectionTitle from "@/app/subpage/ui/section_title";
import LicenceList from "@/app/subpage/rnd/rnds/ui/licence/licence_list";
export const metadata : Metadata = {
    title: "업·면허 등록 현황"
}
export default async function Page(){
    return (
        <CommonContainer>
            <Suspense>
                <SectionTitle title={'업·면허 등록 현황'}/>
            </Suspense>
            <Suspense>
                <LicenceList/>
            </Suspense>
        </CommonContainer>
    );
}