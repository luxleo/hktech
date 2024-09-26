import {Suspense} from "react";
import Inner from "@/app/subpage/location/Inner";
import {Metadata} from "next";
import CommonContainer from "@/app/subpage/ui/common-container";
import SectionTitle from "@/app/subpage/ui/section_title";

export const metadata : Metadata = {
    title: "오시는 길"
}
export default function Page() {

    return (
        <CommonContainer>
            <Suspense>
                <SectionTitle title={'오시는 길'}/>
            </Suspense>
            <Inner/>
        </CommonContainer>
    );
};
