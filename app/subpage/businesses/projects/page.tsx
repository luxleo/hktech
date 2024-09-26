import {Suspense} from "react";
import {tempFetchInitialProjects} from "@/public/data/projects";
import {Metadata} from "next";
import CommonContainer from "@/app/subpage/ui/common-container";
import SectionTitle from "@/app/subpage/ui/section_title";
import ProjectsContainer from "@/app/subpage/businesses/projects/project_container";

export const metadata: Metadata = {
    title: "프로젝트",
};
export default async function Page() {
    const initialProjects = await tempFetchInitialProjects();
    return (
        <CommonContainer>
            <Suspense>
                <SectionTitle title={'프로젝트'}/>
            </Suspense>
            <div className={'mt-20 w-full flex items-start'}>
                <Suspense>
                    <ProjectsContainer initialProjects={initialProjects}/>
                </Suspense>
            </div>
        </CommonContainer>
    )
};