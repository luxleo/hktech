import {Suspense} from "react";
import {Metadata} from "next";
import CommonContainer from "@/app/subpage/ui/common-container";
import SectionTitle from "@/app/subpage/ui/section_title";
import ResearchList from "@/app/subpage/rnd/rnds/ui/research/research_list";
import ResearchProjectList from "@/app/subpage/rnd/rnds/ui/research_project/research_project_list";


export const metadata : Metadata = {
    title: "연구개발"
}
export default function Page() {

    return (
        <CommonContainer>
            <Suspense>
                <SectionTitle title={'연구'}/>
            </Suspense>
            <div className={'mt-5 sm:mt-14 w-full flex flex-col items-start'}>
                <ResearchList/>
            </div>
            <Suspense>
                <SectionTitle title={'연구과제'}/>
            </Suspense>
            <div className={'mt-5 sm:mt-14 w-full flex flex-col items-start'}>
                <ResearchProjectList/>
            </div>
        </CommonContainer>
    )
};