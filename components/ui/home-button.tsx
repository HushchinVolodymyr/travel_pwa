"use client";

import {Button} from "@heroui/button";
import {Home} from "lucide-react";
import {useRouter} from "next/navigation";

const HOME_LINK = "https://www.google.com/maps/place/Livadhiotis+City+Hotel/@34.9097919,33.6362128,1699m/data=!3m1!1e3!4m20!1m10!3m9!1s0x14e082a337893b77:0x7cd0cf72e4948509!2sLivadhiotis+City+Hotel!5m2!4m1!1i2!8m2!3d34.9115753!4d33.63591!16s%2Fg%2F1tpfg7rt!3m8!1s0x14e082a337893b77:0x7cd0cf72e4948509!5m2!4m1!1i2!8m2!3d34.9115753!4d33.63591!16s%2Fg%2F1tpfg7rt?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D";

function HomeButton() {
    const router = useRouter();

    return <Button startContent={<Home/>} size="lg" onPress={() => window.open(HOME_LINK, '_blank')}>До готелю</Button>;
}

export default HomeButton;
