import {mxpReportEvent,mxpIdentifyUser} from "../backend/requests"
export const reportEvent = async ({username,eventName,insertId,userProps}) => {
    console.log("triggered reportEvent")
    await updateUserProps({username,userProps})
    const timestamp = Date.now()
    const result = await mxpReportEvent({username,eventName,eventProps:{},insertId:insertId || uuidv4(),timestamp:timestamp})
    console.log("mixpanel reportEvent res", result)
    return
}

export const updateUserProps = async ({username,userProps}) => {
    const defaultProps = {hodor:"yes"}
    const myUserProps = !!userProps ? {...userProps,defaultProps} : defaultProps
    const result = await mxpIdentifyUser({username,userProps:myUserProps})
    console.log("mixpanel updaeUserProps res", result)
    return
}