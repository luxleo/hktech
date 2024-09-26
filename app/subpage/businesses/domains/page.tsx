import {Metadata} from "next";
import DomainMenuWrapper from "@/app/subpage/businesses/domains/domainContainer";
import {findDomainByMenuName, getCurrentDepartmentInfo, getDomains} from "@/app/subpage/businesses/domains/api";

export const metadata: Metadata = {
    title: "사업영역",
};
export default async function Page({searchParams}:{
    searchParams?: {
        currentDomain? : string;
        currentDepartment? : string;
    }
}) {
    const domains = await getDomains();
    const currentDomain = await findDomainByMenuName(searchParams?.currentDomain || '토목사업분야');
    const currentDepartment = searchParams?.currentDepartment || currentDomain.departments[0];
    const departmentInfo = await getCurrentDepartmentInfo(currentDepartment);

    return (
        <section className={'w-full'}>
            <DomainMenuWrapper domains={domains} currentDomain={currentDomain} currentDepartment={currentDepartment} departmentInfo={departmentInfo}/>
        </section>
    )
};