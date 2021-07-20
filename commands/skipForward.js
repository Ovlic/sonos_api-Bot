const fetch = require("node-fetch")
const auth = require("./config.json")
module.exports = {
    name: "skip",
    async execute(message, args){
        str_args = args.slice(0).join(" ")
        function room_check(room, _groups){
            for(i=0; i < _groups.groups.length; i++){
                if(_groups.groups[i].name == room){
                    return groupid = _groups.groups[i].id
                }
            }
            return null
        }
        async function get_groups(){
            sonoswait = await fetch("https://api.ws.sonos.com/control/api/v1/households/"+auth.h_id+"/groups", {
            headers: {
                Authorization: "Bearer "+auth.access_token,
                "Content-Type": "application/json"
            },
            method: "GET",
            mode: 'no-cors'
            }).then(response => response.json()).then(data => data)
            return sonoswait
                //console.log("Got data")
                //return data
            
        }
        if(!args||args.length == 0) return message.channel.send("Provide a room.")
        else{
            _groups = await get_groups()
            groupid = room_check(args[0], _groups)
            sonoswait = await fetch("https://api.ws.sonos.com/control/api/v1/groups/"+groupid+"/playback/skipToNextTrack", {
            headers: {
                Authorization: "Bearer "+access_token,
                "Content-Type": "application/json"
            },
            method: "POST",
            mode: 'no-cors'
            }).then(response => response.json()).then(data => data)
            console.log(sonoswait)
            if(!sonoswait.error) return message.channel.send("Skipped track in "+str_args+".")
        }
    }
}
