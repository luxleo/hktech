import {Suspense} from "react";
import {Metadata} from "next";
import CommonContainer from "@/app/subpage/ui/common-container";
import SectionTitle from "@/app/subpage/ui/section_title";
import IPRCardContainer from "@/app/subpage/rnd/rnds/ui/ipr_list_card";

export const metadata : Metadata = {
    title: "지적재산권"
}
export default function Page() {

    return (
        <CommonContainer>
            <Suspense>
                <SectionTitle title={'특허목록'}/>
            </Suspense>
            <IPRCardContainer/>
        </CommonContainer>
    )
};