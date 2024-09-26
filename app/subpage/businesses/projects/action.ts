//TODO: query로 필터할 수도 있음.

import {departmentProject} from "@/app/subpage/businesses/domains/api";

interface filterCond {
    year: number;
}

export async function getFilterdProject({year}: filterCond,initialProject: departmentProject[]) {
    return initialProject.filter(el => el.startDate?.startsWith(year.toString()));
}