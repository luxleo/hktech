import InfoCardRoot from "@/app/(overview)/information_card/InfoCardRoot";

export type BusinessLink = {
    departmentName: string;
    link: string;
}
export default function BusinessInfoCard ({title,description,businessLinks}:{
    title: string;
    description: string;
    businessLinks: BusinessLink[];
}) {
    return (
        <InfoCardRoot title={title}>
            <div className={'flex flex-col w-full h-[200px]'}>
                <div className={'w-full mt-6 h-[70px] text-slate-500 group-hover:text-inherit text-[.8rem] flex justify-center items-start z-[2]'}>
                    {description}
                </div>
                <div className={'w-full grid grid-cols-2'}>
                    {businessLinks.map(el => (
                        <div key={`departments_link_${el.departmentName}`}
                             className={'text-[.8rem] z-[2] flex justify-center items-center text-slate-500 group-hover:text-inherit'}>
                            <div className={'flex justify-center items-center py-2 w-full hover:bg-slate-600/[.5]'}>
                                {el.departmentName}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </InfoCardRoot>
    )
};