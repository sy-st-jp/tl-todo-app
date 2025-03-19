import {appConfig} from "@/config";
import {SwitchFetcher} from "./types/SwitchFetcher";

export const switchFetcher: SwitchFetcher = (production, mock?) => {
    if(appConfig.env === "mock" && mock){
        return mock()
    } else {
        return production()
    }
}
