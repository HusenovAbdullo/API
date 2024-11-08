import { YM_ID } from "@/constants/metrika";
declare const window: any;

export const sendMetrik = (action: string) => {
    if (typeof window !== 'undefined' && typeof window.ym !== 'undefined') {
        if (process.env.NODE_ENV === 'productin'){
            window.ym(YM_ID, 'reachGoal', action);
        } else {
            console.log('sendMetrik', action)
        }
    }
}